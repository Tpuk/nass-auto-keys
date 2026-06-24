import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

function val(form: FormData, key: string) {
  const item = form.get(key);
  return typeof item === "string" ? item.trim() : "";
}

export async function POST(req: NextRequest) {
  try {
    const form = await req.formData();
    const name = val(form, "name");
    const phone = val(form, "phone");
    const email = val(form, "email");
    const city = val(form, "city");
    const brand = val(form, "brand");
    const model = val(form, "model");
    const year = val(form, "year");
    const vin = val(form, "vin");
    const keyType = val(form, "keyType");
    const keyStatus = val(form, "keyStatus");
    const details = val(form, "details");

    if (!name || !phone || !brand || !model || !year || !keyType || !keyStatus) {
      return NextResponse.json({ error: "Моля попълнете задължителните полета." }, { status: 400 });
    }

    const files = form.getAll("files").filter((f): f is File => f instanceof File && f.size > 0);
    const attachments = await Promise.all(files.map(async (file) => ({
      filename: file.name,
      content: Buffer.from(await file.arrayBuffer()),
      contentType: file.type || undefined
    })));

    const gmailUser = process.env.GMAIL_USER;
    const gmailPass = process.env.GMAIL_APP_PASSWORD;
    const mailTo = process.env.MAIL_TO || "autokeys.stz@gmail.com";

    if (!gmailUser || !gmailPass) {
      return NextResponse.json({ error: "Имейл настройките не са конфигурирани." }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: gmailUser, pass: gmailPass }
    });

    const html = `
      <div style="font-family:Arial,sans-serif;line-height:1.5">
        <h2>Ново запитване от сайта Nass Auto Keys</h2>
        <p><b>Име:</b> ${name}</p>
        <p><b>Телефон:</b> <a href="tel:${phone}">${phone}</a></p>
        <p><b>Имейл:</b> ${email || "-"}</p>
        <p><b>Населено място:</b> ${city || "-"}</p>
        <hr />
        <p><b>Автомобил:</b> ${brand} ${model} ${year}</p>
        <p><b>VIN:</b> ${vin || "-"}</p>
        <p><b>Тип ключ:</b> ${keyType}</p>
        <p><b>Наличност на ключове:</b> ${keyStatus}</p>
        <p><b>Допълнителна информация:</b><br>${details || "-"}</p>
        <p><b>Дата:</b> ${new Date().toLocaleString("bg-BG")}</p>
      </div>
    `;

    await transporter.sendMail({
      from: `Nass Auto Keys <${gmailUser}>`,
      to: mailTo,
      replyTo: email || gmailUser,
      subject: `Запитване за ключ: ${brand} ${model} ${year}`,
      html,
      attachments
    });

    if (email) {
      await transporter.sendMail({
        from: `Nass Auto Keys <${gmailUser}>`,
        to: email,
        subject: "Получихме Вашето запитване | Nass Auto Keys",
        html: `<p>Здравейте, ${name},</p><p>Получихме запитването Ви за ${brand} ${model} ${year}. Ще се свържем с Вас възможно най-скоро с цена и възможности за изработка и програмиране на ключ.</p><p>Поздрави,<br>Nass Auto Keys<br>0878 441 442</p>`
      });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Възникна грешка при изпращане." }, { status: 500 });
  }
}
