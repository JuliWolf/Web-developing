<?
$goods = myBasket();
// var_dump($goods);
if(!$count){
	echo "<p>В вашей корзине нет товаров. Вернитесь в <a href='index.php?id=catalog'>каталог</a></p>";
	exit;
}else{
	echo "<p>Вернитесь в <a href='index.php?id=catalog'>каталог</a></p>";
}
?>
<table>
	<tr>
		<th>№</th>
		<th>Image</th>
		<th>Name</th>
		<th>Category</th>
		<th>Price</th>
		<th>Decription</th>
		<th>Quantity</th>
		<th>Remove</th>
	</tr>
<?
	$i = 1;
	$sum = 0;
	foreach($goods as $p){
?>
	<tr>
		<th><?=$i?></th>
		<th><img src="../files/<?=$p['image']?>" alt="<?=$p['image']?>" style="height:30px; width:35px;"></th>
		<th><?=$p['name']?></th>
		<th><?=$p['category']?></th>
		<th><?=$p['price']?> руб.</th>
		<th><?=$p['description']?></th>
		<th><input type="text" name="quantity" class="input_quantity" data-id="<?=$p['id']?>" value="<?=$p['quantity']?>"></th>
		<th><a href="../admin/delete_from_basket.php?id=<?=$p['id']?>">Remove</a></th>
	</tr>

<?

	$i++;
	}
?>

</table>
<p>Всего товаров в корзине на сумму <strong id="sum"></strong> руб.</p>

<div align="center">
	<input type="button" class="btn btn-default" value="Оформить заказ!" onClick="location.href='http://shop-application/index.php?id=orderform'"/>
</div>

<script>
	$(document).ready(function(){
		$("input.input_quantity").on("change", function(e){
			$.ajax({
				method:"GET",
				url:"http://shop-application/admin/changeQuantity.php",
				data:{
					change_quantity: e.target.value,
					id:e.target.dataset.id
				},
				success:function(resp){
					var $goods = JSON.parse(resp);
					console.log($goods);
					$("p strong#sum").html($goods["sum"]);
					$("span#totalQuantity").html($goods["totalQuantity"]);

				}
			})
		})
	})
</script>