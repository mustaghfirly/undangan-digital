// 1. Nama tamu dari link: index.html?to=Budi%20Santoso
const to = new URLSearchParams(location.search).get("to");
if (to) document.getElementById("guest").textContent = to;

// 2. Buka undangan
document.getElementById("open").addEventListener("click", () => {
  document.getElementById("cover").classList.add("hide");
  document.body.classList.remove("locked");
});

// 3. Hitung mundur (ubah tanggalnya di sini)
const target = new Date("2027-03-20T09:00:00+07:00").getTime();
function tick() {
  let diff = Math.max(0, target - Date.now());
  const day = Math.floor(diff / 86400000); diff %= 86400000;
  const hr  = Math.floor(diff / 3600000);  diff %= 3600000;
  const min = Math.floor(diff / 60000);
  const sec = Math.floor((diff % 60000) / 1000);
  document.getElementById("d").textContent = day;
  document.getElementById("h").textContent = hr;
  document.getElementById("m").textContent = min;
  document.getElementById("s").textContent = sec;
}
tick();
setInterval(tick, 1000);

// 4. Konfirmasi kehadiran lewat WhatsApp (ganti nomor di sini)
const WA = "6281234567890";
document.getElementById("kirim").addEventListener("click", () => {
  const nama = document.getElementById("nama").value.trim() || "Tamu";
  const hadir = document.getElementById("hadir").value;
  const jumlah = document.getElementById("jumlah").value;
  const ucapan = document.getElementById("ucapan").value.trim();
  const pesan =
    "Halo, saya " + nama + ".\n" +
    "Kehadiran: " + hadir + "\n" +
    "Jumlah tamu: " + jumlah + "\n" +
    (ucapan ? "Ucapan: " + ucapan : "");
  window.open("https://wa.me/" + WA + "?text=" + encodeURIComponent(pesan), "_blank");
});

// 5. Salin nomor rekening
document.getElementById("salin").addEventListener("click", async (e) => {
  const no = document.getElementById("rek").textContent;
  try {
    await navigator.clipboard.writeText(no);
    e.target.textContent = "Tersalin";
  } catch {
    e.target.textContent = "Salin manual: " + no;
  }
  setTimeout(() => (e.target.textContent = "Salin nomor rekening"), 2000);
});