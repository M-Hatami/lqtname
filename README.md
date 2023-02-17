<!DOCTYPE html>
<html lang="fa" dir="rtl">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Readme</title>
  </head>
  <body>
    <div class="box">
      <div aria-hidden="true">برنامه لغتنامه</div>
      <span aria-hidden="true">تغییر دهنده پیام</span>
      <div>
        <div>
          <p>
            تغییر دهنده پیام یک خدمت رمزگذاری به سه روش مختلف را ارائه میکند
            <a
              target="_blank"
              rel="noopener"
              href="https://en.wikipedia.org/wiki/Cipher"
              >ciphers</a
            >،پیام رمزشده را در صفحه نمایش میدهد
          </p>
          <p>سه خدمت:</p>
          <ol>
            <li>
              A
              <a
                target="_blank"
                rel="noopener"
                href="https://en.wikipedia.org/wiki/Caesar_cipher"
                >“Caesar”</a
              >در این روش ترتیب نشانه‌های موجود در پیام ورودی بصورت الفبایی به
              تعداد داده شده جابجا میشود
            </li>
            <li>
              “Symbol” در این روش هر حرف فارسی با یک حرف لاتین برای فنگلیش کردن
              بصورت زیر جابجا میشود:
              <table id="tb">
                <tr>
                  <th>حروف</th>
                  <td>ا/ع</td>
                  <td>ب</td>
                  <td>پ</td>
                  <td>ت/ط</td>
                  <td>ث/س/ص</td>
                  <td>ج</td>
                  <td>چ</td>
                  <td>ح</td>
                  <td>خ</td>
                  <td>د</td>
                  <td>ذ/ز/ض/ظ</td>
                  <td>ر</td>
                  <td>ژ</td>
                  <td>ش</td>
                  <td>غ/ق</td>
                  <td>ف</td>
                  <td>ک</td>
                  <td>گ</td>
                  <td>ل</td>
                  <td>م</td>
                  <td>ن</td>
                  <td>و</td>
                  <td>ه</td>
                  <td>ی</td>
                </tr>
                <tr>
                  <th>معادل</th>
                  <td>a</td>
                  <td>b</td>
                  <td>p</td>
                  <td>t</td>
                  <td>s</td>
                  <td>j</td>
                  <td>w</td>
                  <td>h</td>
                  <td>o</td>
                  <td>d</td>
                  <td>z</td>
                  <td>r</td>
                  <td>c</td>
                  <td>x</td>
                  <td>q</td>
                  <td>f</td>
                  <td>k</td>
                  <td>g</td>
                  <td>l</td>
                  <td>m</td>
                  <td>n</td>
                  <td>u</td>
                  <td>e</td>
                  <td>y</td>
                </tr>
              </table>
            </li>
            <li>
              یک “Reverse” رمز برعکس که در این روش مکان هر حرف در یک کلمه برعکس
              میشود.
            </li>
          </ol>
          <p>
            برای استفاده از این خدمات، دستور زیر را پس از نصب نُد روی دستگاه‌تان
            اجرا کنید:
          </p>
          <pre><pre><code><div class="codeContainer"><span><span>node message-mixer.js ['caesar'|'symbol'|'reverse'</span><span>] [amount]</span></span><br></div></code></pre></pre>
          <p>اینجا چند نمونه از اجرای این برنامه را میبینید:</p>
          <pre><pre><code><div class="codeContainer"><span><span>$ node message-mixer.js caesar 4</span></span><br><span><span>Enter the message you would like to encrypt...</span></span><br><span><span>&gt; hello world</span></span><br><span><span> </span></span><br><span><span>Here is your encrypted message:</span></span><br><span><span>&gt; lipps asvph</span></span><br><span><span> </span></span><br><span><span>$ node message-mixer.js 'reverse'</span></span><br><span><span>Enter the message you would like to encrypt...</span></span><br><span><span>&gt; hello world</span></span><br><span><span> </span></span><br><span><span>Here is your encrypted message:</span></span><br><span><span>&gt; olleh dlrow</span></span><br><span><span> </span></span><br><span><span>$ node .\message-mixer.js symbol</span></span><br><span><span>Enter the message you would like to encrypt...</span></span><br><span><span>> طرح</span></span><br><span><span> </span></span><br><span><span>Here is your encrypted message:</span></span><br><span><span>> trh</span></span><br><span><span> </span></span><br></div></code></pre></pre>
          <p>
            در حال حاضر این طرح دارای سه پرونده بنام
            <strong>message-mixer.js, encryptors.js, super-encoders.js</strong>
            میباشد. عملکرد این پرونده‌ها شامل موارد زیر است:
          </p>
          <ol>
            <li>تابعی که رمزگذاری فهرست شده در بالا را اجرا میکند.</li>
            <li>برنامه‌ای که پیام ورودی کاربر را دریافت میکند.</li>
            <li>متنی که خروجی را برای کاربر نمایش میدهد.</li>
          </ol>
          <p>در صورت علاقه شما هم میتوانید در بهبود این برنامه مشارکت کنید</p>
          <p>
            تابع رمزگذاری پرونده
            <strong>encryptors.js</strong> است, و
            <strong>message-mixer.js</strong> از آن بهره میبرد.
          </p>
          <p>
            قبل از شروع، سعی کنید که دستورات مذکور در بالا را اجرا کرده و با
            کارکرد برنامه آشنا شوید. این برنامه از متغیرهای محیطی
            <a
              target="_blank"
              rel="noopener"
              href="https://nodejs.org/api/process.html#process_process_argv"
              ><code>process.argv</code></a
            >,
            <a
              target="_blank"
              rel="noopener"
              href="https://nodejs.org/api/process.html#process_process_stdin"
              ><code>process.stdin</code></a
            >,
            <a
              target="_blank"
              rel="noopener"
              href="https://nodejs.org/api/process.html#process_process_stdout"
              ><code>process.stdout</code></a
            >
            به منظور تشخیص روش رمزگذاری درخواست شده و فهم پیام وارد شده توسط
            کاربر و همچنین نمایش پیام رمزگذاری شده بهره میبرد.
          </p>
        </div>
      </div>
    </div>

  </body>
</html>
