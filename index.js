<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <title>나만의 동기부여 홈화면 만들기</title>
$(document).ready(function () {
            renderCurrentTime();
            renderQuote();
        });


function renderCurrentTime() {
    let url = `https://worldtimeapi.org/api/timezone/Asia/Seoul`;
    fetch(url)
        .then(res => res.json()).then((data) => {
            let datetime = data['datetime'].substr(11,5);
            $('#time').text(datetime);
        });
}


        function renderQuote() {
            let url = `https://api.quotable.io/random`;
            fetch(url)
                .then(res => res.json()).then((data) => {
                    let content = `" ${data['content']} "`;
                    let author = `- ${data['author']} -`;
                    $('#content').text(content);
                    $('#author').text(author);
                });
      <script src="index.js"></script>  }
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');

        * {
            font-family: 'Poppins', sans-serif;
        }

        body {
            background-image: url("youngnack01.JPG");
            background-position: center;

            color: white;
        }

        .time {
            font-size: 80px;
            font-weight: bold;
        }

        .greeting {
            font-size: 50px;
        }

        .todo {
            font-size: 30px;
        }

        .author {
            font-size: 25px;
            font-style: italic;
        }

        .main {
            width: 100vw;
            height: 80vh;

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        .quote {
            width: 100vw;
            height: 20vh;

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

    </style>

    <script src="index.js"></script>
</head>

<body>
    <div class="main">
        <div class="time">12:00</div>
        <div class="greeting">Hello, Korea!!
    <div class="quote">
        <div class="author">- 명언의 저자 -</div>
        <div class="content">" 명언의 내용 "</div>
    </div>
</body>

</html>
