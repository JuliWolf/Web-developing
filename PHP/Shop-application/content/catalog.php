<div class="container">
	<div class="row">
<?
if(!empty(downloadAllItems())){

	$products = downloadAllItems();
	$count = 1;
	foreach($products as $p){	


?>
		<div class="col-md-4">
			<div class="product" id="<?=$p['id']?>">
				<img src="../files/<?=$p['image']?>" alt="<?=$p['image']?>" style="width:250px; height:200px;">
				<p><strong>Name:</strong> <?=$p['name']?></p>
				<p><strong>Category:</strong> <?=$p['category']?></p>
				<p><strong>Description:</strong> <?=$p['description']?></p>
				<p><strong>Price:</strong> <?=$p['price']?> руб.</p>
				<a href="/admin/add2basket.php?id=<?=$p['id']?>">Add to cart</a>
			</div>
		</div>
<?
	} 
}
?>	
	</div>
</div>