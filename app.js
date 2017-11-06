var quotes = ['<h3>“A room without books is like a body without a soul.” <h3><br><p>- Marcus Tullius Cicero</p>',
'<h3>“If you tell the truth, you don\'t have to remember anything.” </h3><br><p>- Mark Twain</p>',
'<h3>“Always forgive your enemies, nothing annoys them so much.” </h3><br><p>- Oscar Wilde</p>',
'<h3>“The truth is rarely pure and never simple.” </h3><br><p>- Oscar Wilde</p>',
'<h3>“Knowing yourself is the beginning of all wisdom.” <h3><br><p>- Aristotle</p>',
'<h3>“Your visions will become clear only when you can look into your own heart. Who looks outside, dreams, who looks inside, awakes.” </h3><br><p>- C.G. Jung</p>',
'<h3>“The saddest aspect of life right now is that science gathers knowledge faster than society gathers wisdom.” <h3><br><p>- Isaac Asimov</p>',
'<h3>“Count your age by friends, not years. Count your life by smiles, not tears.” <h3><br><p>- John Lennon</p>',
'<h3>“Never laugh at live dragons.” </h3><br><p>- J.R.R. Tolkien</p>',
'<h3>“Everything I like is either illegal, immoral or fattening.” </h3><br><p>- Alexander Woollcott</p>',
'<h3>“It is legal because I wish it.” <h3><br><p>- Louis XIV</p>'];

function randomQuote() {
    var q = Math.floor(Math.random()*quotes.length);
    var x = quotes[q];
    return x;
};

$("#button").click(function() {
    document.getElementById("quote").innerHTML = randomQuote();
});

$("#tweet").click(function() {
    window.open("https://twitter.com/intent/tweet?text=" + encodeURIComponent($("#quote").text()));
});

