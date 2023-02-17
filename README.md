<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body>
    <div class="box">
      <div aria-hidden="true">Full-Stack Engineer</div>
      <span aria-hidden="true">Message Mixer</span>
      <div>
        <div>
          <p>
            Message Mixer Inc. offers a message-encryption service that
            transforms input text, using various
            <a
              target="_blank"
              rel="noopener"
              href="https://en.wikipedia.org/wiki/Cipher"
              >ciphers</a
            >, and displays the encrypted message to the console.
          </p>
          <p>There are three encryption methods provided by this service:</p>
          <ol>
            <li>
              A
              <a
                target="_blank"
                rel="noopener"
                href="https://en.wikipedia.org/wiki/Caesar_cipher"
                >“Caesar Cipher”</a
              >
              in which the characters of the input message are shifted
              alphabetically by a given amount.
            </li>
            <li>
              A “Symbol Cipher” in which select characters from the input
              message are replaced with visually similar symbols.
            </li>
            <li>
              A “Reverse Cipher” in which each word of the input message is
              reversed in place.
            </li>
          </ol>
          <p>To use this service, run the command below:</p>
          <pre><pre><code><div class="codeContainer"><span><span>node message-mixer.js ['caesar'|'symbol'|'reverse'</span><span>] [amount]</span></span><br></div></code></pre></pre>
          <p>Here are some examples of running this program:</p>
          <pre><pre><code><div class="codeContainer"><span><span>$ node message-mixer.js caesar 4</span></span><br><span><span>Enter the message you would like to encrypt...</span></span><br><span><span>&gt; hello world</span></span><br><span><span> </span></span><br><span><span>Here is your encrypted message:</span></span><br><span><span>&gt; lipps asvph</span></span><br><span><span> </span></span><br><span><span>$ node message-mixer.js 'reverse'</span></span><br><span><span>Enter the message you would like to encrypt...</span></span><br><span><span>&gt; hello world</span></span><br><span><span> </span></span><br><span><span>Here is your encrypted message:</span></span><br><span><span>&gt; olleh dlrow</span></span><br></div></code></pre></pre>
          <p>
            At present, Message Mixer Inc. sells their encryption service as a
            program in a single file called <strong>message-mixer.js</strong>.
            This single file includes:
          </p>
          <ol>
            <li>The functions that perform the encryptions listed above.</li>
            <li>The code for retrieving the user input.</li>
            <li>The code for displaying the output back to the user.</li>
          </ol>
          <p>
            Message Mixer Inc. now wants to join the open-source community by
            packaging its encryption functions in a module and allowing other
            developers to import these encryption functions into their own
            projects.
          </p>
          <p>
            In this project, you will help Message Mixer Inc. extract and
            isolate its encryption functions into a module, called
            <strong>encryptors.js</strong>, and then refactor
            <strong>message-mixer.js</strong> to use this module’s functions.
          </p>
          <p>
            Before you begin, try running the commands listed above in the
            terminal. Then, familiarize yourself with how the program works by
            examining the three files in the file directory, focusing on
            <strong>message-mixer.js</strong>. At the top of this file you will
            find the three encryption cipher functions. Towards the bottom of
            the file, you will find some code that uses the
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
            environment variables to determine which encryption method to use,
            parse the user input, and display the encrypted message.
          </p>
        </div>
      </div>
    </div>
  </body>
</html>
