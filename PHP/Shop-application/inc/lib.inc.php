<?
	function createMenu($menu, $vertical=true){
		if(!is_array($menu))
			return false;
		$display = $vertical ? "block" : "inline-block";
		echo "<ul>";
		foreach($menu as $m){
			echo "<li style='display:$display; margin-right:15px;'><a href='{$m['link']}'>{$m['text']}</a></li>";
		}
		echo "</ul>";
		return true;
	}

	function addItemToCatalog($name, $category, $price, $desc, $img){
		
		global $link;
		$sql = "INSERT INTO products(name, category, price, Description, Image)
				VALUES(?, ?, ?, ?, ?)";
		if(!$stmt = mysqli_prepare($link, $sql))
			return false;
		mysqli_stmt_bind_param($stmt, 'ssiss', $name, $category, $price, $desc, $img);
		mysqli_stmt_execute($stmt);
		mysqli_stmt_close($stmt);
		return true;
	}

	function can_upload($file){
		if($file['name'] == '')
			return 'Вы не выбрали файл';
		if($file['size'] == 0)
			return 'Файл слишком большой';
		$getMime = explode('.', $file['name']);
		$mime = strtolower(end($getMime));
		$types = array('jpg', 'png', 'gif', 'bmp', 'jpeg');
		if(!in_array($mime, $types))
			return 'Недопустимый тип файла';
		return true;
	}

	function make_uploads($file){
		$name = mt_rand(0, 10000).$file['name'];
		copy($file['tmp_name'], '../files/'.$name);
		return $name;
	}

	function downloadAllItems(){
		global $link;
		$sql = "SELECT id, name, category, price, description, image FROM products";
		if(!$result = mysqli_query($link, $sql))
			return false;
		$products = mysqli_fetch_all($result, MYSQLI_ASSOC);
		mysqli_free_result($result);
		return $products;
	}

	function saveBasket(){
		global $basket;
		$basket = base64_encode(serialize($basket));
		setcookie('basket', $basket, 0x7FFFFFFF, '/');
	}

	function basketInit(){
		global $basket, $count;
		if(!isset($_COOKIE['basket'])){
			$basket = ['orderid' => uniqid()];
			saveBasket();
		}else{
			$basket = unserialize(base64_decode($_COOKIE['basket']));
			$count = countProducts($basket);
		}
	}
	function countProducts($data){
		$count = 0;
		foreach($data as $key => $val){
			if($key == 'orderid'){
				$count +=0;
			}else{
				$count += $val;
			}
		}
		return $count;
	}

	function add2Basket($id){
		global $basket;
		if($basket[$id] >= 1){
			$basket[$id] = ++$basket[$id];
		}else{
			$basket[$id] = 1;
		}
			saveBasket();
	}

	function myBasket(){
		global $basket, $link;
		$goods = array_keys($basket);
		array_shift($goods);
		if(!$goods)
			return false;
		$ids = implode(',', $goods);
		$sql = "SELECT id, name, category, price, description, image FROM products WHERE id IN ($ids)";
		if(!$result = mysqli_query($link, $sql))
			return false;
		$items = result2Array($result);
		mysqli_free_result($result);
		return $items;
	}

	function result2Array($data){
		global $basket;
		$arr = [];
		while($row = mysqli_fetch_ASSOC($data)){
			$row['quantity'] = $basket[$row['id']];
			$arr[] = $row;
		}
		return $arr;
	}
	function deleteFromBasket($id){
		global $basket;
		unset($basket[$id]);
		saveBasket();
	}

	function saveQuantity($id, $quantity){
		global $basket;
		$basket[$id] = $quantity;
		saveBasket();
	}

	function saveOrder($dt){
		global $link, $basket;
		$goods = myBasket();
		$stmt = mysqli_stmt_init($link);
		$sql = "INSERT INTO orders(name, category, price, description, image, quantity, orderid, datetime)
				VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
		if(!mysqli_stmt_prepare($stmt, $sql))
			return false;
		foreach($goods as $item){
			mysqli_stmt_bind_param($stmt, "ssissisi", $item["name"], $item["category"], $item["price"], $item["description"], $item["image"], $item["quantity"], $basket["orderid"], $dt);
			mysqli_stmt_execute($stmt);
		}
		mysqli_stmt_close($stmt);
		setcookie('basket', "", 1);
		return true;
	}

