let mhs = {
    name: "fulan",
    age: 20,
    major: "TRPL",
    skills: ['Syadmin', 'OOP', 'Design'],
    poor: true, //miskin
}

// console.log( 'Mahasiswa yang boleh daftar: ' + (mhs.age) > 17); //turu

// if (mhs.major == "TRMG") {
//     console.log( mhs.name + " jurusan TRMG");
// } else if  (mhs.major == "TRKJ") {
//    console.log ( mhs.name + "jurusan TRKJ" );
// }else if  (mhs.major == "TRPL") {
//     console.log ( mhs.name + "jurusan TRPL" );
// }
// else{
//     console.log( mhs.name + "jurusan" + mhs.major);
// }

// console.log(mhs.major == "TRPL" ? mhs.name + " jurusa TRPL" : mhs.name + " bukan TRPL ");

// SWITCH 
// switch ( mhs.major) {
//     case " TRMG":
//         console.log( mhs.name + " jurusan TRMG ");
//         break;
//     case "TRKJ":  
//          console.log( mhs.name + " jurusan TRKJ ");
//          break;
//     case " TRPL":
//         console.log( mhs.name + " jurusan TRPL ");
//           break;
//     default:
//         console.log( mhs.name + " bukan anak IDN ");
// }

// conditonal function
// kriteria : umur kurang dari 21, miskin, skill lebih dari 2

function cekKelulusan(peserta) {
   let age= peserta.old;
   let poor= peserta.poor;
   let skills=peserta.skills;
   console.log(peserta)
   if ( age < 21 , poor == true , skills.length > 2 ) {
      console.log( "mahasiswa lulus" )
        //peserta lulus
   } else if ( age > 21 , poor == true , skills.length > 2 ) {
      console.log("mahasiswa hampir lulus" )
//peserta hampir lulus
   } else {
      console.log( "mahasiswa tidak lulus" )
    //peserta tidak lulus
   }
    
}
cekKelulusan(mhs);
