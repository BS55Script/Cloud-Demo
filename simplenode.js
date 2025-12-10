<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Node.js Demo App</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <style>
    body {
      margin: 0;
      font-family: Arial, Helvetica, sans-serif;
      background: linear-gradient(135deg, #1e3c72, #2a5298);
      color: #fff;
    }

    .container {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .card {
      background: #ffffff;
      color: #333;
      padding: 40px;
      border-radius: 12px;
      width: 90%;
      max-width: 500px;
      text-align: center;
      box-shadow: 0 10px 30px rgba(0,0,0,0.2);
    }

    h1 {
      margin-bottom: 10px;
      color: #2a5298;
    }

    p {
      font-size: 16px;
      line-height: 1.6;
    }

    .badge {
      margin-top: 20px;
      display: inline-block;
      padding: 10px 18px;
      background: #2a5298;
      color: #fff;
      border-radius: 30px;
      font-weight: bold;
    }

    footer {
      margin-top: 25px;
      font-size: 14px;
      color: #666;
    }
  </style>
</head>

<body>

  <div class="container">
    <div class="card">
      <h1>🚀 Node.js Demo Application</h1>
      <p>
        This is a simple one-page static application running on
        <strong>Node.js</strong> and deployed on a server.
      </p>
      <p>
        Perfect for demonstrating:
        <br>✔ EC2 Deployment
        <br>✔ Node.js Runtime
        <br>✔ Port Management
      </p>

      <div class="badge">
        Running on PORT 3000
      </div>

      <footer>
        <br>
        Demo for DevOps / Cloud Training
      </footer>
    </div>
  </div>

</body>
</html>
