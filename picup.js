(function(){
function shareImage() {
    alert("shareImage");
    console.log("shareImage");
    var share = new MozActivity({ name: "share", data: { type: ["image/jpeg", "image/png", "image/jpg"] } });
};
document.querySelector("#share").addEventListener("click", shareImage);

}());

