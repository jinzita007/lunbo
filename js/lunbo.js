$(function() {
	$.ajax({
		url: "data/lunbo.json",
		type: 'GET',
		dataType: 'json',
		success: function(data) {
			for(var i = 0; i < data.data.length; i++) {
				$('.lunbo_a1').find('img').attr('src', data.data[0].img);
				$('.lunbo_a2').find('img').attr('src', data.data[1].img);
				$('.lunbo_a3').find('img').attr('src', data.data[2].img);
			}

			var gallery = mui('.mui-slider');
			gallery.slider({
				interval: 2000 //自动轮播周期，若为0则不自动播放，默认为0；
			});

		}
	})
})