const linkList = [
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.3527435045044!2d-112.0336423845485!3d33.46616588076946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b0d0d232b3331%3A0xa0f720e16694d1e2!2sDeseo%20A%20Coffee%20Shack!5e0!3m2!1sen!2sus!4v1679028423933!5m2!1sen!2sus" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21810.372405647064!2d-112.03319299001282!3d33.48812037870933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b0d9bc5d08e19%3A0x12d26cb99edc2f3e!2sGlai%20Baan!5e0!3m2!1sen!2sus!4v1679029156947!5m2!1sen!2sus" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3324.048611737741!2d-112.10112768454593!3d33.57808708073762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b6c4d8f9b53d9%3A0xae09708fc412c950!2sAlebrije%20Neveria!5e0!3m2!1sen!2sus!4v1679077090066!5m2!1sen!2sus" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.7044496541207!2d-112.0917447845486!3d33.457005780772015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b13143ced54eb%3A0x5deedbcb6d2d5bc6!2sBacanora%20PHX!5e0!3m2!1sen!2sus!4v1679077144027!5m2!1sen!2sus" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.553554997409!2d-112.04963968454986!3d33.40880978078596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b0e2a7df4cba9%3A0x558ebb75ae7eb449!2sCocina%20Madrigal%20Tacos%20%2B%20Tequila!5e0!3m2!1sen!2sus!4v1679077180377!5m2!1sen!2sus" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3324.467351445197!2d-112.08381768454618!3d33.56721298074069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b6daca3ea6407%3A0xd8cbf69dc5c84308!2sCultivate%20Coffee!5e0!3m2!1sen!2sus!4v1679077215120!5m2!1sen!2sus" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.1874177704476!2d-111.92675518454419!3d33.65230538071661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b77368940e875%3A0x1939fa45d2c6d573!2sDessert%20in%20Desert!5e0!3m2!1sen!2sus!4v1679077259376!5m2!1sen!2sus" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3327.2250220451574!2d-112.22435808454777!3d33.495522180761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b154e98e91a0d%3A0x3071b99a60df0d7d!2sEl%20Cafezito!5e0!3m2!1sen!2sus!4v1679077294982!5m2!1sen!2sus" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.9897278175104!2d-112.10248588454765!3d33.50164438075926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b131f471873e1%3A0xb91831e9ad222cc7!2sFirst%20Cup%20%7C%20Ethiopian%20Restaurant%20%26%20Cafe!5e0!3m2!1sen!2sus!4v1679077333318!5m2!1sen!2sus" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.2987045130644!2d-111.83945718454962!3d33.41545598078397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872ba7d8b0a9decb%3A0x6fca6e1a238f5e40!2sGus&#39;s%20World%20Famous%20Fried%20Chicken!5e0!3m2!1sen!2sus!4v1679077480150!5m2!1sen!2sus" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3331.1885228930714!2d-111.71970478455027!3d33.39224548079071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872bafa236f8f5c5%3A0x5b28146c5f7d702a!2sHapa%20Food%20Company!5e0!3m2!1sen!2sus!4v1679077649716!5m2!1sen!2sus" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3327.6893919882996!2d-112.05013148454803!3d33.48343668076437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b1335490a7dfd%3A0xb2626d52b8712575!2sKabob%20Grill%20N%20Go!5e0!3m2!1sen!2sus!4v1679078065672!5m2!1sen!2sus" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3324.328296978895!2d-112.06785028454604!3d33.57082438073953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b6d75d5f6f14d%3A0xab3f80ba2492b541!2sLos%20Reyes%20De%20La%20Torta!5e0!3m2!1sen!2sus!4v1679078159175!5m2!1sen!2sus" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3327.217485931885!2d-112.00317278454786!3d33.495718280760954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b0dab46a0e5d5%3A0xdd86bec1cd528459!2sMy%20Slice%20of%20the%20Pie%20Pizzeria%20Arcadia!5e0!3m2!1sen!2sus!4v1679078281826!5m2!1sen!2sus" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3333.9082067479503!2d-111.9817371845518!3d33.321215180811215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b056bf7bc721f%3A0x1675aab3c9725734!2sORIGAMI%20RAMEN%20BAR!5e0!3m2!1sen!2sus!4v1679078527730!5m2!1sen!2sus" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3327.029689236985!2d-112.07662158454775!3d33.500604680759686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b12ecf6d5df1f%3A0xa3b63adc5d3f06d6!2sPane%20Bianco%20Central!5e0!3m2!1sen!2sus!4v1679078635429!5m2!1sen!2sus" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3324.3571146896393!2d-112.06785068454614!3d33.57007598073991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b6d7429b3a345%3A0xc43956d7be7e8e75!2sRaspados%20Solaris!5e0!3m2!1sen!2sus!4v1679078737034!5m2!1sen!2sus" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106379.45199652654!2d-112.13570188103976!3d33.570056237992475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b13869126d9f3%3A0x312c5e6ac5ac8459!2sTaco%20Boy&#39;s!5e0!3m2!1sen!2sus!4v1679079040447!5m2!1sen!2sus" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.9305485887962!2d-112.13447457061557!3d33.45111591927851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b13ed91243ba1%3A0x3f1e3592abf03afa!2sTaqueria%20El%20Fundador!5e0!3m2!1sen!2sus!4v1679079383438!5m2!1sen!2sus" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.8638007873506!2d-112.10096638454583!3d33.58288538073632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b6c4b8801c3e9%3A0x13b0a869cfa98cbe!2sThai%20Thai%20Kitchen!5e0!3m2!1sen!2sus!4v1679079429129!5m2!1sen!2sus" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.6676554411356!2d-112.0744928845486!3d33.45796418077184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b13474c869779%3A0x26ab21f155c31c52!2sThe%20Churchill!5e0!3m2!1sen!2sus!4v1679079533676!5m2!1sen!2sus" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3324.403262661499!2d-112.18605798454608!3d33.568877480740205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b6b74f16e4f05%3A0xdacce484bc467e1e!2sTi-Li%20Boba!5e0!3m2!1sen!2sus!4v1679079637536!5m2!1sen!2sus" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
];

export default linkList;
