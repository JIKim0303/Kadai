<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Kadai_015</title></title>
</head>
<body>
    <p>
        <?php
        class Food {
            private $name;
            private $price;
            public function __construct(string $name,int $price) {
                $this->name = $name;
                $this->price = $price;
            }
            public function show_price(int $price) {
                echo $this->price . '<br>';
            }
        }
        $food = new Food('ランチセット', 600);
        $food->show_price(600);
        ?>
    </p>
</body>
</html>