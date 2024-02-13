class mp_3 {
     constructor(name, avtor, turi, ishlabChiqarilganYili, kuylanganKimsalar, vaqti, id) {
         this.name = nomi;
         this.author = avtor;
         this.tur = turi;
         this.date= ishlabChiqarilganYili;
         this.singer = kuylanganKimsalar;
         this.time = vaqti;
         this.id = id;
     }
 }
 
 const mp_3_lar = [
     new mp_3("cardigan", "Taylor swift", "Pop", 2018, ["Weekend", "Bts"], 200, 1),
     new mp_3("home", "BTS", "Jazz", 2023, ["lovely", "Billie Eilish"], 180, 2),
 ];
 
 const removeSongs = mp_3lar => {
     const names = new Set();
     const mp_3larYangi = mp_3lar.filter(mp_3 => {
         if (names.has(mp_3.name)) {
             return false;
         }
         names.add(mp_3.name);
         return true;
     });
     return mp_3larYangi;
 };
 
 const mp_3lar = removeSongs(mp_3lar);
 console.log(mp_3lar);