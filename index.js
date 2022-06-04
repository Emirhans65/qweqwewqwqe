const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
});

$(".discord").on("click",function(e){
    e.preventDefault();
    Toast.fire({
        icon: 'success',
        title: 'Başarıyla discord kopyalandı!'
    });
    navigator.clipboard.writeText("rsh#2018");
});

AOS.init();

