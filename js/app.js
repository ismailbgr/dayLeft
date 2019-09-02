var $$ = Dom7;

var app = new Framework7({
  root: '#app', // App root element

  name: 'DayLeft', // App name
  theme: 'auto', // Automatic theme detection
  // App root data
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
      // Demo products for Catalog section
      products: [
        {
          id: '1',
          title: 'Apple iPhone 8',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis.'
        },
        {
          id: '2',
          title: 'Apple iPhone 8 Plus',
          description: 'Velit odit autem modi saepe ratione totam minus, aperiam, labore quia provident temporibus quasi est ut aliquid blanditiis beatae suscipit odio vel! Nostrum porro sunt sint eveniet maiores, dolorem itaque!'
        },
        {
          id: '3',
          title: 'Apple iPhone X',
          description: 'Expedita sequi perferendis quod illum pariatur aliquam, alias laboriosam! Vero blanditiis placeat, mollitia necessitatibus reprehenderit. Labore dolores amet quos, accusamus earum asperiores officiis assumenda optio architecto quia neque, quae eum.'
        },
      ]
    };
  },
  // App root methods
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  // App routes
  routes: routes,
});

// Login Screen Demo
$$('#my-login-screen .login-button').on('click', function () {
  var username = $$('#my-login-screen [name="username"]').val();
  var password = $$('#my-login-screen [name="password"]').val();

  // Close login screen
  app.loginScreen.close('#my-login-screen');

  // Alert username and password
  app.dialog.alert('Username: ' + username + '<br>Password: ' + password);
});


function loadTimers(){


  countdown.setLabels(
    ' milisaniye| saniye| dakika| saat| gün| hafta| ay| yıl| onyıl| yüzyıl| milenyum',
    ' milisaniye| saniye| dakika| saat| gün| hafta| ay| yıl| onyıl| yüzyıl| milenyum',
    ' ve ',
    ', ',
    '',
    function(n){ return n.toString(); });


document.getElementById('pg').innerHTML = document.getElementById('pg').innerHTML + '<div class="card"><div class="card-header">TYT</div><div class="card-content"></div><div id="timera" class="card-footer">Footer</div></div>'
console.log("Eklendi!")

var timerId =
  countdown(
    new Date("2020-06-20"),
    function(ts) {
      document.getElementById('timera').innerHTML = ts.toHTML("strong");
    });

  }