"use client";

import { useMemo, useState } from "react";

const carModels: Record<string, string[]> = {
  "Audi": ["A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8", "Q2", "Q3", "Q5", "Q7", "Q8", "TT", "R8", "Друго"],
  "BMW": ["1 Series", "3 Series", "5 Series", "7 Series", "X1", "X3", "X4", "X5", "X6", "X7", "E46", "E60", "E90", "F10", "F30", "G30", "Друго"],
  "Mercedes-Benz": ["A-Class", "B-Class", "C-Class", "E-Class", "S-Class", "CLA", "CLS", "GLA", "GLC", "GLE", "GLS", "ML", "Vito", "Sprinter", "Друго"],
  "Volkswagen": ["Golf", "Passat", "Polo", "Touran", "Tiguan", "Touareg", "Caddy", "Transporter", "Sharan", "Jetta", "Bora", "Arteon", "T-Roc", "Друго"],
  "Skoda": ["Fabia", "Octavia", "Superb", "Rapid", "Roomster", "Yeti", "Kodiaq", "Karoq", "Scala", "Kamiq", "Друго"],
  "Seat": ["Ibiza", "Leon", "Toledo", "Altea", "Ateca", "Arona", "Tarraco", "Друго"],
  "Porsche": ["Cayenne", "Macan", "Panamera", "911", "Boxster", "Cayman", "Друго"],
  "Opel": ["Astra", "Corsa", "Vectra", "Insignia", "Zafira", "Meriva", "Antara", "Mokka", "Vivaro", "Movano", "Друго"],
  "Ford": ["Fiesta", "Focus", "Mondeo", "C-Max", "S-Max", "Galaxy", "Kuga", "Transit", "Ranger", "Fusion", "Друго"],
  "Peugeot": ["106", "206", "207", "208", "306", "307", "308", "407", "508", "2008", "3008", "5008", "Partner", "Boxer", "Друго"],
  "Citroen": ["C1", "C2", "C3", "C4", "C5", "C6", "C-Elysee", "Berlingo", "Jumpy", "Jumper", "Xsara Picasso", "Друго"],
  "Renault": ["Clio", "Megane", "Scenic", "Laguna", "Talisman", "Captur", "Kadjar", "Kangoo", "Trafic", "Master", "Espace", "Друго"],
  "Dacia": ["Logan", "Sandero", "Duster", "Dokker", "Lodgy", "Spring", "Jogger", "Друго"],
  "Toyota": ["Yaris", "Auris", "Corolla", "Avensis", "Camry", "RAV4", "Hilux", "Land Cruiser", "Prius", "C-HR", "Aygo", "Друго"],
  "Lexus": ["IS", "ES", "GS", "LS", "NX", "RX", "UX", "LX", "CT", "Друго"],
  "Nissan": ["Micra", "Almera", "Primera", "Qashqai", "Juke", "X-Trail", "Navara", "Patrol", "Note", "Pulsar", "Друго"],
  "Honda": ["Jazz", "Civic", "Accord", "CR-V", "HR-V", "FR-V", "Stream", "Друго"],
  "Mazda": ["2", "3", "5", "6", "CX-3", "CX-5", "CX-7", "CX-9", "MX-5", "Друго"],
  "Mitsubishi": ["Colt", "Lancer", "Outlander", "Pajero", "ASX", "L200", "Space Star", "Друго"],
  "Suzuki": ["Swift", "Vitara", "Grand Vitara", "SX4", "Jimny", "Alto", "Ignis", "Друго"],
  "Hyundai": ["i10", "i20", "i30", "i40", "Accent", "Elantra", "Tucson", "Santa Fe", "ix35", "Kona", "Друго"],
  "Kia": ["Picanto", "Rio", "Ceed", "ProCeed", "Optima", "Sportage", "Sorento", "Stonic", "Niro", "Друго"],
  "Volvo": ["S40", "S60", "S80", "S90", "V40", "V50", "V60", "V70", "XC40", "XC60", "XC70", "XC90", "Друго"],
  "Saab": ["9-3", "9-5", "Друго"],
  "Fiat": ["Panda", "Punto", "Grande Punto", "Bravo", "Brava", "Stilo", "500", "Doblo", "Ducato", "Друго"],
  "Alfa Romeo": ["147", "156", "159", "Giulietta", "Mito", "Giulia", "Stelvio", "Друго"],
  "Jeep": ["Cherokee", "Grand Cherokee", "Wrangler", "Compass", "Renegade", "Liberty", "Друго"],
  "Chrysler": ["300C", "PT Cruiser", "Voyager", "Grand Voyager", "Друго"],
  "Dodge": ["Caliber", "Journey", "Nitro", "Ram", "Друго"],
  "Land Rover": ["Freelander", "Discovery", "Range Rover", "Range Rover Sport", "Evoque", "Defender", "Друго"],
  "Jaguar": ["XE", "XF", "XJ", "F-Pace", "E-Pace", "Друго"],
  "Mini": ["Cooper", "One", "Countryman", "Clubman", "Друго"],
  "Chevrolet": ["Aveo", "Cruze", "Captiva", "Spark", "Lacetti", "Друго"],
  "Daewoo": ["Matiz", "Lanos", "Nubira", "Leganza", "Друго"],
  "SsangYong": ["Kyron", "Rexton", "Korando", "Actyon", "Друго"],
  "Subaru": ["Impreza", "Legacy", "Forester", "Outback", "XV", "Друго"],
  "Isuzu": ["D-Max", "Trooper", "Друго"],
  "Iveco": ["Daily", "Eurocargo", "Stralis", "Друго"],
  "MAN": ["TGE", "TGL", "TGM", "TGX", "Друго"],
  "Scania": ["R Series", "P Series", "G Series", "Друго"],
  "DAF": ["LF", "CF", "XF", "Друго"],
  "Volvo Trucks": ["FH", "FM", "FL", "FE", "Друго"],
  "Други": ["Друг модел"]
};

const brands = Object.keys(carModels);

const keyTypes = [
  "Обикновен механичен ключ",
  "Ключ с транспондер",
  "Сгъваем ключ с дистанционно",
  "Smart Key / Keyless Go",
  "Карта Renault / Key Card",
  "Мотоциклетен ключ",
  "Не съм сигурен"
];

const keyStatus = [
  "Имам работещ ключ",
  "Имам един ключ и искам резервен",
  "Имам повреден ключ",
  "Изгубени са всички ключове",
  "Автомобилът е заключен"
];

export default function KeyRequestForm() {
  const years = useMemo(() => {
    const current = new Date().getFullYear() + 1;
    return Array.from({ length: current - 1989 }, (_, i) => current - i);
  }, []);

  const [selectedBrand, setSelectedBrand] = useState("");
  const [modelValue, setModelValue] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const availableModels = selectedBrand ? carModels[selectedBrand] || ["Друг модел"] : [];
  const showCustomModel = modelValue === "Друго" || modelValue === "Друг модел";

  async function submit(formData: FormData) {
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/request", {
        method: "POST",
        body: formData
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Грешка при изпращане");

      setStatus("success");
      setMessage("Запитването е изпратено успешно. Ще се свържем с вас с цена и възможности за изработка.");
      const form = document.getElementById("key-request-form") as HTMLFormElement | null;
      form?.reset();
      setSelectedBrand("");
      setModelValue("");
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Неуспешно изпращане");
    }
  }

  return (
    <form id="key-request-form" className="form" action={submit}>
      <h3>Запитване за автомобилен ключ</h3>
      <p className="muted">Попълнете данните и ще получите отговор с цена за изработка и програмиране.</p>

      <div className="two">
        <div className="field">
          <label>Име *</label>
          <input name="name" required placeholder="Вашето име" />
        </div>
        <div className="field">
          <label>Телефон *</label>
          <input name="phone" required placeholder="0878 441 442" />
        </div>
      </div>

      <div className="two">
        <div className="field">
          <label>Имейл</label>
          <input name="email" type="email" placeholder="example@email.com" />
        </div>
        <div className="field">
          <label>Населено място</label>
          <input name="city" placeholder="Стара Загора, Казанлък..." />
        </div>
      </div>

      <div className="two">
        <div className="field">
          <label>Марка автомобил *</label>
          <select
            name="brand"
            required
            value={selectedBrand}
            onChange={(e) => {
              setSelectedBrand(e.target.value);
              setModelValue("");
            }}
          >
            <option value="" disabled>Изберете марка</option>
            {brands.map((b) => <option key={b} value={b}>{b}</option>)}
          </select>
        </div>
        <div className="field">
          <label>Модел *</label>
          <select
            name="model"
            required
            value={modelValue}
            onChange={(e) => setModelValue(e.target.value)}
            disabled={!selectedBrand}
          >
            <option value="" disabled>{selectedBrand ? "Изберете модел" : "Първо изберете марка"}</option>
            {availableModels.map((m) => <option key={m} value={m}>{m}</option>)}
          </select>
        </div>
      </div>

      {showCustomModel && (
        <div className="field">
          <label>Уточнете модела</label>
          <input name="customModel" placeholder="Напр. конкретен модел или модификация" />
        </div>
      )}

      <div className="two">
        <div className="field">
          <label>Година *</label>
          <select name="year" required defaultValue="">
            <option value="" disabled>Изберете година</option>
            {years.map((y) => <option key={y} value={y}>{y}</option>)}
          </select>
        </div>
        <div className="field">
          <label>VIN номер</label>
          <input name="vin" placeholder="По желание" />
        </div>
      </div>

      <div className="two">
        <div className="field">
          <label>Тип ключ *</label>
          <select name="keyType" required defaultValue="">
            <option value="" disabled>Изберете тип</option>
            {keyTypes.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
        <div className="field">
          <label>Наличност на ключове *</label>
          <select name="keyStatus" required defaultValue="">
            <option value="" disabled>Изберете</option>
            {keyStatus.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
      </div>

      <div className="field">
        <label>Прикачване на снимки</label>
        <input name="files" type="file" multiple accept="image/*,.pdf" />
        <small className="muted">Може да добавите снимка на ключ, автомобил или талон.</small>
      </div>

      <div className="field">
        <label>Допълнителна информация</label>
        <textarea name="details" placeholder="Напр. колата не пали, дистанционното не работи, всички ключове са изгубени..." />
      </div>

      <button className="btn btn-primary" type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Изпращане..." : "Изпрати запитване"}
      </button>
      <div className={`notice ${status === "success" ? "show" : ""}`}>{message}</div>
      <div className={`notice error ${status === "error" ? "show" : ""}`}>{message}</div>
    </form>
  );
}
