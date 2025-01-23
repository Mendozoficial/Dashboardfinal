<<<<<<< HEAD
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('dark-mode-toggle').addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const moonIcon = document.getElementById('moon-icon');
        if (document.body.classList.contains('dark-mode')) {
            moonIcon.src = 'img/moon-icon.png'; // Cambia la ruta al icono oscuro
        } else {
            moonIcon.src = 'img/moon-icon.png'; // Cambia la ruta al icono claro
        }
    });
});

    // Configuración de Firebase
    const firebaseConfig = {
        apiKey: "AIzaSyAsd7LcCCGLXlhspdu_AEOq78x3lsfUlLk",
        authDomain: "dashboardsicrux.firebaseapp.com",
        projectId: "dashboardsicrux",
        storageBucket: "dashboardsicrux.appspot.com",
        messagingSenderId: "289336383966",
        appId: "1:289336383966:web:b360f9780c93cd5170254f",
        measurementId: "G-C44V77EYYD"
    };

    // Inicializar Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
    const auth = firebase.auth();

    // Iniciar sesión con correo electrónico y contraseña
    document.getElementById('login-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        auth.signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Inicio de sesión exitoso
                window.location.href = '../paginas/pagina-privada.html';
            })
            .catch((error) => {
                console.error('Error al iniciar sesión:', error);
                alert('Error al iniciar sesión: ');
            });
    });

    // Registro de nuevos usuarios
    document.getElementById('signup-link').addEventListener('click', (e) => {
        e.preventDefault();
        const email = prompt('Por favor, introduce tu correo electrónico:');
        const password = prompt('Por favor, introduce tu contraseña:');

        if (email && password) {
            auth.createUserWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    // Registro exitoso
                    window.location.href = '../paginas/pagina-privada.html';
                })
                .catch((error) => {
                    console.error('Error al registrarse:', error);
                    alert('Error al registrarse: ' + error);
                });
        }
    });

    // Iniciar sesión con Google
    document.getElementById('google-login').addEventListener('click', () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider)
            .then((result) => {
                window.location.href = '../paginas/pagina-privada.html';
            })
            .catch((error) => {
                console.error('Error al iniciar sesión con Google:', error);
                alert('Error al iniciar sesión con Google: ' + error.message);
            });
    });

    // Iniciar sesión con Facebook
    document.getElementById('facebook-login').addEventListener('click', () => {
        const provider = new firebase.auth.FacebookAuthProvider();
        auth.signInWithPopup(provider)
            .then((result) => {
                window.location.href = '../paginas/pagina-privada.html';
            })
            .catch((error) => {
            console.error('Error al iniciar sesión con Facebook:', error);
                alert('Error al iniciar sesión con Facebook: ' + error.message);
            });
    });

    // Restablecer contraseña
    document.getElementById('forgot-password').addEventListener('click', (e) => {
        e.preventDefault();
        const email = prompt('Por favor, introduce tu correo electrónico:');
        if (email) {
            auth.sendPasswordResetEmail(email)
                .then(() => {
                    alert('Se ha enviado un correo para restablecer tu contraseña.');
                })
                .catch((error) => {
                    console.error('Error al enviar el correo para restablecer la contraseña:', error);
                    alert('Error al enviar el correo para restablecer la contraseña: ' + error.message);
                });
        }
    });

     // Cerrar sesión
     document.getElementById('logout').addEventListener('click', () => {
        firebase.auth().signOut().then(() => {
            window.location.href = '../index.html'; // Redirige a la página de inicio de sesión
        }).catch((error) => {
            console.error('Error al cerrar sesión:', error);
        });
    });

    // Verificación del estado de autenticación
    firebase.auth().onAuthStateChanged((user) => {
        if (!user) {
            window.location.href = '../paginas/login.html'; // Redirige a la página de login si no está autenticado
        }
    });



=======
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('dark-mode-toggle').addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const moonIcon = document.getElementById('moon-icon');
        if (document.body.classList.contains('dark-mode')) {
            moonIcon.src = 'img/moon-icon.png'; // Cambia la ruta al icono oscuro
        } else {
            moonIcon.src = 'img/moon-icon.png'; // Cambia la ruta al icono claro
        }
    });
});

    // Configuración de Firebase
    const firebaseConfig = {
        apiKey: "AIzaSyAsd7LcCCGLXlhspdu_AEOq78x3lsfUlLk",
        authDomain: "dashboardsicrux.firebaseapp.com",
        projectId: "dashboardsicrux",
        storageBucket: "dashboardsicrux.appspot.com",
        messagingSenderId: "289336383966",
        appId: "1:289336383966:web:b360f9780c93cd5170254f",
        measurementId: "G-C44V77EYYD"
    };

    // Inicializar Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
    const auth = firebase.auth();

    // Iniciar sesión con correo electrónico y contraseña
    document.getElementById('login-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        auth.signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Inicio de sesión exitoso
                window.location.href = '../paginas/pagina-privada.html';
            })
            .catch((error) => {
                console.error('Error al iniciar sesión:', error);
                alert('Error al iniciar sesión: ');
            });
    });

    // Registro de nuevos usuarios
    document.getElementById('signup-link').addEventListener('click', (e) => {
        e.preventDefault();
        const email = prompt('Por favor, introduce tu correo electrónico:');
        const password = prompt('Por favor, introduce tu contraseña:');

        if (email && password) {
            auth.createUserWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    // Registro exitoso
                    window.location.href = '../paginas/pagina-privada.html';
                })
                .catch((error) => {
                    console.error('Error al registrarse:', error);
                    alert('Error al registrarse: ' + error);
                });
        }
    });

    // Iniciar sesión con Google
    document.getElementById('google-login').addEventListener('click', () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider)
            .then((result) => {
                window.location.href = '../paginas/pagina-privada.html';
            })
            .catch((error) => {
                console.error('Error al iniciar sesión con Google:', error);
                alert('Error al iniciar sesión con Google: ' + error.message);
            });
    });

    // Iniciar sesión con Facebook
    document.getElementById('facebook-login').addEventListener('click', () => {
        const provider = new firebase.auth.FacebookAuthProvider();
        auth.signInWithPopup(provider)
            .then((result) => {
                window.location.href = '../paginas/pagina-privada.html';
            })
            .catch((error) => {
            console.error('Error al iniciar sesión con Facebook:', error);
                alert('Error al iniciar sesión con Facebook: ' + error.message);
            });
    });

    // Restablecer contraseña
    document.getElementById('forgot-password').addEventListener('click', (e) => {
        e.preventDefault();
        const email = prompt('Por favor, introduce tu correo electrónico:');
        if (email) {
            auth.sendPasswordResetEmail(email)
                .then(() => {
                    alert('Se ha enviado un correo para restablecer tu contraseña.');
                })
                .catch((error) => {
                    console.error('Error al enviar el correo para restablecer la contraseña:', error);
                    alert('Error al enviar el correo para restablecer la contraseña: ' + error.message);
                });
        }
    });

     // Cerrar sesión
     document.getElementById('logout').addEventListener('click', () => {
        firebase.auth().signOut().then(() => {
            window.location.href = '../index.html'; // Redirige a la página de inicio de sesión
        }).catch((error) => {
            console.error('Error al cerrar sesión:', error);
        });
    });

    // Verificación del estado de autenticación
    firebase.auth().onAuthStateChanged((user) => {
        if (!user) {
            window.location.href = '../paginas/login.html'; // Redirige a la página de login si no está autenticado
        }
    });



>>>>>>> af90722d7b5704d1e3be10b5c22af4e1f436cd77
