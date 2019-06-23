var imgIndex = 0;
var curImg = document.getElementById('cur-img');
var imgList = imgPath;
var imgListLength = imgList.length;
displayImg(0);

function displayImg(index) {
	this.imgIndex = index;
	curImg.setAttribute('src',imgList[index]);
}

function displayNext() {
	this.imgIndex++;
	if (imgIndex >= imgListLength)
		this.imgIndex = 0;
	curImg.setAttribute('src',imgList[imgIndex]);
	console.log(imgList[imgIndex]);
}

function displayPrev() {
	this.imgIndex--;
	if (imgIndex < 0)
		this.imgIndex = imgListLength-1;
	curImg.setAttribute('src',imgList[imgIndex]);
}