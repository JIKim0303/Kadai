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
        }
        $food = new Food('ランチセット', 600);
        print_r($food);

        class Animal {
            private $name;
            private $height;
            private $weight;
            public function __construct(string $name, string $height, string $weight) {
                $this->name = $name;
                $this->height = $height;
                $this->weight = $weight;
            }
        }
        $animal = new Animal('ゴリラ', '200cm', '250kg');
        print_r($animal);
        ?>
    </p>
</body>
</html>