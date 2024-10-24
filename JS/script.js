    document.addEventListener('DOMContentLoaded', () => {
        // Welcome message with user name
        let username = prompt("Nama Panggilan Anda Siapa?");
        if (username) {
            document.getElementById('username').textContent = username;
        }

        document.addEventListener('DOMContentLoaded', () => {
            const burgerMenu = document.querySelector('.burger-menu');
            const navMenu = document.querySelector('.nav-menu');
        
            // Toggle the navigation menu when the burger icon is clicked
            burgerMenu.addEventListener('click', () => {
                navMenu.classList.toggle('active');
            });
        });
        

        // Slideshow (Banner)
        let currentSlide = 0;
        const slides = document.querySelectorAll('.slide');
        const totalSlides = slides.length;

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.style.display = (i === index) ? 'block' : 'none';
            });
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % totalSlides;
            showSlide(currentSlide);
        }

        showSlide(currentSlide); // Tampilkan slide pertama
        setInterval(nextSlide, 3000); // Pindah slide otomatis setiap 3 detik


        // Form submission and validation
        const form = document.getElementById('message-form');
        const outputDate = document.getElementById('output-date');
        const outputName = document.getElementById('output-name');
        const outputBirthdate = document.getElementById('output-birthdate');
        const outputGender = document.getElementById('output-gender');
        const outputMessage = document.getElementById('output-message');

        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const name = document.getElementById('name').value;
            const birthdate = document.getElementById('birthdate').value;
            const gender = document.getElementById('gender').value;
            const message = document.getElementById('message').value;

            // Get the current date and time
            const currentDate = new Date();
            const formattedDate = currentDate.toLocaleString('id-ID', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            });

            // Output form data and date
            outputDate.textContent = formattedDate;
            outputName.textContent = `Nama: ${name}`;
            outputBirthdate.textContent = `Tanggal Lahir: ${birthdate}`;
            outputGender.textContent = `Jenis Kelamin: ${gender}`;
            outputMessage.textContent = `Pesan: ${message}`;
        });
    });
