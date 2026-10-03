
var toastTimer = null;
function showToast(message) {
  var toast = document.getElementById('toast');
  toast.innerHTML = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(function () {
    toast.classList.remove('show');
  }, 2600);
}

function addRipple(btn, event) {
  var rect = btn.getBoundingClientRect();
  var ripple = document.createElement('span');
  var size = Math.max(rect.width, rect.height);
  ripple.className = 'ripple';
  ripple.style.width = size + 'px';
  ripple.style.height = size + 'px';
  var x = (event && event.clientX ? event.clientX : rect.left + rect.width / 2) - rect.left - size / 2;
  var y = (event && event.clientY ? event.clientY : rect.top + rect.height / 2) - rect.top - size / 2;
  ripple.style.left = x + 'px';
  ripple.style.top = y + 'px';
  btn.appendChild(ripple);
  setTimeout(function () { ripple.remove(); }, 700);
}

function handleGetApp(btn, platform) {
  addRipple(btn, event);
  showToast('📱 <b>Certo for ' + platform + '</b> — yuklab olish sahifasiga yo\'naltirilmoqda…');
}

var authMode = 'login';

function openAuth(btn) {
  addRipple(btn, event);
  var overlay = document.getElementById('authOverlay');
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeAuth(btn) {
  addRipple(btn, event);
  var overlay = document.getElementById('authOverlay');
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

function switchAuth(btn, mode) {
  addRipple(btn, event);
  authMode = mode;
  var overlay = document.getElementById('authOverlay');
  var isRegister = (mode === 'register');

  document.getElementById('tabLogin').classList.toggle('active', !isRegister);
  document.getElementById('tabRegister').classList.toggle('active', isRegister);
  overlay.classList.toggle('register', isRegister);

  document.getElementById('authTitle').textContent = isRegister ? 'Create account' : 'Welcome back';
  document.getElementById('authSub').textContent = isRegister
    ? 'Register and secure your phone in minutes'
    : 'Sign in to protect your mobile world';
  document.getElementById('authSubmit').textContent = isRegister ? 'Create account' : 'Sign in';
}

function submitAuth(btn) {
  addRipple(btn, event);
  var email = document.getElementById('authEmail').value.trim();
  var pass = document.getElementById('authPass').value.trim();

  if (email === '' || email.indexOf('@') === -1) {
    showToast('⚠️ Iltimos, to\'g\'ri <b>email manzil</b> kiriting.');
    return;
  }
  if (pass.length < 6) {
    showToast('⚠️ Parol kamida <b>6 ta belgi</b>dan iborat bo\'lishi kerak.');
    return;
  }
  if (authMode === 'register') {
    var name = document.getElementById('authName').value.trim();
    var pass2 = document.getElementById('authPass2').value.trim();
    if (name === '') {
      showToast('⚠️ Iltimos, <b>ismingizni</b> kiriting.');
      return;
    }
    if (pass !== pass2) {
      showToast('⚠️ <b>Parollar</b> bir-biriga mos kelmadi.');
      return;
    }
    closeAuth(btn);
    showToast('🎉 Xush kelibsiz, <b>' + name + '</b>! Akkauntingiz yaratildi.');
  } else {
    closeAuth(btn);
    showToast('✅ <b>' + email + '</b> sifatida tizimga kirdingiz.');
  }
}

function handleAbout(btn) {
  addRipple(btn, event);
  showToast('📖 <b>Our story</b> — Certo haqida to\'liq ma\'lumot sahifasi.');
}

function handleHelp(btn) {
  addRipple(btn, event);
  showToast('💬 <b>Help Center</b> — qo\'llanmalar va FAQ bo\'limi ochilmoqda…');
}

function handleInsights(btn) {
  addRipple(btn, event);
  showToast('📰 <b>Insights</b> — barcha maqolalar ro\'yxati yuklanmoqda…');
}

function handleSocial(btn, network) {
  addRipple(btn, event);
  showToast('🔗 <b>' + network + '</b> sahifamizga xush kelibsiz!');
}

function handleSubscribe(btn) {
  addRipple(btn, event);
  var input = document.getElementById('newsEmail');
  var email = input.value.trim();
  if (email === '' || email.indexOf('@') === -1) {
    showToast('⚠️ Iltimos, to\'g\'ri <b>email manzil</b> kiriting.');
    input.focus();
    return;
  }
  input.value = '';
  showToast('✅ Rahmat! <b>' + email + '</b> manzili yangiliklarga ulandi.');
}

function handleContactSend(btn) {
  addRipple(btn, event);
  var name = document.getElementById('cName').value.trim();
  var email = document.getElementById('cEmail').value.trim();
  var msg = document.getElementById('cMsg').value.trim();

  if (name === '') {
    showToast('⚠️ Iltimos, <b>ismingizni</b> yozing.');
    return;
  }
  if (email === '' || email.indexOf('@') === -1) {
    showToast('⚠️ To\'g\'ri <b>email manzil</b> kiriting.');
    return;
  }
  if (msg.length < 5) {
    showToast('⚠️ <b>Xabar</b> juda qisqa — biroz batafsil yozing.');
    return;
  }
  document.getElementById('cName').value = '';
  document.getElementById('cEmail').value = '';
  document.getElementById('cMsg').value = '';
  showToast('💌 Rahmat, <b>' + name + '</b>! Xabaringiz yuborildi — 24 soat ichida javob beramiz.');
}

function handleToTop(btn) {
  addRipple(btn, event);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
