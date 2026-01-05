const characters = [{
        name: "Clorinde",
        gender: "female",
        img: "images/clorinde.png",
        desc: "Cewe tangguh dan gesit.",
        details: "Clorinde adalah sosok yang sangat tangguh dan gesit, selalu siap menghadapi tantangan apapun dengan keberanian luar biasa. Ia memiliki kecerdasan tinggi dalam menganalisis situasi dan membuat keputusan cepat. Meskipun terlihat tegas, ia sangat perhatian terhadap teman-teman dan selalu siap membantu orang yang membutuhkan. Hatinya yang besar membuatnya menjadi sosok yang dapat diandalkan dalam situasi sulit, dan ia tidak pernah ragu untuk melindungi mereka yang ia sayangi.",
        words: "Aku nggak takut menghadapi tantangan apapun!",
        sound: "sounds/clorinde.mp3"
    },
    {
        name: "Phainon",
        gender: "male",
        img: "images/phainon.png",
        desc: "Cowo pejuang penuh semangat.",
        details: "Phainon adalah pejuang yang penuh semangat dan keberanian, selalu siap melindungi teman-temannya dengan segala cara. Ia memiliki strategi yang hebat dalam menghadapi musuh dan situasi berbahaya. Kesetiaannya yang tinggi membuatnya menjadi sahabat yang dapat dipercaya sepenuhnya. Meskipun terlihat keras dari luar, ia memiliki sisi hangat dan peduli terhadap orang-orang terdekatnya, selalu berusaha menciptakan harmoni di sekitarnya.",
        words: "Aku akan melindungimu sampai akhir.",
        sound: "sounds/phainon.mp3"
    },
    {
        name: "Cyrene",
        gender: "female",
        img: "images/cyrene.png",
        desc: "Cewe pejuang dengan cinta.",
        details: "Cyrene adalah pejuang yang menggabungkan kekuatan dengan cinta yang mendalam. Ia tegas dalam menghadapi musuh namun selalu penuh kasih sayang terhadap teman dan keluarga. Kepemimpinannya yang alami membuatnya mampu memotivasi orang lain untuk menjadi lebih baik. Ia percaya bahwa cinta adalah sumber kekuatan terbesar, dan selalu mendukung orang-orang di sekitarnya dengan penuh empati dan kehangatan.",
        words: "Cinta dan keberanian adalah kekuatanku.",
        sound: "sounds/cyrene.mp3"
    },
    {
        name: "Yanagi",
        gender: "female",
        img: "images/yanagi.png",
        desc: "Gesit dan keibuan.",
        details: "Yanagi adalah sosok yang gesit dan penuh keibuan, selalu memperhatikan kebutuhan teman-teman dengan teliti. Kecakapannya dalam berbagai hal membuatnya menjadi orang yang andal dalam situasi apapun. Ia bijaksana dalam memberikan nasihat dan selalu berusaha menciptakan suasana yang nyaman bagi orang lain. Meskipun terlihat tenang, ia memiliki kekuatan batin yang besar dan selalu siap membantu dengan penuh kasih sayang.",
        words: "Jangan khawatir, aku akan selalu di sini.",
        sound: "sounds/yanagi.mp3"
    },
    {
        name: "Vivian",
        gender: "female",
        img: "images/vivian.png",
        desc: "Lembut dan romantis.",
        details: "Vivian adalah sosok yang lembut dan romantis, selalu melihat keindahan dalam segala hal. Jiwa seninya yang tinggi membuatnya mampu menciptakan suasana yang indah dan inspiratif. Ia ramah terhadap semua orang dan selalu mendukung orang di sekitarnya dengan penuh perhatian. Kehangatannya yang alami membuatnya mudah didekati, dan ia percaya bahwa cinta dan kebaikan dapat mengubah dunia menjadi tempat yang lebih baik.",
        words: "Hidup terasa indah dengan cinta.",
        sound: "sounds/vivian.mp3"
    },
    {
        name: "Yae Miko",
        gender: "female",
        img: "images/yae_miko.png",
        desc: "Jahil & mengerikan tapi baik.",
        details: "Yae Miko adalah sosok yang jahil dan terlihat mengerikan dari luar, namun sebenarnya memiliki hati yang baik dan perhatian. Kecerdikannya yang tinggi membuatnya selalu bisa menemukan solusi kreatif untuk berbagai masalah. Ia bisa membuat orang tertawa dengan kelakuannya yang unik, namun juga sangat peduli terhadap teman-teman. Meskipun terlihat nakal, ia selalu bertindak demi kebaikan bersama.",
        words: "Hati-hati, aku bisa muncul di mana saja!",
        sound: "sounds/yae_miko.mp3"
    },
    {
        name: "Hina",
        gender: "female",
        img: "images/hina.png",
        desc: "Imut dan mandiri.",
        details: "Hina adalah sosok yang imut namun sangat mandiri, selalu ingin belajar hal-hal baru dan mengembangkan diri. Kelincahannya membuatnya mampu beradaptasi dengan cepat dalam situasi apapun. Semangatnya yang tinggi mendorongnya untuk terus maju dan tidak pernah menyerah. Ia percaya bahwa dengan usaha sendiri, ia bisa mencapai apa saja, namun tetap terbuka untuk menerima bantuan dari orang lain ketika dibutuhkan.",
        words: "Aku bisa melakukan ini sendiri!",
        sound: "sounds/hina.mp3"
    },
    {
        name: "Cerydra",
        gender: "female",
        img: "images/cerydra.png",
        desc: "Pemimpin tegas dan tangguh.",
        details: "Cerydra adalah pemimpin yang tegas dan tangguh, selalu memimpin tim dengan bijaksana dan penuh tanggung jawab. Kekuatannya yang luar biasa membuatnya mampu menghadapi tantangan besar. Ia adil dalam setiap keputusan dan selalu memikirkan kepentingan kelompok. Meskipun terlihat keras, ia memiliki hati yang peduli dan selalu berusaha menciptakan lingkungan yang harmonis bagi semua orang.",
        words: "Ikuti aku, kita bisa melewati ini bersama.",
        sound: "sounds/cerydra.mp3"
    },
    {
        name: "Hysilens",
        gender: "female",
        img: "images/hysilens.png",
        desc: "Kesatria setia dan kuat.",
        details: "Hysilens adalah kesatria yang setia dan kuat, selalu siap menghadapi bahaya demi melindungi teman-teman. Kehormatannya yang tinggi membuatnya menjadi sosok yang dapat dipercaya sepenuhnya. Ia berani dalam pertempuran namun juga memiliki sisi lembut yang peduli terhadap orang lain. Kesetiaannya tidak pernah goyah, dan ia selalu berdiri di garis depan untuk menjaga mereka yang ia sayangi.",
        words: "Aku akan selalu berdiri di sampingmu.",
        sound: "sounds/hysilens.mp3"
    },
    {
        name: "Kafka",
        gender: "female",
        img: "images/kafka.png",
        desc: "Killer keibuan penuh misteri.",
        details: "Kafka adalah sosok yang tangguh dan misterius, selalu melindungi yang lemah dengan cara yang unik. Kecerdasannya dalam strategi membuatnya selalu selangkah di depan musuh. Ia memiliki sisi keibuan yang kuat namun juga penuh misteri yang membuat orang penasaran. Meskipun terlihat dingin, ia sangat peduli terhadap orang-orang terdekatnya dan selalu berusaha menciptakan keamanan bagi mereka.",
        words: "Jangan remehkan sisi lembutku.",
        sound: "sounds/kafka.mp3"
    },
    {
        name: "Miyabi",
        gender: "female",
        img: "images/miyabi.png",
        desc: "Tangguh dan badass.",
        details: "Miyabi adalah sosok yang sangat tangguh dan badass, tidak pernah takut menghadapi tantangan apapun. Keterampilannya dalam pertarungan membuatnya menjadi lawan yang berbahaya. Ia tegas dalam prinsip namun juga memiliki keberanian yang luar biasa. Meskipun terlihat keras, ia memiliki kode etik yang kuat dan selalu melindungi yang benar. Ia tidak mudah menyerah dan selalu bangkit dari setiap kegagalan.",
        words: "Aku tidak takut siapa pun!",
        sound: "sounds/miyabi.mp3"
    },
    {
        name: "Robin",
        gender: "female",
        img: "images/robin.png",
        desc: "Misterius dan penuh rahasia.",
        details: "Robin adalah sosok yang sangat misterius dan penuh rahasia, selalu mencari kebenaran di balik segala hal. Ia penuh rahasia namun memiliki kecerdasan yang luar biasa dalam menganalisis situasi. Misterinya membuat orang penasaran, namun ia selalu bertindak demi kebaikan. Ia percaya bahwa pengetahuan adalah kunci untuk memahami dunia, dan selalu berusaha mengungkap misteri-misteri yang ada.",
        words: "Siapa aku sebenarnya?",
        sound: "sounds/robin.mp3"
    },
    {
        name: "Sunday",
        gender: "male",
        img: "images/sunday.png",
        desc: "Gelap → bertobat.",
        details: "Sunday adalah sosok yang dulunya gelap dan misterius, namun kini berusaha menebus kesalahannya dengan sungguh-sungguh. Ia belajar dari masa lalu dan berusaha menjadi lebih baik setiap hari. Kesetiaannya terhadap teman-teman tidak pernah goyah, dan ia selalu siap membantu mereka yang membutuhkan. Perjalanan pertobatannya membuatnya lebih bijaksana dan peduli terhadap dampak tindakannya terhadap orang lain.",
        words: "Aku berjanji untuk berubah.",
        sound: "sounds/sunday.mp3"
    },
    {
        name: "Mydei",
        gender: "male",
        img: "images/mydei.png",
        desc: "Pemarah tapi baik & suka anak-anak.",
        details: "Mydei adalah sosok yang pemarah namun memiliki hati yang baik dan sangat menyukai anak-anak. Ia sering marah-marah namun selalu siap membantu orang yang membutuhkan, terutama anak-anak yang ia sayangi. Meskipun temperamennya panas, ia sangat setia dan peduli terhadap teman-teman terdekatnya, selalu berusaha melindungi mereka dengan caranya sendiri.",
        words: "Jangan membuatku marah, tapi aku akan selalu menolongmu.",
        sound: "sounds/mydei.mp3"
    },
    {
        name: "Anaxa",
        gender: "male",
        img: "images/anaxa.png",
        desc: "Dosen pintar & sensitif.",
        details: "Anaxa adalah sosok yang cerdas dan sensitif, selalu peka terhadap perasaan orang lain. Kesabarannya yang tinggi membuatnya menjadi pendidik yang baik dan sabar. Ia menyukai belajar dan mengajar, dan selalu berusaha berbagi pengetahuan dengan orang lain. Kecerdasannya tidak hanya intelektual, namun juga emosional, membuatnya mampu memahami dan membantu orang lain dengan lebih baik.",
        words: "Ilmu adalah kekuatan.",
        sound: "sounds/anaxa.mp3"
    },
    {
        name: "Acheron",
        gender: "female",
        img: "images/acheron.png",
        desc: "Pendiam & menggetarkan.",
        details: "Acheron adalah sosok yang pendiam namun memiliki aura yang sangat menggetarkan. Kata-katanya yang jarang namun berwibawa selalu meninggalkan kesan mendalam. Ia tenang dalam menghadapi situasi apapun dan selalu berpikir sebelum bertindak. Misterinya membuat orang penasaran, namun kekuatannya yang luar biasa membuatnya menjadi sosok yang dihormati. Diamnya bukan berarti lemah, melainkan kekuatan yang terkendali.",
        words: "Diamku bukan lemahku.",
        sound: "sounds/acheron.mp3"
    },
    {
        name: "Aventurine",
        gender: "male",
        img: "images/aventurine.png",
        desc: "Gentleman penuh percaya diri.",
        details: "Aventurine adalah gentleman yang penuh percaya diri, selalu menjaga martabat dan sopan santun dalam setiap tindakan. Ia ramah terhadap semua orang dan selalu berusaha menciptakan suasana yang nyaman. Kepercayaan dirinya yang tinggi membuatnya mampu menghadapi tantangan dengan tenang. Ia percaya bahwa dengan sikap yang baik dan percaya diri, ia bisa mencapai apa saja dan menginspirasi orang lain.",
        words: "Kepercayaan diri adalah kunci.",
        sound: "sounds/aventurine.mp3"
    },
    {
        name: "Huohuo",
        gender: "female",
        img: "images/huohuo.png",
        desc: "Penakut tapi kuat.",
        details: "Huohuo adalah sosok yang terkadang penakut namun memiliki kekuatan batin yang luar biasa. Ia selalu bangkit dari ketakutannya dan berani melindungi teman-teman. Kesetiaannya yang tinggi membuatnya tidak pernah meninggalkan orang yang membutuhkan. Meskipun takut, ia belajar menghadapi rasa takutnya dan menjadi lebih kuat. Ia percaya bahwa keberanian sejati adalah ketika kita bisa bertindak meskipun takut.",
        words: "Meskipun takut, aku tidak akan mundur.",
        sound: "sounds/huohuo.mp3"
    },
    {
        name: "Wriothesley",
        gender: "male",
        img: "images/wriothesley.png",
        desc: "Badass, hangat, pemimpin.",
        details: "Wriothesley adalah pemimpin yang badass namun hangat, selalu memimpin dengan hati dan strategi yang matang. Ia berani menghadapi tantangan namun juga peduli terhadap kesejahteraan timnya. Kekuatannya yang luar biasa membuatnya menjadi sosok yang dihormati, namun kehangatannya membuatnya mudah didekati. Ia selalu berusaha menciptakan keseimbangan antara kekuatan dan empati dalam kepemimpinannya.",
        words: "Ikuti aku, aku akan menuntunmu.",
        sound: "sounds/wriothesley.mp3"
    },
    {
        name: "Neuvillette",
        gender: "male",
        img: "images/neuvillette.png",
        desc: "Pendiam, tegas, megah.",
        details: "Neuvillette adalah sosok yang pendiam namun tegas dan megah, selalu menegakkan keadilan dengan prinsip yang kuat. Kewibawaannya membuat orang menghormatinya tanpa kata. Ia tenang dalam menghadapi situasi apapun dan selalu mempertimbangkan konsekuensi tindakannya. Kehormatannya yang tinggi membuatnya menjadi panutan bagi banyak orang, dan ia selalu berusaha menciptakan dunia yang lebih adil.",
        words: "Kehormatan adalah segalanya.",
        sound: "sounds/neuvillette.mp3"
    },
    {
        name: "Shorekeeper",
        gender: "female",
        img: "images/shorekeeper.png",
        desc: "Pemimpin bijak dan kuat.",
        details: "Shorekeeper adalah pemimpin yang bijak dan kuat, selalu melindungi dunia dengan visi jangka panjang. Ia memikirkan masa depan dengan matang dan selalu berusaha menciptakan stabilitas. Kekuatannya yang luar biasa membuatnya mampu menghadapi ancaman besar, namun kebijaksanaannya membuat keputusannya selalu tepat. Ia percaya bahwa melindungi dunia adalah tanggung jawab yang harus diemban dengan penuh dedikasi.",
        words: "Aku akan menjaga pantai ini.",
        sound: "sounds/shorekeeper.mp3"
    },
    {
        name: "Jane Doe",
        gender: "female",
        img: "images/jane_doe.png",
        desc: "Misterius dan cerdas.",
        details: "Jane Doe adalah sosok yang sangat misterius dan cerdas, selalu mencari kebenaran di balik segala hal. Ia penuh rahasia namun memiliki kecerdasan yang luar biasa dalam menganalisis situasi. Misterinya membuat orang penasaran, namun ia selalu bertindak demi kebaikan. Ia percaya bahwa pengetahuan adalah kunci untuk memahami dunia, dan selalu berusaha mengungkap misteri-misteri yang ada.",
        words: "Siapa aku sebenarnya?",
        sound: "sounds/jane_doe.mp3"
    },
    {
        name: "Kiana",
        gender: "female",
        img: "images/kiana.png",
        desc: "Pemberani dan energik.",
        details: "Kiana adalah sosok yang pemberani dan energik, selalu melawan musuh dengan semangat yang tinggi. Energinya yang melimpah membuatnya selalu aktif dan tidak pernah menyerah. Ia selalu melindungi teman-teman dengan segala cara dan percaya bahwa keberanian adalah kunci untuk mengatasi segala tantangan. Optimismenya yang tinggi membuatnya selalu melihat peluang di tengah kesulitan.",
        words: "Aku tidak akan menyerah!",
        sound: "sounds/kiana.mp3"
    },
    {
        name: "Dyroth Starlight",
        gender: "male",
        img: "images/dyroth_starlight.png",
        desc: "Pahlawan bintang yang strategis.",
        details: "Dyroth Starlight adalah pahlawan yang strategis dan kuat, selalu memimpin pasukan dengan taktik yang brilian. Keberaniannya yang luar biasa membuatnya menjadi inspirasi bagi banyak orang. Ia selalu memikirkan strategi jangka panjang dan berusaha menciptakan kemenangan yang berkelanjutan. Bintang yang memandu langkahnya membuatnya percaya bahwa takdir dapat diubah dengan usaha dan kecerdasan.",
        words: "Bintang akan memandu kita.",
        sound: "sounds/dyroth_starlight.mp3"
    },
    {
        name: "Ye Shunguang",
        gender: "female",
        img: "images/ye_shunguang.png",
        desc: "Cerah dan penuh harapan.",
        details: "Ye Shunguang adalah sosok yang cerah dan penuh harapan, selalu membawa cahaya ke dalam kegelapan. Optimismenya yang tinggi membuatnya selalu melihat sisi positif dari segala hal. Ia ceria dan selalu mendukung orang lain untuk tetap bersemangat. Cahayanya yang bersinar membuatnya menjadi sumber inspirasi, dan ia percaya bahwa harapan dapat mengubah dunia menjadi tempat yang lebih baik.",
        words: "Mari kita lihat cahaya itu.",
        sound: "sounds/ye_shunguang.mp3"
    },
    {
        name: "Astra Yao",
        gender: "female",
        img: "images/astra_yao.png",
        desc: "Bijak dan visioner.",
        details: "Astra Yao adalah sosok yang bijak dan visioner, selalu melihat masa depan dengan jelas dan penuh wawasan. Kebijaksanaannya membuatnya mampu memberikan nasihat yang tepat untuk orang lain. Ia visioner dalam merencanakan perubahan dan selalu berusaha menciptakan dunia yang lebih baik. Wawasannya yang luas membuatnya menjadi pemimpin yang dihormati, dan ia percaya bahwa masa depan ada di tangan mereka yang berani bermimpi.",
        words: "Masa depan ada di tangan kita.",
        sound: "sounds/astra_yao.mp3"
    },
    {
        name: "Ciaccona",
        gender: "female",
        img: "images/ciaccona.png",
        desc: "Elegan dan kuat.",
        details: "Ciaccona adalah sosok yang elegan dan kuat, selalu menari dalam pertarungan dengan gaya yang memukau. Kekuatannya yang luar biasa dipadukan dengan elegansi yang tinggi membuatnya unik. Ia penuh gaya dalam setiap gerakan dan selalu menikmati tantangan. Keindahannya tidak hanya fisik, namun juga dalam cara ia menghadapi hidup. Ia percaya bahwa kekuatan sejati datang dari harmoni antara tubuh dan jiwa.",
        words: "Mari kita berdansa.",
        sound: "sounds/ciaccona.mp3"
    },
    {
        name: "Brant",
        gender: "male",
        img: "images/brant.png",
        desc: "Tangguh dan setia.",
        details: "Brant adalah sosok yang sangat tangguh dan setia, selalu berdiri teguh melindungi orang-orang yang ia sayangi. Kekuatannya yang luar biasa membuatnya mampu menghadapi bahaya dengan tenang. Kesetiaannya tidak pernah goyah, dan ia selalu siap berkorban demi teman dan keluarga. Meskipun terlihat keras dari luar, ia memiliki hati yang hangat dan selalu berusaha menciptakan rasa aman bagi orang terdekatnya.",
        words: "Aku akan melindungimu.",
        sound: "sounds/brant.mp3"
    },
    {
        name: "Raiden Shogun",
        gender: "female",
        img: "images/raiden_shogun.png",
        desc: "Megah dan adil.",
        details: "Raiden Shogun adalah sosok yang megah dan adil, selalu memimpin dengan kekuatan dan menegakkan hukum dengan tegas. Kewibawaannya membuat semua orang menghormatinya tanpa syarat. Ia adil dalam setiap keputusan dan selalu memikirkan kepentingan rakyatnya. Kekuatannya yang luar biasa dipadukan dengan kebijaksanaan yang tinggi membuatnya menjadi pemimpin yang sempurna, selalu berusaha menciptakan dunia yang lebih baik.",
        words: "Keadilan akan ditegakkan.",
        sound: "sounds/raiden_shogun.mp3"
    },
    {
        name: "Skirk",
        gender: "female",
        img: "images/skirk.png",
        desc: "Lincah dan cerdas.",
        details: "Skirk adalah sosok yang lincah dan cerdas, selalu menemukan jalan keluar dari situasi yang paling sulit. Kecerdasannya yang tinggi membuatnya penuh trik dan selalu selangkah di depan orang lain. Ia cepat beradaptasi dan selalu berpikir kreatif dalam menghadapi masalah. Meskipun terlihat nakal, ia selalu menggunakan kecerdasannya untuk kebaikan dan membantu teman-teman dengan cara yang unik.",
        words: "Aku tahu rahasianya.",
        sound: "sounds/skirk.mp3"
    },
    {
        name: "Tribbie",
        gender: "female",
        img: "images/tribbie.png",
        desc: "Enerjik dan lucu.",
        details: "Tribbie adalah sosok yang energik dan lucu, selalu membawa kegembiraan ke mana pun ia pergi. Energinya yang melimpah membuatnya selalu aktif dan penuh semangat. Kelucuannya yang alami membuat orang di sekitarnya selalu tertawa dan merasa bahagia. Ia percaya bahwa hidup harus dijalani dengan penuh keceriaan, dan selalu berusaha membuat hari orang lain lebih menyenangkan dengan kehadirannya yang riang.",
        words: "Yey, seru!",
        sound: "sounds/tribbie.mp3"
    },
    {
        name: "Arlechinno",
        gender: "female",
        img: "images/arlechinno.png",
        desc: "Misterius dan dramatis.",
        details: "Arlechinno adalah sosok yang misterius dan dramatis, selalu penuh teka-teki dan kejutan. Dramatisasinya yang tinggi membuat setiap tindakannya terlihat seperti pertunjukan. Misterinya membuat orang penasaran dan selalu ingin tahu lebih banyak tentangnya. Ia suka bermain dengan ekspektasi orang lain dan selalu mengejutkan dengan kejutan-kejutannya. Meskipun terlihat aneh, ia memiliki kreativitas yang luar biasa.",
        words: "Mari kita main teka-teki.",
        sound: "sounds/arlechinno.mp3"
    },
    {
        name: "The Herta",
        gender: "female",
        img: "images/the_herta.png",
        desc: "Genius dan eksentrik.",
        details: "The Herta adalah sosok yang genius dan eksentrik, selalu menciptakan hal-hal luar biasa dengan ide-idenya yang brilian. Eksentrisitasnya membuatnya unik dan tidak pernah membosankan. Kegeniusannya dalam sains dan teknologi membuatnya mampu menciptakan inovasi yang mengubah dunia. Ia selalu penuh ide dan tidak pernah berhenti bereksperimen. Meskipun terlihat aneh, kontribusinya terhadap pengetahuan manusia sangat besar.",
        words: "Sains adalah jawabannya.",
        sound: "sounds/the_herta.mp3"
    },
    {
        name: "Ruanmei",
        gender: "female",
        img: "images/ruanmei.png",
        desc: "Tenang dan analitis.",
        details: "Ruanmei adalah sosok yang tenang dan analitis, selalu mempelajari segala hal dengan objektivitas yang tinggi. Ketenangannya membuatnya mampu melihat situasi dari berbagai sudut pandang. Analisisnya yang mendalam membuatnya selalu memberikan solusi yang tepat. Ia percaya bahwa pemahaman yang mendalam adalah kunci untuk menyelesaikan masalah, dan selalu berusaha mencari kebenaran di balik setiap fenomena.",
        words: "Mari kita analisis.",
        sound: "sounds/ruanmei.mp3"
    },
    {
        name: "Evernight",
        gender: "female",
        img: "images/evernight.png",
        desc: "Gelap dan kuat.",
        details: "Evernight adalah sosok yang gelap dan kuat, selalu menghadapi malam dengan keberanian yang luar biasa. Kekuatannya yang misterius membuatnya mampu bertahan dalam kegelapan. Ia belajar dari bayangan dan menggunakan pengalaman gelapnya untuk menjadi lebih kuat. Meskipun terlihat menakutkan, ia memiliki kedalaman emosi yang kompleks dan selalu berusaha mencari cahaya di tengah kegelapan.",
        words: "Malam adalah sekutu ku.",
        sound: "sounds/evernight.mp3"
    },
    {
        name: "Danheng",
        gender: "male",
        img: "images/danheng.png",
        desc: "Pendiam dan kuat.",
        details: "Danheng adalah sosok yang pendiam dan kuat, selalu melindungi orang lain dengan diam-diam. Kewaspadaannya yang tinggi membuatnya selalu siap menghadapi bahaya. Kekuatannya yang luar biasa dipadukan dengan sikap yang tenang membuatnya menjadi pelindung yang andal. Ia percaya bahwa tindakan lebih penting daripada kata-kata, dan selalu bertindak demi kebaikan tanpa mengharapkan pengakuan.",
        words: "Aku akan menjaga.",
        sound: "sounds/danheng.mp3"
    },
    {
        name: "March",
        gender: "female",
        img: "images/march.png",
        desc: "Ceria dan fotografer.",
        details: "March adalah sosok yang ceria dan berbakat sebagai fotografer, selalu mengabadikan momen-momen indah dalam hidup. Optimismenya yang tinggi membuatnya selalu positif dalam menghadapi segala hal. Keceriaannya menular dan membuat orang di sekitarnya merasa bahagia. Ia percaya bahwa setiap momen berharga dan harus diabadikan, dan selalu berusaha melihat keindahan dalam kehidupan sehari-hari.",
        words: "Klik! Bagus!",
        sound: "sounds/march.mp3"
    },
    {
        name: "Aglaea",
        gender: "female",
        img: "images/aglaea.png",
        desc: "Anggun dan bijak.",
        details: "Aglaea adalah sosok yang anggun dan bijak, selalu membawa keindahan dan kedamaian ke mana pun ia pergi. Kebijaksanaannya membuatnya mampu memberikan nasihat yang tepat dan bijaksana. Elegansinya yang alami membuatnya terlihat anggun dalam setiap gerakan. Ia percaya bahwa keindahan sejati datang dari dalam, dan selalu berusaha menciptakan harmoni di sekitarnya dengan sikapnya yang lembut namun tegas.",
        words: "Keindahan ada di mana-mana.",
        sound: "sounds/aglaea.mp3"
    },
    {
        name: "Firefly",
        gender: "female",
        img: "images/firefly.png",
        desc: "Bersinar dan pemberani.",
        details: "Firefly adalah sosok yang bersinar dan pemberani, selalu menerangi kegelapan dengan keberaniannya yang luar biasa. Cahayanya yang bersinar membuatnya menjadi sumber inspirasi bagi orang lain. Keberaniannya membuatnya tidak takut menghadapi tantangan, bahkan dalam situasi yang paling gelap sekalipun. Ia percaya bahwa setiap orang memiliki cahaya dalam dirinya, dan selalu berusaha membantu orang lain menemukan cahaya tersebut.",
        words: "Aku akan bersinar.",
        sound: "sounds/firefly.mp3"
    },
    {
        name: "Fugue",
        gender: "female",
        img: "images/fugue.png",
        desc: "Misterius dan harmonis.",
        details: "Fugue adalah sosok yang misterius dan harmonis, selalu menciptakan musik yang indah dan penuh melodi. Misterinya membuatnya terlihat enigmatic namun menarik. Harmoninya yang tinggi membuatnya mampu menciptakan keseimbangan dalam segala hal. Ia percaya bahwa musik adalah bahasa universal, dan selalu berusaha menyampaikan perasaan melalui nada-nada yang indah. Kedalaman emosinya tercermin dalam setiap komposisi yang ia buat.",
        words: "Mari dengarkan musiknya.",

        sound: "sounds/fugue.mp3"
    }
];

const traitTranslations = {
    brave: "berani",
    smart: "cerdas",
    gentle: "lembut",
    leader: "pemimpin",
    warm: "hangat",
    cautious: "hati-hati"
};

// Terjemahan ke bahasa Indonesia
const traitIndoTranslations = {
    brave: "Berani",
    smart: "Cerdas",
    gentle: "Lemah Lembut",
    leader: "Kepemimpinan",
    warm: "Hangat",
    cautious: "Berhati-hati"
};

// Mapping untuk backward compatibility
const traitKeys = {
    brave: "berani",
    smart: "cerdas",
    gentle: "lembut",
    leader: "pemimpin",
    warm: "hangat",
    cautious: "hati_hati"
};

const characterTraits = {
    "Clorinde": { brave: 3, smart: 2, leader: 2 },
    "Phainon": { brave: 3, leader: 2, warm: 2 },
    "Cyrene": { brave: 2, warm: 3, gentle: 2 },
    "Yanagi": { gentle: 3, warm: 2, cautious: 1 },
    "Vivian": { gentle: 2, warm: 3, smart: 1 },
    "Yae Miko": { smart: 3, brave: 2, warm: 2 },
    "Hina": { brave: 2, warm: 2, smart: 1 },
    "Cerydra": { leader: 3, brave: 2, smart: 2 },
    "Hysilens": { brave: 3, gentle: 2, leader: 1 },
    "Kafka": { smart: 2, brave: 2, gentle: 2 },
    "Miyabi": { brave: 3, leader: 1, smart: 1 },
    "Robin": { warm: 3, gentle: 1, smart: 1 },
    "Sunday": { smart: 2, gentle: 3, cautious: 1 },
    "Mydei": { brave: 2, gentle: 2, warm: 2 },
    "Anaxa": { smart: 3, gentle: 2, cautious: 1 },
    "Acheron": { brave: 2, smart: 2, leader: 2 },
    "Aventurine": { leader: 2, warm: 2, smart: 2 },
    "Huohuo": { cautious: 2, brave: 2, gentle: 2 },
    "Wriothesley": { brave: 3, leader: 2, warm: 2 },
    "Neuvillette": { leader: 3, smart: 2, brave: 1 },
    "Shorekeeper": { leader: 3, smart: 2, brave: 1 },
    "Jane Doe": { smart: 3, cautious: 3 },
    "Kiana": { brave: 3, leader: 2 },
    "Dyroth Starlight": { brave: 3, leader: 2, smart: 2 },
    "Ye Shunguang": { warm: 3, gentle: 2 },
    "Astra Yao": { smart: 3, leader: 2 },
    "Ciaccona": { brave: 2, leader: 2, smart: 1 },
    "Brant": { brave: 3, gentle: 2 },
    "Raiden Shogun": { leader: 3, brave: 2 },
    "Skirk": { smart: 2, brave: 2 },
    "Tribbie": { warm: 3, brave: 1 },
    "Arlechinno": { smart: 2, cautious: 2 },
    "The Herta": { smart: 3, leader: 1 },
    "Ruanmei": { smart: 3, cautious: 2 },
    "Evernight": { brave: 3, smart: 1 },
    "Danheng": { brave: 2, leader: 2 },
    "March": { warm: 3, gentle: 2 },
    "Aglaea": { gentle: 3, smart: 2 },
    "Firefly": { brave: 3, warm: 2 },
    "Fugue": { smart: 2, gentle: 2 }
};

nameMapping = {
    "rara": "Phainon",
    "kirana": "Wriothesley",
    "galang": "Hina",
    "radja": "Yae Miko",
    "bryan": "Clorinde",
    "bryann": "Robin"
};

const quizQuestions = [{
        question: "Ketika ada masalah besar, kamu cenderung...",
        answers: [
            { text: "Menghadapinya dengan berani", traits: { brave: 2 } },
            { text: "Berpikir strategis dulu", traits: { smart: 2 } },
            { text: "Mencari bantuan teman", traits: { warm: 2 } },
            { text: "Menunggu dan melihat situasi", traits: { cautious: 2 } }
        ]
    },
    {
        question: "Dalam kelompok, peran kamu biasanya...",
        answers: [
            { text: "Memimpin dan mengarahkan", traits: { leader: 2 } },
            { text: "Menyediakan dukungan emosional", traits: { warm: 2 } },
            { text: "Menganalisis dan memberikan saran", traits: { smart: 2 } },
            { text: "Mengikuti arahan dengan hati-hati", traits: { cautious: 2 } }
        ]
    },
    {
        question: "Ketika bertengkar, kamu biasanya...",
        answers: [
            { text: "Berargumen dengan penuh semangat", traits: { brave: 2 } },
            { text: "Menggunakan logika dan fakta", traits: { smart: 2 } },
            { text: "Mencoba menenangkan situasi", traits: { gentle: 2 } },
            { text: "Menghindari konfrontasi", traits: { cautious: 2 } }
        ]
    },
    {
        question: "Dalam perjalanan, kamu lebih suka...",
        answers: [
            { text: "Petualangan yang menantang", traits: { brave: 2 } },
            { text: "Rencana yang terorganisir", traits: { smart: 2 } },
            { text: "Tempat yang nyaman dan hangat", traits: { warm: 2 } },
            { text: "Destinasi yang aman dan familiar", traits: { cautious: 2 } }
        ]
    },
    {
        question: "Ketika belajar hal baru, kamu...",
        answers: [
            { text: "Langsung mencoba dan belajar dari kesalahan", traits: { brave: 2 } },
            { text: "Membaca dan memahami teori dulu", traits: { smart: 2 } },
            { text: "Belajar bersama teman", traits: { warm: 2 } },
            { text: "Mengikuti instruksi step-by-step", traits: { cautious: 2 } }
        ]
    },
    {
        question: "Dalam hubungan, kamu lebih suka...",
        answers: [
            { text: "Pasangan yang kuat dan protektif", traits: { brave: 2 } },
            { text: "Pasangan yang cerdas dan intelektual", traits: { smart: 2 } },
            { text: "Pasangan yang lembut dan perhatian", traits: { gentle: 2 } },
            { text: "Pasangan yang stabil dan dapat diandalkan", traits: { cautious: 2 } }
        ]
    },
    {
        question: "Ketika stres, kamu biasanya...",
        answers: [
            { text: "Menghadapi dan menyelesaikan masalah", traits: { brave: 2 } },
            { text: "Menganalisis penyebabnya", traits: { smart: 2 } },
            { text: "Berbicara dengan orang terdekat", traits: { warm: 2 } },
            { text: "Mengambil waktu untuk tenang", traits: { cautious: 2 } }
        ]
    },
    {
        question: "Dalam keputusan penting, kamu...",
        answers: [
            { text: "Mengambil risiko untuk hasil besar", traits: { brave: 2 } },
            { text: "Menimbang pro dan kontra dengan hati-hati", traits: { smart: 2 } },
            { text: "Mendengarkan pendapat orang lain", traits: { warm: 2 } },
            { text: "Memilih opsi yang paling aman", traits: { cautious: 2 } }
        ]
    },
    {
        question: "Kepribadian kamu lebih mirip...",
        answers: [
            { text: "Pahlawan yang berani", traits: { brave: 2 } },
            { text: "Pemikir yang bijak", traits: { smart: 2 } },
            { text: "Sahabat yang hangat", traits: { warm: 2 } },
            { text: "Orang yang bijaksana dan tenang", traits: { cautious: 2 } }
        ]
    },
    {
        question: "Dalam situasi darurat, kamu...",
        answers: [
            { text: "Langsung bertindak heroik", traits: { brave: 2 } },
            { text: "Mencari solusi kreatif", traits: { smart: 2 } },
            { text: "Membantu orang lain terlebih dahulu", traits: { warm: 2 } },
            { text: "Memastikan keselamatan diri dulu", traits: { cautious: 2 } }
        ]
    },
    {
        question: "Gaya komunikasi kamu...",
        answers: [
            { text: "Langsung dan tegas", traits: { brave: 2 } },
            { text: "Logis dan persuasif", traits: { smart: 2 } },
            { text: "Empati dan mendengarkan", traits: { gentle: 2 } },
            { text: "Hati-hati dan diplomatis", traits: { cautious: 2 } }
        ]
    },
    {
        question: "Ketika melihat ketidakadilan, kamu...",
        answers: [
            { text: "Langsung melawan", traits: { brave: 2 } },
            { text: "Mencari cara untuk memperbaiki", traits: { smart: 2 } },
            { text: "Mendukung korban", traits: { warm: 2 } },
            { text: "Melaporkan dengan aman", traits: { cautious: 2 } }
        ]
    },
    {
        question: "Hobi kamu lebih ke...",
        answers: [
            { text: "Olahraga ekstrem", traits: { brave: 2 } },
            { text: "Membaca atau puzzle", traits: { smart: 2 } },
            { text: "Bersosialisasi", traits: { warm: 2 } },
            { text: "Kegiatan rumah yang tenang", traits: { cautious: 2 } }
        ]
    },
    {
        question: "Dalam tim, kamu lebih suka...",
        answers: [
            { text: "Menjadi pemimpin", traits: { leader: 2 } },
            { text: "Menyediakan ide-ide", traits: { smart: 2 } },
            { text: "Membuat suasana harmonis", traits: { warm: 2 } },
            { text: "Melakukan tugas dengan teliti", traits: { cautious: 2 } }
        ]
    },
    {
        question: "Cita-cita kamu...",
        answers: [
            { text: "Menjadi pahlawan atau pemimpin", traits: { brave: 2 } },
            { text: "Menjadi ahli di bidang tertentu", traits: { smart: 2 } },
            { text: "Membantu orang lain", traits: { warm: 2 } },
            { text: "Mencapai stabilitas dan keamanan", traits: { cautious: 2 } }
        ]
    }
];

const canvas = document.getElementById("particleCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let particles = [];

let userProfile = {};
let currentQuestion = 0;
let username = "";
let selectedAnswerIdx = -1;
let gachaMode = "personality"; // "personality" atau "compatibility"
let currentViewMode = 'grid'; // 'grid' atau 'list'
let currentPage = 1;
const charactersPerPage = 8;

// document.getElementById("adminBtn").addEventListener("click", openAdmin); // Commented out since onclick is in HTML
document.getElementById("importBtn").addEventListener("click", openImportTab);

function openBrowse() {
    document.getElementById("home").classList.add("hidden");
    document.getElementById("browsePanel").classList.remove("hidden");

    // Populate trait filter with translated options
    const traitSelect = document.getElementById("filterTrait");
    traitSelect.innerHTML = '<option value="">Semua Trait</option>';
    Object.entries(traitTranslations).forEach(([key, trans]) => {
        traitSelect.innerHTML += `<option value="${key}">${trans}</option>`;
    });

    // Reset to page 1 and display characters using grid view
    currentPage = 1;
    currentViewMode = 'grid';

    // Call the correct display function that shows the grid
    displayBrowseCharacters();
}

function closeBrowse() {
    document.getElementById("browsePanel").classList.add("hidden");
    document.getElementById("home").classList.remove("hidden");
}

function openTutorial() {
    document.getElementById("tutorialModal").classList.remove("hidden");
}

function closeTutorial() {
    document.getElementById("tutorialModal").classList.add("hidden");
}

function viewCharacter(name) {
    const char = characters.find(c => c.name === name);
    if (!char) return;

    const traits = characterTraits[name];
    const traitText = traits ? Object.entries(traits).filter(([k, v]) => v > 0).map(([k, v]) => `${traitTranslations[k] || k}: ${v}`).join(", ") : "N/A";

    document.getElementById("result").innerHTML = `
        <h2>Detail Karakter</h2>
        <div class="char-card fadeIn">
            <div class="char-card-top">
                <img src="${char.img}" alt="${char.name}">
                <div class="char-info">
                    <h1>${char.name}</h1>
                    <p><strong>Gender:</strong> ${char.gender === "male" ? "Laki-laki" : char.gender === "anomali" ? "Anomali" : "Perempuan"}</p>
                    <p><strong>Ciri-ciri:</strong> ${char.desc}</p>
                    <p><strong>Deskripsi:</strong> ${char.details}</p>
                    <p><strong>Trait:</strong> ${traitText}</p>
                </div>
            </div>
            <div class="char-card-bottom">
                <img src="${char.img}" alt="${char.name}">
                <p class="char-words">"${char.words}"</p>
            </div>
        </div>
        <button onclick="closeCharacterView()">← Kembali ke Jelajah</button>
    `;

    document.getElementById("browsePanel").classList.add("hidden");
    document.getElementById("result").classList.remove("hidden");
}

function closeCharacterView() {
    document.getElementById("result").classList.add("hidden");
    document.getElementById("browsePanel").classList.remove("hidden");
}

// NEW GRID-BASED CHARACTER DISPLAY FUNCTIONS
function displayBrowseCharacters() {
    const container = document.getElementById("browseCharacterList");
    const searchTerm = document.getElementById("searchName").value.toLowerCase().trim();
    const genderFilter = document.getElementById("filterGender").value;
    const traitFilter = document.getElementById("filterTrait").value;

    // Filter characters
    const filteredChars = characters.filter(char => {
        // Improved search: case-insensitive and matches partial names
        const charNameLower = char.name.toLowerCase();
        const matchesSearch = !searchTerm || charNameLower.includes(searchTerm);
        const matchesGender = !genderFilter || char.gender === genderFilter;
        const traits = characterTraits[char.name] || {};
        const matchesTrait = !traitFilter || (traits[traitFilter] && traits[traitFilter] > 0);

        return matchesSearch && matchesGender && matchesTrait;
    });

    // Always use grid view since we removed list view
    currentViewMode = 'grid';
    displayCharacterGrid(filteredChars);

    // Update pagination
    updatePagination(filteredChars.length);
}

function displayCharacterGrid(charactersToDisplay) {
    const container = document.getElementById("browseCharacterList");
    container.innerHTML = '<div class="browse-grid-container" id="characterGrid"></div>';

    const grid = document.getElementById("characterGrid");

    // Calculate pagination
    const startIndex = (currentPage - 1) * charactersPerPage;
    const endIndex = Math.min(startIndex + charactersPerPage, charactersToDisplay.length);
    const paginatedChars = charactersToDisplay.slice(startIndex, endIndex);

    if (paginatedChars.length === 0) {
        grid.innerHTML = '<div class="no-results">Tidak ada karakter yang ditemukan.</div>';
        return;
    }

    paginatedChars.forEach(char => {
        const traits = characterTraits[char.name] || {};
        const topTraits = Object.entries(traits)
            .filter(([_, v]) => v > 0)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 3)
            .map(([k]) => traitTranslations[k] || k)
            .join(", ");

        const genderClass = char.gender === "male" ? "male" :
                          char.gender === "female" ? "female" : "anomali";

        grid.innerHTML += `
            <div class="character-card" onclick="showCharacterDetail('${char.name}')">
                <img src="${char.img}" alt="${char.name}" onerror="this.src='images/default.png'">
                <div class="desc">${char.desc}</div>
                <div class="name">${char.name}</div>
                <div class="gender ${genderClass}">
                    ${char.gender === "male" ? "♂ Laki-laki" :
                     char.gender === "anomali" ? "⚠ Anomali" : "♀ Perempuan"}
                </div>
        <div class="trait-badge">${topTraits}</div>
                <button class="view-btn" onclick="event.stopPropagation(); showCharacterDetail('${char.name}')">Lihat Detail</button>
            </div>
        `;
    });
}

function displayCharacterList(charactersToDisplay) {
    const container = document.getElementById("browseCharacterList");
    container.innerHTML = '<div class="character-list" id="characterList"></div>';

    const list = document.getElementById("characterList");

    // Calculate pagination
    const startIndex = (currentPage - 1) * charactersPerPage;
    const endIndex = Math.min(startIndex + charactersPerPage, charactersToDisplay.length);
    const paginatedChars = charactersToDisplay.slice(startIndex, endIndex);

    if (paginatedChars.length === 0) {
        list.innerHTML = '<div class="no-results">Tidak ada karakter yang ditemukan.</div>';
        return;
    }

    paginatedChars.forEach(char => {
        const traits = characterTraits[char.name] || {};
        const traitText = Object.entries(traits)
            .filter(([_, v]) => v > 0)
            .map(([k, v]) => `${traitTranslations[k] || k}: ${v}`)
            .join(", ");

        list.innerHTML += `
            <div class="char-item">
                <img src="${char.img}" alt="${char.name}" class="char-thumbnail" onerror="this.style.display='none'">
                <div class="info">
                    <div class="name">${char.name}</div>
                    <div class="gender">
                        ${char.gender === "male" ? "♂ Laki-laki" :
                         char.gender === "anomali" ? "⚠ Anomali" : "♀ Perempuan"}
                    </div>
                    <div class="desc">${char.desc}</div>
                    <small style="color: #999;">${traitText}</small>
                </div>
                <div class="char-actions">
                    <button class="char-item-btn" onclick="showCharacterDetail('${char.name}')">Lihat Detail</button>
                </div>
            </div>
        `;
    });
}

function showCharacterDetail(name) {
    const char = characters.find(c => c.name === name);
    if (!char) return;

    const traits = characterTraits[name] || {};
    const genderClass = char.gender === "male" ? "male" :
                      char.gender === "female" ? "female" : "anomali";

    // Create modal
    const modal = document.createElement('div');
    modal.className = 'character-detail-modal';
    modal.innerHTML = `
        <div class="character-detail-content">
            <span class="character-detail-close" onclick="closeCharacterDetailModal(this)">&times;</span>
            <div class="character-detail-header">
                <img src="${char.img}" alt="${char.name}" onerror="this.src='images/default.png'">
                <div class="character-detail-info">
                    <h2>${char.name}</h2>
                    <span class="gender-badge ${genderClass}">
                        ${char.gender === "male" ? "♂ Laki-laki" :
                         char.gender === "anomali" ? "⚠ Anomali" : "♀ Perempuan"}
                    </span>
                    <div class="character-detail-desc">
                        <p>${char.desc}</p>
                    </div>
                    <div class="character-detail-traits">
                        ${Object.entries(traits)
                            .filter(([_, v]) => v > 0)
                            .map(([k, v]) => `<span class="trait-item">${traitIndoTranslations[k] || k}: ${v}</span>`)
                            .join('')}
                    </div>
                </div>
            </div>

            <div class="character-detail-section">
                <h3>Deskripsi Lengkap</h3>
                <p>${char.details}</p>
            </div>

            <div class="character-detail-quote">
                "${char.words}"
            </div>

            <button class="character-detail-close-btn" onclick="closeCharacterDetailModal(this)">Tutup</button>
        </div>
    `;

    document.body.appendChild(modal);

    // Add click outside to close
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeCharacterDetailModal(modal.querySelector('.character-detail-close'));
        }
    });
}

function closeCharacterDetailModal(element) {
    const modal = element.closest('.character-detail-modal');
    if (modal) {
        modal.remove();
    }
}

function toggleViewMode(mode) {
    currentViewMode = mode;
    currentPage = 1; // Reset to first page when changing view

    // Update button styles
    document.querySelectorAll('.view-mode-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    displayBrowseCharacters();
}

function updatePagination(totalCharacters) {
    const totalPages = Math.ceil(totalCharacters / charactersPerPage);
    const paginationContainer = document.getElementById("pagination");

    if (!paginationContainer) return;

    let paginationHTML = '';

    // Previous button
    paginationHTML += `
        <button onclick="changePage(${currentPage - 1})" ${currentPage === 1 ? 'disabled' : ''}>
            ← Sebelumnya
        </button>
    `;

    // Page numbers
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    if (startPage > 1) {
        paginationHTML += `<button onclick="changePage(1)">1</button>`;
        if (startPage > 2) {
            paginationHTML += `<span>...</span>`;
        }
    }

    for (let i = startPage; i <= endPage; i++) {
        paginationHTML += `
            <button onclick="changePage(${i})" class="${i === currentPage ? 'active' : ''}">
                ${i}
            </button>
        `;
    }

    if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
            paginationHTML += `<span>...</span>`;
        }
        paginationHTML += `<button onclick="changePage(${totalPages})">${totalPages}</button>`;
    }

    // Next button
    paginationHTML += `
        <button onclick="changePage(${currentPage + 1})" ${currentPage === totalPages ? 'disabled' : ''}>
            Selanjutnya →
        </button>
    `;

    paginationContainer.innerHTML = paginationHTML;
}

function changePage(page) {
    const totalCharacters = characters.filter(char => {
        const searchTerm = document.getElementById("searchName").value.toLowerCase();
        const genderFilter = document.getElementById("filterGender").value;
        const traitFilter = document.getElementById("filterTrait").value;

        const matchesSearch = char.name.toLowerCase().includes(searchTerm);
        const matchesGender = !genderFilter || char.gender === genderFilter;
        const traits = characterTraits[char.name] || {};
        const matchesTrait = !traitFilter || (traits[traitFilter] && traits[traitFilter] > 0);

        return matchesSearch && matchesGender && matchesTrait;
    }).length;

    const totalPages = Math.ceil(totalCharacters / charactersPerPage);

    if (page < 1) page = 1;
    if (page > totalPages) page = totalPages;

    currentPage = page;
    displayBrowseCharacters();
}

function clearFilters() {
    document.getElementById("searchName").value = "";
    document.getElementById("filterGender").value = "";
    document.getElementById("filterTrait").value = "";
    currentPage = 1;
    displayBrowseCharacters();
}

// Load karakter dari localStorage saat halaman muat
window.addEventListener("load", () => {
    loadCharactersFromStorage();
    loadNameMappingsFromStorage();
});

// Fungsi untuk memuat karakter dari file characters.json
function loadCharactersFromJSONFile() {
    fetch('characters.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            if (!Array.isArray(data)) {
                showAdminMessage("Format JSON tidak valid! Harus berupa array.", true);
                return;
            }

            let importedCount = 0;
            let skippedCount = 0;

            // Load existing custom characters
            let storedChars = localStorage.getItem("customCharacters");
            let customChars = storedChars ? JSON.parse(storedChars) : [];
            let storedTraits = localStorage.getItem("customTraits");
            let customTraits = storedTraits ? JSON.parse(storedTraits) : {};

            data.forEach(newChar => {
                // Validasi minimal
                if (!newChar.name || !newChar.gender || !newChar.desc) {
                    skippedCount++;
                    return;
                }

                // Cek duplikat
                const isDuplicate = characters.some(c => c.name === newChar.name);
                if (isDuplicate) {
                    skippedCount++;
                    return;
                }

                // Format data
                const formattedChar = {
                    name: newChar.name.trim(),
                    gender: newChar.gender,
                    img: newChar.img?.startsWith('images/') ? newChar.img : `images/${newChar.img || 'default.png'}`,
                    desc: newChar.desc,
                    details: newChar.details || newChar.desc,
                    words: newChar.words || newChar.desc,
                    sound: newChar.sound?.startsWith('sounds/') ? newChar.sound : `sounds/${newChar.sound || 'default.mp3'}`
                };

                // Tambah ke array
                characters.push(formattedChar);
                customChars.push(formattedChar);

                // Handle traits
                const traits = newChar.traits || {
                    brave: newChar.brave || 0,
                    smart: newChar.smart || 0,
                    gentle: newChar.gentle || 0,
                    leader: newChar.leader || 0,
                    warm: newChar.warm || 0,
                    cautious: newChar.cautious || 0
                };

                characterTraits[newChar.name] = traits;
                customTraits[newChar.name] = traits;

                importedCount++;
            });

            // Simpan ke localStorage
            localStorage.setItem("customCharacters", JSON.stringify(customChars));
            localStorage.setItem("customTraits", JSON.stringify(customTraits));

            // Refresh tampilan
            refreshCharacterList();
            displayBrowseCharacters();
            showAdminMessage(`✅ Import dari characters.json berhasil! ${importedCount} karakter ditambahkan, ${skippedCount} dilewati.`);
        })
        .catch(error => {
            showAdminMessage(`❌ Error loading characters.json: ${error.message}`, true);
            console.error('Error loading characters.json:', error);
        });
}

function startQuiz(mode) {
    username = document.getElementById("username").value.trim();
    if (!username) {
        showMessage("Isi nama dulu ya!");
        return;
    }

    // Clear any previous messages
    showMessage("");

    gachaMode = mode;
    document.getElementById("home").classList.add("hidden");
    document.getElementById("quiz").classList.remove("hidden");

    // Check for saved progress
    const savedProgress = loadQuizProgress();
    if (savedProgress && savedProgress.username === username && savedProgress.gachaMode === mode) {
        // Load saved progress
        currentQuestion = savedProgress.currentQuestion;
        userProfile = savedProgress.userProfile;
        selectedAnswerIdx = -1;
    } else {
        // Start new quiz
        currentQuestion = 0;
        userProfile = { brave: 0, smart: 0, gentle: 0, leader: 0, warm: 0, cautious: 0 };
        selectedAnswerIdx = -1;
    }

    displayQuestion();
}

function startRandomGacha() {
    username = document.getElementById("username").value;
    if (!username) {
        alert("Isi nama dulu ya!");
        document.getElementById("username").focus();
        return;
    }

    gachaMode = "random";
    document.getElementById("home").classList.add("hidden");
    startGachaAnimation();
}

function setupQuizKeyboardNavigation() {
    const options = document.querySelectorAll('.quiz-option');
    let currentFocus = 0;

    options.forEach((option, index) => {
        option.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
                e.preventDefault();
                currentFocus = (currentFocus + 1) % options.length;
                options[currentFocus].focus();
            } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
                e.preventDefault();
                currentFocus = (currentFocus - 1 + options.length) % options.length;
                options[currentFocus].focus();
            } else if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                selectAnswer(parseInt(option.getAttribute('data-index')));
            }
        });
    });

    if (options.length > 0) {
        options[0].focus();
    }
}

function displayQuestion() {
    const quizContent = document.getElementById("quizContent");
    const q = quizQuestions[currentQuestion];
    const modeTitle = gachaMode === "personality" ? "🔍 Kamu Mirip Siapa?" : "💕 Pasangan Mu?";

    let html = `
        <div class="quiz-mode-title">${modeTitle}</div>
        <div class="quiz-progress">Pertanyaan ${currentQuestion + 1} dari ${quizQuestions.length}</div>
        <div class="quiz-question">
            <h3>${q.question}</h3>
            <div class="quiz-options">
    `;

    q.answers.forEach((answer, idx) => {
        html += `<div class="quiz-option" onclick="selectAnswer(${idx})" tabindex="0" data-index="${idx}">${answer.text}</div>`;
    });

    html += `
            </div>
        </div>
        <div class="quiz-button-group">
            <button onclick="previousQuestion()" ${currentQuestion === 0 ? 'disabled' : ''}>← Sebelumnya</button>
            <button onclick="nextQuestion()" id="nextBtn">Selanjutnya →</button>
        </div>
    `;

    quizContent.innerHTML = html;

    // Add keyboard navigation for quiz options
    setupQuizKeyboardNavigation();
}

function selectAnswer(idx) {
    selectedAnswerIdx = idx;
    document.querySelectorAll(".quiz-option").forEach((el, i) => {
        el.classList.toggle("selected", i === idx);
    });
}

function nextQuestion() {
    if (selectedAnswerIdx === -1) {
        alert("Pilih jawaban dulu!");
        return;
    }

    const answer = quizQuestions[currentQuestion].answers[selectedAnswerIdx];
    Object.keys(answer.traits).forEach(trait => {
        userProfile[trait] += answer.traits[trait];
    });

    selectedAnswerIdx = -1;
    currentQuestion++;

    if (currentQuestion < quizQuestions.length) {
        displayQuestion();
        saveQuizProgress();
    } else {
        startGachaAnimation();
    }
}

function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        selectedAnswerIdx = -1;
        displayQuestion();
    }
}

function startGachaAnimation() {
    // Play gacha spin sound with error handling
    try {
        const gachaSound = new Audio('sounds/gacha.mp3');
        gachaSound.onerror = () => console.warn('Gacha sound file not found');
        gachaSound.play().catch(e => console.warn('Failed to play gacha sound:', e));
    } catch (e) {
        console.warn('Error loading gacha sound:', e);
    }

    document.getElementById("quiz").classList.add("hidden");
    document.getElementById("gachaAnim").classList.remove("hidden");

    // Animate gacha text
    const gachaText = document.getElementById("gachaText");
    const messages = [
        "Sedang mencari karakter terbaik...",
        "Menganalisis kepribadianmu...",
        "Memproses data...",
        "Hampir selesai...",
        "Siap-siap melihat hasilnya!"
    ];

    let messageIndex = 0;
    let textInterval = setInterval(() => {
        gachaText.textContent = messages[messageIndex];
        messageIndex = (messageIndex + 1) % messages.length;
    }, 400);

    setTimeout(() => {
        clearInterval(textInterval);
        rollCharacter(username);
    }, 2000);
}

function rollCharacter(username) {
    const result = document.getElementById("result");
    const gacha = document.getElementById("gachaAnim");

    let resultObj = findBestCharacter();
    let char = resultObj.character;

    // Track statistics
    trackQuizStatistics(char.name, gachaMode);

    document.body.style.backgroundImage = char.gender === "male" ?
        'url("images/sunset.jpg")' :
        char.gender === "anomali" ? 'url("images/black.jpg")' :
        'url("images/taman_bunga.jpg")';

    if (char.gender === "anomali") {
        try {
            const anomalyAudio = new Audio("sounds/anomali.mp3");
            anomalyAudio.volume = 0.5;
            anomalyAudio.onerror = () => console.warn('Anomaly sound file not found or failed to load');
            anomalyAudio.load();
            anomalyAudio.play().catch(e => console.warn('Failed to play anomaly sound:', e));
        } catch (e) {
            console.warn('Error loading anomaly sound:', e);
        }
    } else {
        try {
            const charAudio = new Audio(char.sound);
            charAudio.volume = 0.5;
            charAudio.onerror = () => console.warn(`Sound file for ${char.name} not found or failed to load`);
            charAudio.load();
            charAudio.play().catch(e => console.warn(`Failed to play sound for ${char.name}:`, e));
        } catch (e) {
            console.warn(`Error loading sound for ${char.name}:`, e);
        }
    }

    // Play backsound for Robin
    if (char.name === "Robin") {
        const robinBacksound = new Audio("sounds/robin_sound.mp3");
        robinBacksound.play();
    }

    // Play backsound for Astra Yao
    if (char.name === "Astra Yao") {
        const astraYaoBacksound = new Audio("sounds/astra_yao_sound.mp3");
        astraYaoBacksound.play();
    }


    createParticles(char.gender);
    animateParticles();

    // Gimmick untuk karakter anomali
    if (char.gender === "anomali") {
        // Shake effect
        document.body.classList.add("shake");
        setTimeout(() => {
            document.body.classList.remove("shake");
        }, 500);

        // Show error message
        const errorMsg = document.getElementById("errorMessage");
        errorMsg.style.display = "block";
        setTimeout(() => {
            errorMsg.style.display = "none";
        }, 2000);
    }

    gacha.classList.add("hidden");

    // Show congratulatory message first
    const congratMessage = gachaMode === "personality" ? `Selamat! Kamu mirip dengan ${char.name} ${resultObj.similarity}%!` :
        gachaMode === "compatibility" ? `Wah, kamu cocok dengan ${char.name} ${resultObj.compatibility}%!` :
        `Selamat! Karakter acakmu adalah ${char.name}!`;

    result.innerHTML = `
        <div class="congratulation-message">
            <h1>${congratMessage}</h1>
            <div class="loading-dots">
                <span>.</span><span>.</span><span>.</span>
            </div>
        </div>
    `;
    result.classList.remove("hidden");

    // After 2 seconds, show the character result
    setTimeout(() => {
                result.innerHTML = `
        <h2>Hai, ${username}!</h2>
        <div class="char-card fadeIn">
            <div class="char-card-top">
                <img src="${char.img}" alt="${char.name}">
                <div class="char-info">
                    <h1>${char.name}</h1>
                    <p id="desc" style="opacity:0;"><strong>Ciri-ciri:</strong> ${char.desc}</p>
                    <p id="traits" style="opacity:0;"><strong>Detail:</strong> ${char.details}</p>
                    <p id="percentages" style="opacity:0;"><strong>${gachaMode === "personality" ? `Wow, kamu mirip dengan ${char.name} ${resultObj.similarity}%!` : gachaMode === "compatibility" ? `Wow, kamu cocok dengan ${char.name} ${resultObj.compatibility}%!` : `Random pick!`}</strong></p>
                </div>
            </div>
            <div class="char-card-bottom">
                <img src="${char.img}" alt="${char.name}">
                <p id="words" style="opacity:0;" class="char-words">"${char.words}"</p>
            </div>
        </div>
        <button onclick="location.reload()">Coba Lagi</button>
    `;

        const soundEffect = new Audio("sounds/pop.mp3");
        setTimeout(() => {
            document.getElementById("desc").style.opacity = 1;
            soundEffect.play();
        }, 500);
        setTimeout(() => {
            document.getElementById("traits").style.opacity = 1;
            soundEffect.play();
        }, 1000);
        setTimeout(() => {
            document.getElementById("percentages").style.opacity = 1;
            soundEffect.play();
        }, 1500);
        setTimeout(() => {
            document.getElementById("words").style.opacity = 1;
            soundEffect.play();
        }, 2000);
    }, 2000);
}

function findBestCharacter() {
    // Check if username is mapped to a specific character
    const lowerUsername = username.toLowerCase();
    if (nameMapping[lowerUsername]) {
        const mappedCharName = nameMapping[lowerUsername];
        const mappedChar = characters.find(char => char.name === mappedCharName);
        if (mappedChar) {
            return { character: mappedChar, similarity: 100, compatibility: 100 };
        }
    }

    if (gachaMode === "random") {
        const randomIndex = Math.floor(Math.random() * characters.length);
        const randomChar = characters[randomIndex];
        return { character: randomChar, similarity: 0, compatibility: 0 };
    }

    let bestMatch = characters[0];
    let bestSimilarityScore = -Infinity;
    let bestCompatibilityScore = -Infinity;
    let bestSimilarityPerc = 0;
    let bestCompatibilityPerc = 0;

    characters.forEach(char => {
        const traits = characterTraits[char.name] || {};

        // Calculate similarity score (personality match)
        let similarityScore = 0;
        Object.keys(traits).forEach(trait => {
            similarityScore += traits[trait] * (userProfile[trait] || 0) * 4;
        });
        const maxSimilarity = 360; // Max possible: 3 traits * 30 user max * 4 multiplier
        const similarityPerc = Math.max(50, Math.min(100, 50 + (similarityScore / maxSimilarity) * 50));

        // Calculate compatibility score (complementary traits)
        let compatibilityScore = 0;
        Object.keys(traits).forEach(trait => {
            const charTrait = traits[trait] || 0;
            const scaledUserTrait = (userProfile[trait] || 0) / 10; // Scale to 0-3 range
            const difference = Math.abs(charTrait - scaledUserTrait);
            if (difference >= 1) {
                compatibilityScore += (3 - difference) * 2;
            } else if (difference === 0) {
                compatibilityScore += 1;
            }
        });
        const maxCompatibility = 24; // Max score as per original calculation
        const compatibilityPerc = Math.max(50, Math.min(100, 50 + (compatibilityScore / maxCompatibility) * 50));

        // Add randomness
        similarityScore += Math.random() * 5;
        compatibilityScore += Math.random() * 5;

        // Determine best match based on mode
        if (gachaMode === "personality") {
            if (similarityScore > bestSimilarityScore) {
                bestSimilarityScore = similarityScore;
                bestMatch = char;
                bestSimilarityPerc = similarityPerc;
                bestCompatibilityPerc = compatibilityPerc;
            }
        } else if (gachaMode === "compatibility") {
            if (compatibilityScore > bestCompatibilityScore) {
                bestCompatibilityScore = compatibilityScore;
                bestMatch = char;
                bestSimilarityPerc = similarityPerc;
                bestCompatibilityPerc = compatibilityPerc;
            }
        }
    });

    return {
        character: bestMatch,
        similarity: Math.round(bestSimilarityPerc),
        compatibility: Math.round(bestCompatibilityPerc)
    };
}

function createParticles(gender) {
    particles = [];
    for (let i = 0; i < 50; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 5 + 2,
            speedY: Math.random() * 1 + 0.5,
            type: gender === "male" ? "cloud" : gender === "anomali" ? "star" : "flower"
        });
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        ctx.fillStyle = p.type === "cloud" ? "rgba(255,255,255,0.5)" :
            p.type === "star" ? "rgba(255,255,255,0.7)" :
            "rgba(255,182,193,0.7)";
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        p.y -= p.speedY;
        if (p.y + p.size < 0) p.y = canvas.height + p.size;
    });
    requestAnimationFrame(animateParticles);
}

function loadNameMappingsFromStorage() {
    const stored = localStorage.getItem("nameMappings");
    if (stored) {
        const customMappings = JSON.parse(stored);
        Object.assign(nameMapping, customMappings);
    }
}

function saveQuizProgress() {
    const progress = {
        username,
        currentQuestion,
        userProfile,
        gachaMode
    };
    localStorage.setItem('quizProgress', JSON.stringify(progress));
}

function loadQuizProgress() {
    const stored = localStorage.getItem('quizProgress');
    if (stored) {
        return JSON.parse(stored);
    }
    return null;
}

function trackQuizStatistics(characterName, mode) {
    const statsKey = 'quizStatistics';
    let stats = JSON.parse(localStorage.getItem(statsKey)) || {
        totalQuizzes: 0,
        resultsByCharacter: {},
        modeUsage: { personality: 0, compatibility: 0 }
    };

    stats.totalQuizzes++;
    stats.resultsByCharacter[characterName] = (stats.resultsByCharacter[characterName] || 0) + 1;
    stats.modeUsage[mode]++;

    localStorage.setItem(statsKey, JSON.stringify(stats));
}

function displayStatistics() {
    const stats = JSON.parse(localStorage.getItem('quizStatistics')) || {
        totalQuizzes: 0,
        resultsByCharacter: {},
        modeUsage: { personality: 0, compatibility: 0 }
    };

    const content = document.getElementById("statisticsContent");
    if (stats.totalQuizzes === 0) {
        content.innerHTML = `
            <h4>Total Quiz: ${stats.totalQuizzes}</h4>
            <p>Belum ada quiz yang dilakukan. Mulai quiz untuk melihat statistik!</p>
        `;
    } else {
        content.innerHTML = `
            <h4>Total Quiz: ${stats.totalQuizzes}</h4>
            <h4>Mode Usage:</h4>
            <ul>
                <li>Personality: ${stats.modeUsage.personality}</li>
                <li>Compatibility: ${stats.modeUsage.compatibility}</li>
            </ul>
            <h4>Results by Character:</h4>
            <ul>
                ${Object.entries(stats.resultsByCharacter).map(([char, count]) => `<li>${char}: ${count}</li>`).join('')}
            </ul>
        `;
    }
    content.classList.remove("hidden");
}

function populateCharacterSelect() {
    const select = document.getElementById("mapCharacter");
    select.innerHTML = '<option value="">Pilih Karakter</option>';
    characters.forEach(char => {
        select.innerHTML += `<option value="${char.name}">${char.name}</option>`;
    });
}

function addNameMapping() {
    const name = document.getElementById("mapName").value.trim().toLowerCase();
    const character = document.getElementById("mapCharacter").value;

    if (!name || !character) {
        alert("Isi nama dan karakter ya!");
        return;
    }

    nameMapping[name] = character;

    // Simpan ke localStorage
    let stored = localStorage.getItem("nameMappings");
    const customMappings = stored ? JSON.parse(stored) : {};
    customMappings[name] = character;
    localStorage.setItem("nameMappings", JSON.stringify(customMappings));

    alert(`Mapping ${name} -> ${character} berhasil ditambahkan!`);
    document.getElementById("mapName").value = "";
    document.getElementById("mapCharacter").value = "";
    refreshNameMappingList();
}

function deleteNameMapping(name) {
    if (!confirm(`Hapus mapping untuk ${name}?`)) return;

    delete nameMapping[name];

    // Update localStorage
    let stored = localStorage.getItem("nameMappings");
    const customMappings = stored ? JSON.parse(stored) : {};
    delete customMappings[name];
    localStorage.setItem("nameMappings", JSON.stringify(customMappings));

    refreshNameMappingList();
}

function refreshNameMappingList() {
    const list = document.getElementById("nameMappingList");
    list.innerHTML = "";

    Object.entries(nameMapping).forEach(([name, charName]) => {
        list.innerHTML += `
            <div class="mapping-item">
                <div class="info">
                    <div class="name">${name}</div>
                    <div class="character">→ ${charName}</div>
                </div>
                <div class="mapping-actions">
                    <button class="mapping-item-btn" onclick="deleteNameMapping('${name}')">Hapus</button>
                </div>
            </div>
    `;
    });
}

// ===== FUNGSI ADMIN PANEL =====
function loadCharactersFromStorage() {
    const stored = localStorage.getItem("customCharacters");
    const storedTraits = localStorage.getItem("customTraits");
    const customTraits = storedTraits ? JSON.parse(storedTraits) : {};

    if (stored) {
        const customChars = JSON.parse(stored);
        customChars.forEach(char => {
            characters.push(char);
            if (customTraits[char.name]) {
                characterTraits[char.name] = customTraits[char.name];
            }
        });
    }
}

const ADMIN_PASSWORD = "l"; // Change this to your desired password

function openAdmin() {
    document.getElementById("home").classList.add("hidden");
    document.getElementById("adminPanel").classList.remove("hidden");
    switchAdminTab('characters');
}

// Tambahkan fungsi untuk membuka tab import secara langsung
function openImportTab() {
    const password = prompt("Enter admin password:");
    if (password !== ADMIN_PASSWORD) {
        alert("Wrong password!");
        return;
    }

    document.getElementById("home").classList.add("hidden");
    document.getElementById("adminPanel").classList.remove("hidden");
    switchAdminTab('import');
}

function switchAdminTab(tab) {
    // Update nav buttons
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`nav${tab.charAt(0).toUpperCase() + tab.slice(1)}`).classList.add('active');

    const formSection = document.getElementById("adminForm");
    const listSection = document.getElementById("adminList");

    if (tab === 'characters') {
        formSection.innerHTML = `
            <h3>Tambah/Edit Karakter</h3>
            <input type="text" id="charName" placeholder="Nama Karakter" />
            <select id="charGender">
                <option value="">Pilih Gender</option>
                <option value="male">Laki-laki</option>
                <option value="female">Perempuan</option>
                <option value="anomali">Anomali</option>
            </select>
            <input type="text" id="charImg" placeholder="Path Gambar (images/...)" />
            <input type="text" id="charSound" placeholder="Path Suara (sounds/...)" />
            <input type="text" id="charDesc" placeholder="Deskripsi Singkat" />
            <textarea id="charDetails" placeholder="Deskripsi Lengkap"></textarea>
            <input type="text" id="charWords" placeholder="Kata-kata" />
            <h4>Trait (0-3):</h4>
            <div class="trait-inputs">
                <label>Brave: <input type="number" id="traitBrave" min="0" max="3" value="0" /></label>
                <label>Smart: <input type="number" id="traitSmart" min="0" max="3" value="0" /></label>
                <label>Gentle: <input type="number" id="traitGentle" min="0" max="3" value="0" /></label>
                <label>Leader: <input type="number" id="traitLeader" min="0" max="3" value="0" /></label>
                <label>Warm: <input type="number" id="traitWarm" min="0" max="3" value="0" /></label>
                <label>Cautious: <input type="number" id="traitCautious" min="0" max="3" value="0" /></label>
            </div>
            <button id="addCharBtn" onclick="addCharacter()">Tambah Karakter</button>

            <!-- TAMBAHKAN BUTTON UNTUK LOAD DARI CHARACTERS.JSON -->
            <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd;">
                <h4>Import dari characters.json</h4>
                <button onclick="loadCharactersFromJSONFile()" style="width: 100%; background: #2ecc71; margin-bottom: 10px;">📁 Load dari characters.json</button>
                <small style="color: #666; display: block; margin-bottom: 10px;">Muat karakter dari file characters.json yang sudah disediakan</small>
            </div>
        `;
        listSection.innerHTML = '<h3>Daftar Karakter</h3><div id="characterList" class="character-list"></div>';
        refreshCharacterList();
        populateCharacterSelect();
    } else if (tab === 'mappings') {
        formSection.innerHTML = `
            <h3>Tambah Mapping Nama</h3>
            <input type="text" id="mapName" placeholder="Nama" />
            <select id="mapCharacter">
                <option value="">Pilih Karakter</option>
            </select>
            <button onclick="addNameMapping()">Tambah Mapping</button>
        `;
        listSection.innerHTML = '<h3>Daftar Mapping</h3><div id="nameMappingList" class="mapping-list"></div>';
        populateCharacterSelect();
        refreshNameMappingList();
    } else if (tab === 'stats') {
        formSection.innerHTML = '<h3>Statistik Quiz</h3>';
        listSection.innerHTML = '<div id="statisticsContent" class="statistics-content"></div>';
        displayStatistics();
    } else if (tab === 'import') {
        formSection.innerHTML = `
            <h3>📁 Import & Export Karakter</h3>

            <!-- SECTION 1: IMPORT -->
            <div class="import-section">
                <h4>Import dari File JSON</h4>
                <input type="file" id="jsonFileInput" accept=".json" style="width: 100%; padding: 10px; margin: 10px 0;">
                <button onclick="importCharactersFromJSON()" style="width: 100%; background: #3498db;">Import Karakter</button>
                <small style="color: #666;">Upload file JSON dengan format yang benar</small>
            </div>

            <!-- SECTION 2: DOWNLOAD TEMPLATE -->
            <div class="import-section" style="margin-top: 20px;">
                <h4>Download Template</h4>
                <button onclick="downloadTemplate()" style="width: 100%; background: #9b59b6;">📥 Download Template JSON</button>
                <small style="color: #666;">Template untuk membuat karakter baru</small>
            </div>

            <!-- SECTION 3: EXPORT BACKUP -->
            <div class="import-section" style="margin-top: 20px;">
                <h4>Export Backup</h4>
                <button onclick="exportCharactersToJSON()" style="width: 100%; background: #27ae60;">📤 Export Semua Karakter</button>
                <small style="color: #666;">Simpan semua karakter ke file JSON</small>
            </div>

            <!-- SECTION 4: RESET DATA -->
            <div class="import-section" style="margin-top: 20px;">
                <h4>Reset Data</h4>
                <button onclick="resetToDefault()" style="width: 100%; background: #e74c3c;">🗑️ Reset ke Default</button>
                <small style="color: #666;">Hapus semua karakter custom (karakter default tetap)</small>
            </div>

            <!-- SECTION 5: SETTINGS -->
            <div class="import-section" style="margin-top: 20px;">
                <h4>Pengaturan Tampilan</h4>
                <div style="display: flex; gap: 10px; margin: 10px 0;">
                    <button onclick="toggleBrowseFeature()" style="width: 100%; background: #ff9800;">👁️ ${getBrowseFeatureStatus() ? 'Sembunyikan' : 'Tampilkan'} Jelajahi Karakter</button>
                </div>
                <small style="color: #666;">Aktifkan/nonaktifkan fitur jelajahi karakter di halaman utama</small>
                <p id="browseFeatureStatus" style="margin-top: 10px; font-size: 0.9em; color: #333;">
                    Status: <strong>${getBrowseFeatureStatus() ? 'Aktif' : 'Nonaktif'}</strong>
                </p>
            </div>
        `;
        listSection.innerHTML = '<h3>Status Import</h3><div id="importStatus"></div>';
    }
}


function closeAdmin() {
    document.getElementById("adminPanel").classList.add("hidden");
    document.getElementById("home").classList.remove("hidden");
}

function addCharacter() {
    const name = document.getElementById("charName").value.trim();
    const gender = document.getElementById("charGender").value;
    let img = document.getElementById("charImg").value.trim();
    let sound = document.getElementById("charSound").value.trim();
    const desc = document.getElementById("charDesc").value.trim();
    const details = document.getElementById("charDetails").value.trim();
    const words = document.getElementById("charWords").value.trim();

    if (!name || !gender || !img || !sound || !desc || !details || !words) {
        alert("Isi semua field ya!");
        return;
    }

    // Auto-prepend folder paths if not present
    if (!img.startsWith("images/")) {
        img = "images/" + img;
    }
    if (!sound.startsWith("sounds/")) {
        sound = "sounds/" + sound;
    }

    const traits = {
        brave: parseInt(document.getElementById("traitBrave").value) || 0,
        smart: parseInt(document.getElementById("traitSmart").value) || 0,
        gentle: parseInt(document.getElementById("traitGentle").value) || 0,
        leader: parseInt(document.getElementById("traitLeader").value) || 0,
        warm: parseInt(document.getElementById("traitWarm").value) || 0,
        cautious: parseInt(document.getElementById("traitCautious").value) || 0
    };

    if (editingCharName) {
        // Update existing character
        const charIndex = characters.findIndex(c => c.name === editingCharName);
        if (charIndex !== -1) {
            characters[charIndex] = { name, gender, img, sound, desc, details, words };
            characterTraits[name] = traits;

            // Update localStorage
            let stored = localStorage.getItem("customCharacters");
            const customChars = stored ? JSON.parse(stored) : [];
            const customIndex = customChars.findIndex(c => c.name === editingCharName);
            if (customIndex !== -1) {
                customChars[customIndex] = { name, gender, img, sound, desc, details, words };
                localStorage.setItem("customCharacters", JSON.stringify(customChars));
            }

            // Update traits
            let storedTraits = localStorage.getItem("customTraits");
            const customTraits = storedTraits ? JSON.parse(storedTraits) : {};
            delete customTraits[editingCharName];
            customTraits[name] = traits;
            localStorage.setItem("customTraits", JSON.stringify(customTraits));

            alert(`Karakter ${name} berhasil diupdate!`);
        }
        editingCharName = null;
    } else {
        // Cek duplicate
        if (characters.some(c => c.name === name)) {
            alert("Karakter dengan nama ini sudah ada!");
            return;
        }

        const newChar = { name, gender, img, sound, desc, details, words };

        // Tambah ke array
        characters.push(newChar);
        characterTraits[name] = traits;

        // Simpan ke localStorage
        let stored = localStorage.getItem("customCharacters");
        const customChars = stored ? JSON.parse(stored) : [];
        customChars.push(newChar);
        localStorage.setItem("customCharacters", JSON.stringify(customChars));

        // Simpan traits
        let storedTraits = localStorage.getItem("customTraits");
        const customTraits = storedTraits ? JSON.parse(storedTraits) : {};
        customTraits[name] = traits;
        localStorage.setItem("customTraits", JSON.stringify(customTraits));

        alert(`Karakter ${name} berhasil ditambahkan!`);
    }

    resetForm();
    refreshCharacterList();
}

function deleteCharacter(name) {
    if (!confirm(`Hapus karakter ${name}?`)) return;

    // Cek apakah karakter custom
    let stored = localStorage.getItem("customCharacters");
    const customChars = stored ? JSON.parse(stored) : [];
    const isCustom = customChars.some(c => c.name === name);

    if (!isCustom) {
        alert("Karakter default tidak bisa dihapus!");
        return;
    }

    // Hapus dari array
    characters = characters.filter(c => c.name !== name);
    delete characterTraits[name];

    // Update localStorage
    const updated = customChars.filter(c => c.name !== name);
    localStorage.setItem("customCharacters", JSON.stringify(updated));

    let storedTraits = localStorage.getItem("customTraits");
    const customTraits = storedTraits ? JSON.parse(storedTraits) : {};
    delete customTraits[name];
    localStorage.setItem("customTraits", JSON.stringify(customTraits));

    refreshCharacterList();
}

function resetForm() {
    document.getElementById("charName").value = "";
    document.getElementById("charGender").value = "";
    document.getElementById("charImg").value = "";
    document.getElementById("charSound").value = "";
    document.getElementById("charDesc").value = "";
    document.getElementById("charDetails").value = "";
    document.getElementById("charWords").value = "";
    document.getElementById("traitBrave").value = "0";
    document.getElementById("traitSmart").value = "0";
    document.getElementById("traitGentle").value = "0";
    document.getElementById("traitLeader").value = "0";
    document.getElementById("traitWarm").value = "0";
    document.getElementById("traitCautious").value = "0";
    document.getElementById("mapName").value = "";
    document.getElementById("mapCharacter").value = "";
}

let editingCharName = null;

function refreshCharacterList() {
    const list = document.getElementById("characterList");
    list.innerHTML = "";
    const stored = localStorage.getItem("customCharacters");
    const customChars = stored ? JSON.parse(stored) : [];

    characters.forEach(char => {
        const traits = characterTraits[char.name];
        const isCustom = customChars.some(c => c.name === char.name);

        const traitText = traits ? Object.entries(traits).map(([k, v]) => `${k}: ${v}`).join(", ") : "N/A";

        list.innerHTML += `
            <div class="char-item">
                <div class="info">
                    <div class="name">${char.name}</div>
                    <div class="gender">${char.gender === "male" ? "♂ Laki-laki" : char.gender === "anomali" ? "⚠ Anomali" : "♀ Perempuan"}</div>
                    <small style="color: #999;">${traitText}</small>
                </div>
                <div class="char-actions">
                    <button class="char-item-btn ${isCustom ? "" : "disabled"}" onclick="editCharacter('${char.name}')" ${!isCustom ? "disabled" : ""}>Edit Karakter</button>
                    <button class="char-item-btn ${isCustom ? "" : "disabled"}" onclick="deleteCharacter('${char.name}')" ${!isCustom ? "disabled" : ""}>Hapus Karakter</button>
                </div>
            </div>
    `;
    });
}

function editCharacter(name) {
    const char = characters.find(c => c.name === name);
    if (!char) return;

    editingCharName = name;

    document.getElementById("charName").value = char.name;
    document.getElementById("charGender").value = char.gender;
    document.getElementById("charImg").value = char.img;
    document.getElementById("charSound").value = char.sound;
    document.getElementById("charDesc").value = char.desc;
    document.getElementById("charDetails").value = char.details;
    document.getElementById("charWords").value = char.words;

    const traits = characterTraits[name] || {};
    document.getElementById("traitBrave").value = traits.brave || 0;
    document.getElementById("traitSmart").value = traits.smart || 0;
    document.getElementById("traitGentle").value = traits.gentle || 0;
    document.getElementById("traitLeader").value = traits.leader || 0;
    document.getElementById("traitWarm").value = traits.warm || 0;
    document.getElementById("traitCautious").value = traits.cautious || 0;

    document.getElementById("addCharBtn").textContent = "Update Karakter";
}

function showAdminMessage(message, isError = false) {
    const messageDiv = document.getElementById('adminMessage');
    messageDiv.textContent = message;
    messageDiv.style.borderColor = isError ? '#f44336' : '#4CAF50';
    messageDiv.style.display = 'block';
    setTimeout(() => {
        messageDiv.style.display = 'none';
    }, 3000);
}

// ===== FUNGSI IMPORT KARAKTER DARI FILE JSON =====
function handleFileImport(event) {
    const file = event.target.files[0];
    if (!file) {
        showAdminMessage("Tidak ada file yang dipilih!", true);
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const newCharacters = JSON.parse(e.target.result);
            if (!Array.isArray(newCharacters)) {
                showAdminMessage("Format JSON tidak valid! Harus berupa array.", true);
                return;
            }

            let importedCount = 0;
            let skippedCount = 0;
            
            newCharacters.forEach(char => {
                // Validasi field yang diperlukan
                if (!char.name || !char.gender || !char.desc || !char.details || !char.words) {
                    console.warn(`Karakter ${char.name || 'tanpa nama'} dilewati: field wajib tidak lengkap`);
                    skippedCount++;
                    return;
                }

                // Set default values jika tidak ada
                const img = char.img?.startsWith("images/") ? char.img : `images/${char.img || `${char.name.toLowerCase().replace(/ /g, '_')}.png`}`;
                const sound = char.sound?.startsWith("sounds/") ? char.sound : `sounds/${char.sound || `${char.name.toLowerCase().replace(/ /g, '_')}.mp3`}`;
                
                const traits = char.traits || {
                    brave: parseInt(char.brave) || 0,
                    smart: parseInt(char.smart) || 0,
                    gentle: parseInt(char.gentle) || 0,
                    leader: parseInt(char.leader) || 0,
                    warm: parseInt(char.warm) || 0,
                    cautious: parseInt(char.cautious) || 0
                };

                // Cek duplikat
                const isDuplicate = characters.some(c => c.name === char.name);
                if (!isDuplicate) {
                    characters.push({
                        name: char.name,
                        gender: char.gender,
                        img: img,
                        desc: char.desc,
                        details: char.details,
                        words: char.words,
                        sound: sound
                    });
                    
                    characterTraits[char.name] = traits;
                    importedCount++;
                } else {
                    skippedCount++;
                }
            });

            // Simpan ke localStorage
            let stored = localStorage.getItem("customCharacters");
            const customChars = stored ? JSON.parse(stored) : [];
            
            newCharacters.forEach(char => {
                const isDuplicateCustom = customChars.some(c => c.name === char.name);
                const isDuplicateDefault = characters.slice(0, characters.length - importedCount).some(c => c.name === char.name);
                
                if (!isDuplicateCustom && !isDuplicateDefault) {
                    const img = char.img?.startsWith("images/") ? char.img : `images/${char.img || `${char.name.toLowerCase().replace(/ /g, '_')}.png`}`;
                    const sound = char.sound?.startsWith("sounds/") ? char.sound : `sounds/${char.sound || `${char.name.toLowerCase().replace(/ /g, '_')}.mp3`}`;
                    
                    customChars.push({
                        name: char.name,
                        gender: char.gender,
                        img: img,
                        desc: char.desc,
                        details: char.details,
                        words: char.words,
                        sound: sound
                    });

                    let storedTraits = localStorage.getItem("customTraits");
                    const customTraits = storedTraits ? JSON.parse(storedTraits) : {};
                    const traits = char.traits || {
                        brave: parseInt(char.brave) || 0,
                        smart: parseInt(char.smart) || 0,
                        gentle: parseInt(char.gentle) || 0,
                        leader: parseInt(char.leader) || 0,
                        warm: parseInt(char.warm) || 0,
                        cautious: parseInt(char.cautious) || 0
                    };
                    customTraits[char.name] = traits;
                    localStorage.setItem("customTraits", JSON.stringify(customTraits));
                }
            });

            localStorage.setItem("customCharacters", JSON.stringify(customChars));
            showAdminMessage(`Import berhasil! ${importedCount} karakter ditambahkan, ${skippedCount} dilewati.`);
            
            // Reset file input
            document.getElementById('jsonFileInput').value = '';
            refreshCharacterList();
            displayBrowseCharacters();
        } catch (error) {
            showAdminMessage(`Error parsing JSON: ${error.message}`, true);
            console.error('Error importing characters:', error);
        }
    };
    reader.readAsText(file);
}

function addImportFunctionalityToAdmin() {
    // Tambah import button ke form admin
    const adminForm = document.getElementById('adminForm');
    if (adminForm) {
        const importSection = document.createElement('div');
        importSection.classList.add('import-section');
        importSection.innerHTML = `
            <h4>Import Karakter dari File JSON</h4>
            <p>Upload file JSON dengan format seperti character_template.json</p>
            <div style="display: flex; gap: 10px; margin: 10px 0;">
                <button onclick="document.getElementById('jsonFileInput').click()">📁 Import dari File</button>
                <button onclick="downloadCharacterTemplate()">📥 Download Template</button>
                <button onclick="exportCharactersToJSON()">📤 Export Semua Karakter</button>
            </div>
            <small style="display: block; margin-top: 10px; color: #666;">
                Gunakan template yang sudah disediakan untuk memformat karakter dengan benar.
            </small>
        `;

        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.id = 'jsonFileInput';
        fileInput.accept = '.json';
        fileInput.style.display = 'none';
        fileInput.addEventListener('change', handleFileImport);

        adminForm.appendChild(importSection);
        adminForm.appendChild(fileInput);
    }
}

function downloadCharacterTemplate() {
    const template = `[
  {
    "name": "Nama Karakter",
    "gender": "male/female/anomali",
    "img": "images/nama_file.png",
    "desc": "Deskripsi singkat karakter",
    "details": "Deskripsi lengkap karakter yang menjelaskan kepribadian dan latar belakangnya secara detail.",
    "words": "Kata-kata khas karakter",
    "sound": "sounds/nama_file.mp3",
    "traits": {
      "brave": 0,
      "smart": 0,
      "gentle": 0,
      "leader": 0,
      "warm": 0,
      "cautious": 0
    }
  }
]`;
    
    const blob = new Blob([template], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'character_template.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    showAdminMessage("Template berhasil didownload! Silahkan edit file JSON tersebut.");
}

function exportCharactersToJSON() {
    const exportData = characters.map(char => {
        const traits = characterTraits[char.name] || {};
        return {
            name: char.name,
            gender: char.gender,
            img: char.img,
            desc: char.desc,
            details: char.details,
            words: char.words,
            sound: char.sound,
            traits: traits
        };
    });
    
    const jsonStr = JSON.stringify(exportData, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'characters_export.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    showAdminMessage("Export berhasil! Semua karakter tersimpan di file characters_export.json");
}

// Initialize import functionality
window.addEventListener('load', () => {
    setTimeout(() => {
        addImportFunctionalityToAdmin();
    }, 100);
});


window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// ========== FUNGSI IMPORT/EXPORT ==========

function importCharactersFromJSON() {
    const fileInput = document.getElementById('jsonFileInput');
    const file = fileInput.files[0];
    
    if (!file) {
        showAdminMessage("Pilih file JSON dulu!", true);
        return;
    }
    
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const importedChars = JSON.parse(e.target.result);
            if (!Array.isArray(importedChars)) {
                showAdminMessage("Format JSON salah! Harus array", true);
                return;
            }
            
            let added = 0;
            let skipped = 0;
            
            // Load existing custom characters
            let storedChars = localStorage.getItem("customCharacters");
            let customChars = storedChars ? JSON.parse(storedChars) : [];
            let storedTraits = localStorage.getItem("customTraits");
            let customTraits = storedTraits ? JSON.parse(storedTraits) : {};
            
            importedChars.forEach(newChar => {
                // Validasi minimal
                if (!newChar.name || !newChar.gender || !newChar.desc) {
                    skipped++;
                    return;
                }
                
                // Cek duplikat
                const isDuplicate = characters.some(c => c.name === newChar.name);
                if (isDuplicate) {
                    skipped++;
                    return;
                }
                
                // Format data
                const formattedChar = {
                    name: newChar.name.trim(),
                    gender: newChar.gender,
                    img: newChar.img?.startsWith('images/') ? newChar.img : `images/${newChar.img || 'default.png'}`,
                    desc: newChar.desc,
                    details: newChar.details || newChar.desc,
                    words: newChar.words || newChar.desc,
                    sound: newChar.sound?.startsWith('sounds/') ? newChar.sound : `sounds/${newChar.sound || 'default.mp3'}`
                };
                
                // Tambah ke array
                characters.push(formattedChar);
                customChars.push(formattedChar);
                
                // Handle traits
                const traits = newChar.traits || {
                    brave: newChar.brave || 0,
                    smart: newChar.smart || 0,
                    gentle: newChar.gentle || 0,
                    leader: newChar.leader || 0,
                    warm: newChar.warm || 0,
                    cautious: newChar.cautious || 0
                };
                
                characterTraits[newChar.name] = traits;
                customTraits[newChar.name] = traits;
                
                added++;
            });
            
            // Simpan ke localStorage
            localStorage.setItem("customCharacters", JSON.stringify(customChars));
            localStorage.setItem("customTraits", JSON.stringify(customTraits));
            
            // Reset file input
            fileInput.value = '';
            
            // Refresh tampilan
            refreshCharacterList();
            showAdminMessage(`✅ Import berhasil! ${added} karakter ditambahkan, ${skipped} dilewati.`);
            
        } catch (error) {
            showAdminMessage(`❌ Error: ${error.message}`, true);
        }
    };
    
    reader.readAsText(file);
}

function downloadTemplate() {
    const template = [
        {
            "name": "Nama Karakter Baru",
            "gender": "male",
            "img": "images/karakter_baru.png",
            "desc": "Deskripsi singkat karakter",
            "details": "Deskripsi lengkap karakter...",
            "words": "Kata-kata khas karakter",
            "sound": "sounds/karakter_baru.mp3",
            "traits": {
                "brave": 2,
                "smart": 1,
                "gentle": 0,
                "leader": 1,
                "warm": 3,
                "cautious": 0
            }
        }
    ];
    
    const jsonStr = JSON.stringify(template, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'character_template.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    showAdminMessage("📥 Template berhasil didownload!");
}

function exportCharactersToJSON() {
    const exportData = characters.map(char => {
        const traits = characterTraits[char.name] || {};
        return {
            name: char.name,
            gender: char.gender,
            img: char.img,
            desc: char.desc,
            details: char.details,
            words: char.words,
            sound: char.sound,
            traits: traits
        };
    });
    
    const jsonStr = JSON.stringify(exportData, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `characters_backup_${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    showAdminMessage(`📤 Export berhasil! ${characters.length} karakter tersimpan.`);
}

function resetToDefault() {
    if (!confirm("HAPUS SEMUA KARAKTER CUSTOM?\nKarakter default tetap aman.")) {
        return;
    }

    // Hanya hapus karakter custom dari localStorage
    localStorage.removeItem("customCharacters");
    localStorage.removeItem("customTraits");

    // Reset array characters ke default (hardcoded)
    // Anda perlu mendefinisikan ulang array characters dengan karakter default saja
    // Atau reload halaman
    location.reload();

    showAdminMessage("✅ Data karakter custom telah direset!");
}

// Fungsi untuk toggle fitur jelajahi karakter
function toggleBrowseFeature() {
    const currentStatus = getBrowseFeatureStatus();
    const newStatus = !currentStatus;

    // Simpan status ke localStorage
    localStorage.setItem('browseFeatureEnabled', newStatus);

    // Update UI
    updateBrowseFeatureUI();

    // Tampilkan pesan
    showAdminMessage(`✅ Fitur Jelajahi Karakter ${newStatus ? 'diaktifkan' : 'dinonaktifkan'}`);

    // Refresh halaman untuk menerapkan perubahan
    setTimeout(() => {
        location.reload();
    }, 1000);
}

function getBrowseFeatureStatus() {
    // Default adalah true (aktif)
    const status = localStorage.getItem('browseFeatureEnabled');
    return status !== 'false'; // Jika null atau 'true', return true
}

function updateBrowseFeatureUI() {
    const status = getBrowseFeatureStatus();
    const statusElement = document.getElementById('browseFeatureStatus');
    const toggleButton = document.querySelector('[onclick="toggleBrowseFeature()"]');

    if (statusElement) {
        statusElement.innerHTML = `Status: <strong>${status ? 'Aktif' : 'Nonaktif'}</strong>`;
    }

    if (toggleButton) {
        toggleButton.textContent = `👁️ ${status ? 'Sembunyikan' : 'Tampilkan'} Jelajahi Karakter`;
    }
}

// Panggil updateBrowseFeatureUI saat halaman dimuat
window.addEventListener('load', () => {
    updateBrowseFeatureUI();

    // Sembunyikan tombol jelajahi karakter jika fitur dinonaktifkan
    const browseButton = document.querySelector('[onclick="openBrowse()"]');
    if (browseButton) {
        browseButton.style.display = getBrowseFeatureStatus() ? '' : 'none';
    }
});