const heart = document.getElementById("heart")
const loveText = document.getElementById("love-text")

heart.onclick = function() {
    loveText.classList.toggle("toggle-love-text");
    loveText.style.display = loveText.style.display == "block" ? "none" : "block";
    heart.classList.toggle("toggle-heart");
}