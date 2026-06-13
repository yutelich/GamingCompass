// Pokemon Unbound — Database Lengkap v2.1.1.1
// Sumber terverifikasi: unboundwiki.com (route pages), pokemonunbound.fandom.com,
// PokéPorto location guide, Scribd Official Location Guide v2.1.1.1
// Format: [nama, tipe, lokasi_akurat, efektif_vs, in_deck, rating, worth, keterangan, stage]

const POKEMON_DB = [

  // ══ STARTER ═══════════════════════════════════════════════════════════
  ["Gible → Gabite → Garchomp","Dragon/Ground","Starter (pilih di awal)","Electric, Rock, Steel, Ice, Fire","✅ Tim 1,3,4","S","WAJIB","Starter terbaik! Dragon/Ground coverage luas. Speed+Attack gila. Garchompite di Shadow Base 1F. Evolusi: Lv.24→Lv.48.","early"],
  ["Beldum → Metang → Metagross","Steel/Psychic","Starter (pilih di awal)","Rock, Ice, Fairy, Grass, Poison, Dragon","✅ Tim 2,5","A","WORTH","Sangat tangguh tapi evolusi lambat (Lv.20→Lv.45). Metagrossite di Shadow Base 1F (Level 2 Keycard) atau Mission #050.","early"],
  ["Larvitar → Pupitar → Tyranitar","Rock/Dark","Starter (pilih di awal)","Fire, Flying, Bug, Fairy, Grass, Ground","⚠️ Hard Mode","B","HARD MODE","4x lemah Grass, Gym 1 adalah Grass leader. Tyranitar akhirnya kuat tapi butuh kesabaran ekstra. Tyranitarite di Shadow Base 1F.","early"],

  // ══ ROUTE 1 ═══════════════════════════════════════════════════════════
  ["Vanillite → Vanillish → Vanilluxe","Ice","Route 1 (Tall Grass, Day & Night)","Grass, Ground, Flying, Dragon","❌ Skip","C","SKIP","Ice murni banyak kelemahan. Hanya untuk Pokedex.","early"],
  ["Snorunt → Glalie / Froslass","Ice / Ice-Ghost (Froslass)","Route 1 (Tall Grass, Day & Night)","Grass, Ground, Flying, Dragon","❌ Skip","C","SKIP","Froslass (Dawn Stone, female) cukup cepat sebagai Ghost setter. Tapi ada Ghost type jauh lebih baik.","early"],
  ["Delibird","Ice/Flying","Route 1 (Tall Grass, Night)","Grass, Ground, Fighting, Bug","❌ Skip","D","SKIP","Stat sangat rendah, tidak ada evolusi. Hanya untuk Pokedex.","early"],
  ["Minior","Rock/Flying","Route 1 (Tall Grass, Day & Night)","Flying, Bug, Steel, Fire, Water, Electric, Ice","⚠️ Situasional","A","WORTH","BST 600! Meteor Form immune status effects. Core Form sangat cepat setelah Meteor Break. Salah satu Pokemon terkuat yang bisa dapat di Route 1 — sangat sering diremehkan.","early"],

  // ══ ICICLE CAVE ════════════════════════════════════════════════════════
  ["Spheal → Sealeo → Walrein","Ice/Water","Icicle Cave (Main Area, Day & Night)","Grass, Electric, Rock, Fighting, Fire","❌ Skip","C","SKIP","Bulky tapi lambat. Ice/Water typing banyak kelemahan penting. Ada Water type lebih baik.","early"],
  ["Bergmite → Avalugg","Ice","Icicle Cave (Main Area, Rock Smash)","Fire, Fighting, Rock, Steel","❌ Skip","C","SKIP","Physical wall Ice tapi Ice murni buruk secara typing di late game.","early"],
  ["Smoochum → Jynx","Ice/Psychic","Icicle Cave (Main Area)","Fire, Bug, Rock, Ghost, Dark, Steel","❌ Skip","D","SKIP","Stat sangat rendah, banyak kelemahan. Skip.","early"],
  ["Swinub → Piloswine → Mamoswine","Ice/Ground","Icicle Cave (Main Area, Day & Night)","Grass, Dragon, Flying, Electric, Fire","❌ Skip","B","WORTH","Mamoswine Attack tinggi, Ice+Ground coverage bagus. Berguna counter Dragon dan Electric type.","early"],
  ["Makuhita → Hariyama","Fighting","Icicle Cave (Sandslash Tunnel & Main)","Normal, Ice, Rock, Steel, Dark","❌ Skip","C","SKIP","Hariyama bulky tapi lambat. Ada Fighting type jauh lebih baik seperti Lucario.","early"],
  ["Roggenrola → Boldore → Gigalith","Rock","Icicle Cave (Main Area, Rock Smash)","Water, Ice, Grass, Steel, Ground, Fighting","❌ Skip","C","SKIP","Sturdy berguna tapi lambat dan Rock type banyak kelemahan penting.","early"],
  ["Mawile → Mega Mawile","Steel/Fairy","Icicle Cave (Sandslash Tunnel)","Ice, Rock, Normal, Grass, Dragon, Dark","❌ Skip","B","WORTH","Mega Mawile Huge Power sangat kuat! Beedrillite bukan untuk ini — Mawilite tersedia. Tanpa Mega biasa.","early"],
  ["Drilbur → Excadrill","Ground/Steel","Icicle Cave (Sandslash Tunnel)","Fire, Water, Fighting","❌ Skip","B","WORTH","Sand Rush di pasir sangat cepat. Ground/Steel coverage bagus. Mold Breaker bypass ability musuh.","early"],
  ["Zubat → Golbat → Crobat","Poison/Flying","Icicle Cave (Main Area, semua cave)","Ground, Electric, Ice, Rock, Psychic","❌ Skip","C","SKIP","Crobat Speed 130 sebagai pivot. Tapi banyak kelemahan. Inner Focus berguna vs flinch.","early"],
  ["Alolan Sandshrew → Alolan Sandslash","Ice/Steel","Icicle Cave Hidden Valley (hanya setelah Mission #067: The Food Thief)","Fire, Fighting, Ground, Water","❌ Skip","B","WORTH","Ice/Steel typing unik dengan banyak resistansi. Hidden Valley ini juga EV Defense farming spot terbaik. Unlock via misi!","mid2"],
  ["Sealeo → Walrein","Ice/Water","Icicle Cave (Ice Puzzle Section)","Grass, Electric, Rock, Fighting, Fire","❌ Skip","C","SKIP","Lihat Spheal.","early"],
  ["Avalugg","Ice","Icicle Cave (Ice Puzzle Section)","Fire, Fighting, Rock, Steel","❌ Skip","C","SKIP","Lihat Bergmite.","early"],
  ["Jynx","Ice/Psychic","Icicle Cave (Ice Puzzle Section)","Fire, Bug, Rock, Ghost, Dark, Steel","❌ Skip","D","SKIP","Lihat Smoochum.","early"],
  ["Piloswine","Ice/Ground","Icicle Cave (Ice Puzzle Section)","Grass, Dragon, Electric, Fire","❌ Skip","B","WORTH","Lihat Swinub.","early"],
  ["Hariyama","Fighting","Icicle Cave (Sandslash Tunnel)","Normal, Ice, Rock, Steel, Dark","❌ Skip","C","SKIP","Lihat Makuhita.","early"],
  ["Golbat → Crobat","Poison/Flying","Icicle Cave (Sandslash Tunnel & Semua Cave)","Ground, Electric, Ice, Rock, Psychic","❌ Skip","C","SKIP","Lihat Zubat.","early"],
  ["Boldore → Gigalith","Rock","Icicle Cave (Ice Puzzle Section, Rock Smash)","Water, Ice, Grass, Steel, Ground, Fighting","❌ Skip","C","SKIP","Lihat Roggenrola.","early"],
  ["Magikarp → Gyarados","Water/Flying","Icicle Cave (Fishing), semua area berair","Ground, Electric, Bug, Grass","✅ Tim 2,4,5","A","WORTH","Investment terbaik! Grind ke Lv.20. Dragon Dance+Waterfall hampir tidak bisa dihentikan. Intimidate untuk team support. Gyaradosite dari Route 13 Mega Trainer.","early"],
  ["Seel → Dewgong","Water/Ice","Icicle Cave (Good Rod & Surf)","Ground, Electric, Grass, Rock, Fighting","❌ Skip","D","SKIP","Stat biasa. Hanya untuk Pokedex.","early"],
  ["Shellder → Cloyster","Water/Ice","Icicle Cave (Good Rod)","Ground, Electric, Grass, Rock, Fighting","❌ Skip","C","SKIP","Cloyster Shell Smash menarik tapi sangat fragile setelah boost.","early"],
  ["Lapras","Water/Ice","Icicle Cave (Surf, rare)","Electric, Grass, Rock, Fighting","❌ Skip","B","WORTH","Bulky Water/Ice dengan coverage luas. Shell Armor berguna. Solid tapi banyak kelemahan.","early"],

  // ══ ROUTE 2 ═══════════════════════════════════════════════════════════
  ["Riolu → Lucario","Fighting/Steel","Route 2 (Tall Grass, Day & Night)","Ice, Rock, Normal, Steel, Dark, Fairy, Dragon","✅ Tim 1,3,4","S","WAJIB TANGKAP","Tangkap SEGERA setelah Route 2! Fighting/Steel coverage premium. Close Combat+Extreme Speed kuat. Lucarionite dari Mission 'Warmonger' di Great Desert. Evolusi dari Riolu: happiness tinggi di siang hari.","early"],
  ["Patrat → Watchog","Normal","Route 2 (Tall Grass, Day)","Ghost","❌ Skip","D","SKIP","Normal biasa, stat rendah. Skip.","early"],
  ["Minccino → Cinccino","Normal","Route 2 (Tall Grass, Day & Night)","Ghost","❌ Skip","C","SKIP","Skill Link+Bullet Seed menarik tapi stat terlalu rendah untuk mid-late game.","early"],
  ["Azurill → Marill → Azumarill","Water/Fairy","Route 2 (Tall Grass, Day & Night)","Ground, Electric, Grass, Dragon, Dark, Fighting","⚠️ Situasional","B","WORTH","Azumarill Huge Power sangat kuat! Belly Drum+Aqua Jet combo mematikan. Tapi memerlukan setup.","early"],
  ["Electrike → Manectric","Electric","Route 2 (Tall Grass, Night)","Ground","❌ Skip","C","SKIP","Electric type biasa. Ada pilihan lebih baik: Rotom-Wash, Jolteon, atau Electivire.","early"],
  ["Stufful → Bewear","Normal/Fighting","Route 2 (Tall Grass, Day & Night)","Ghost, Psychic, Flying, Fairy","❌ Skip","C","SKIP","Fluffy ability berguna untuk physical tank tapi stat tidak cukup kompetitif.","early"],
  ["Inkay → Malamar","Dark/Psychic","Route 2 (Tall Grass, Night)","Bug, Fairy","❌ Skip","C","SKIP","Evolusi unik (balik device). Malamar Contrary+Superpower menarik tapi gimmicky.","early"],
  ["Scraggy → Scrafty","Dark/Fighting","Route 2 (Tall Grass, Day & Night)","Ghost, Psychic, Ice, Flying","❌ Skip","C","SKIP","Cukup tangguh dengan Moxie/Intimidate tapi lambat. Ada Dark/Fighting yang lebih baik.","early"],
  ["Pikipek → Trumbeak → Toucannon","Normal/Flying","Route 2 (Tall Grass, Day)","Electric, Ice, Rock","❌ Skip","C","SKIP","Normal/Flying biasa. Skill Link+Bullet Seed menarik tapi stat biasa.","early"],
  ["Rattata → Raticate","Normal","Route 2 (Tall Grass, Night)","Ghost","❌ Skip","D","SKIP","Normal biasa. Skip.","early"],
  ["Hoothoot → Noctowl","Normal/Flying","Route 2 (Tall Grass, Night)","Electric, Ice, Rock","❌ Skip","D","SKIP","Stat biasa. Skip.","early"],
  ["Poochyena → Mightyena","Dark","Route 2 (Tall Grass, Night, Swarm)","Fighting, Bug, Fairy","❌ Skip","D","SKIP","Intimidate berguna tapi stat rendah. Skip.","early"],
  ["Magikarp","Water","Route 2 (Old Rod)","Ground, Electric, Bug, Grass","✅ Tim 2,4,5","A","WORTH","Lihat Gyarados entry.","early"],
  ["Staryu → Starmie","Water/Psychic","Route 2 (Fishing: Good Rod & Super Rod)","Electric, Grass, Bug, Ghost, Dark","❌ Skip","B","WORTH","Sangat cepat, coverage Water+Psychic luas. Natural Cure ability. Solid offensive Water type.","early"],
  ["Shellder","Water/Ice","Route 2 (Good Rod)","Ground, Electric, Grass, Rock, Fighting","❌ Skip","C","SKIP","Cloyster Shell Smash menarik tapi fragile. Situasional.","early"],
  ["Tentacool → Tentacruel","Water/Poison","Route 2 (Surf)","Ground, Electric, Psychic","❌ Skip","C","SKIP","Tentacruel cukup cepat, tahan spesial dengan Liquid Ooze. Tapi biasa secara offensif.","early"],
  ["Pelipper","Water/Flying","Route 2 (Surf)","Electric, Rock","❌ Skip","C","SKIP","Drizzle berguna untuk rain team tapi stat biasa.","early"],
  ["Gastrodon","Water/Ground","Route 2 (Rock Smash)","Grass only!","⚠️ Situasional","B","WORTH","Hanya 1 kelemahan (Grass)! Storm Drain imun Water. Defensif solid untuk stall strategy.","early"],

  // ══ ROUTE 3 ═══════════════════════════════════════════════════════════
  ["Wingull → Pelipper","Water/Flying","Route 3 (Tall Grass, Day & Night)","Electric, Rock","❌ Skip","C","SKIP","Drizzle berguna untuk rain team tapi stat biasa.","early"],
  ["Bidoof → Bibarel","Normal/Water","Route 3 (Tall Grass, Day & Night)","Ghost, Electric, Grass","❌ Skip","D","SKIP","HM slave murni. Stat sangat buruk untuk battle apapun.","early"],
  ["Slowpoke → Slowbro / Slowking","Water/Psychic","Route 3 (Tall Grass, Day & Night)","Electric, Grass, Bug, Ghost, Dark","❌ Skip","C","SKIP","Regenerator menarik untuk stall. Slack Off recovery. Tapi Speed sangat rendah membatasi efektivitas.","early"],
  ["Buizel → Floatzel","Water","Route 3 (Tall Grass, Day & Night)","Ground, Electric, Grass","❌ Skip","C","SKIP","Floatzel cukup cepat tapi Water murni terlalu biasa.","early"],
  ["Shellos (Pink) → Gastrodon","Water/Ground","Route 3 (Tall Grass, Day & Night)","Grass only!","⚠️ Situasional","B","WORTH","Hanya 1 kelemahan! Sama seperti Gastrodon di Route 2. Storm Drain solid.","early"],
  ["Dewpider → Araquanid","Water/Bug","Route 3 (Tall Grass, Day & Night)","Flying, Electric, Rock","❌ Skip","C","SKIP","Water Bubble menarik tapi lambat dan typing lemah.","early"],
  ["Surskit → Masquerain","Bug/Water → Bug/Flying","Route 3 (Tall Grass, Night)","Electric, Ice, Rock, Fire, Flying","❌ Skip","D","SKIP","Stat sangat rendah. Skip.","early"],
  ["Sandygast → Palossand","Ghost/Ground","Route 3 (Sand Castle, specific days only)","Water, Grass, Ice, Ghost, Dark","❌ Skip","C","SKIP","Ghost/Ground typing menarik tapi stat biasa dan sangat langka (specific days saja).","early"],
  ["Burmy → Wormadam / Mothim","Bug → Bug/Grass, Bug/Ground, atau Bug/Steel (Wormadam) / Bug/Flying (Mothim)","Route 3 (Tall Grass, Swarm)","berbeda per form","❌ Skip","D","SKIP","Stat sangat rendah semua form. Skip.","early"],
  ["Magikarp","Water","Route 3 (Old Rod)","Ground, Electric, Bug, Grass","✅ Tim 2,4,5","A","WORTH","Lihat Gyarados.","early"],
  ["Shellder → Cloyster","Water/Ice","Route 3 (Good Rod)","Ground, Electric, Grass, Rock, Fighting","❌ Skip","C","SKIP","Shell Smash menarik tapi sangat fragile.","early"],
  ["Krabby → Kingler","Water","Route 3 (Good Rod & Super Rod)","Ground, Electric, Grass","❌ Skip","C","SKIP","Hyper Cutter menarik tapi stat biasa. Hanya untuk Pokedex.","early"],

  // ══ FLOWER PARADISE ════════════════════════════════════════════════════
  ["Flabébé → Floette → Florges (5 warna)","Fairy","Flower Paradise (berbeda per flower color)","Poison, Steel","❌ Skip","C","SKIP","Florges Sp.Def sangat tinggi. Berguna sebagai Fairy wall tapi Speed rendah dan satu-type.","early"],
  ["Cutiefly → Ribombee","Bug/Fairy","Flower Paradise (semua area, Day & Night)","Fire, Flying, Rock, Steel, Poison","❌ Skip","C","SKIP","Quiver Dance menarik tapi sangat fragile.","early"],
  ["Combee → Vespiquen","Bug/Flying","Flower Paradise (semua area, Day & Night)","Electric, Ice, Rock, Fire, Flying","❌ Skip","C","SKIP","Pressure menarik tapi butuh female Combee (rate rendah). Stat biasa.","early"],
  ["Cherubi → Cherrim","Grass","Flower Paradise (Swarm, semua area)","Fire, Ice, Flying, Poison, Bug","❌ Skip","D","SKIP","Stat rendah. Skip.","early"],
  ["Oricorio (Pom-Pom)","Electric/Flying","Flower Paradise (Yellow Flowers)","Ground, Ice, Rock","❌ Skip","C","SKIP","Dancer ability menarik tapi stat biasa.","early"],
  ["Oricorio (Sensu)","Ghost/Flying","Flower Paradise (Purple Flowers)","Electric, Ice, Rock, Ghost, Dark","❌ Skip","C","SKIP","Ghost/Flying typing menarik tapi stat biasa.","early"],
  ["Oricorio (Baile)","Fire/Flying","Flower Paradise (Red Flowers)","Water, Electric, Rock","❌ Skip","C","SKIP","Dancer menarik tapi stat biasa.","early"],
  ["Oricorio (Pa'u)","Psychic/Flying","Flower Paradise (Pink Flowers)","Electric, Ice, Rock, Ghost, Dark","❌ Skip","C","SKIP","Stat biasa. Skip.","early"],
  ["Comfey","Fairy","Flower Paradise (Purple, Red, Pink)","Poison, Steel","❌ Skip","C","SKIP","Triage+Draining Kiss menarik untuk stall tapi stat sangat rendah.","early"],
  ["Pansage / Pansear / Panpour","Grass / Fire / Water","Flower Paradise (masing-masing warna)","berbeda per tipe","❌ Skip","D","SKIP","Stat rendah, banyak kelemahan. Hanya untuk Pokedex.","early"],

  // ══ GRIM WOODS ════════════════════════════════════════════════════════
  ["Caterpie → Metapod → Butterfree","Bug/Flying","Grim Woods (Tall Grass, Day)","Electric, Ice, Rock, Fire, Flying","❌ Skip","D","SKIP","Compound Eyes+Sleep Powder situasional tapi stat terlalu rendah.","mid1"],
  ["Weedle → Kakuna → Beedrill","Bug/Poison","Grim Woods (Tall Grass, Night)","Fire, Flying, Rock, Psychic","❌ Skip","C","SKIP","Mega Beedrill (Beedrillite) sangat cepat dan kuat! Tanpa Mega sangat lemah. Worth hanya jika punya Mega.","mid1"],
  ["Seedot → Nuzleaf → Shiftry","Grass/Dark","Grim Woods (Tall Grass, Day)","Fire, Ice, Fighting, Flying, Bug, Fairy, Poison","❌ Skip","C","SKIP","Chlorophyll+Nasty Plot menarik di sun team tapi biasa tanpa setup.","mid1"],
  ["Gastly → Haunter → Gengar","Ghost/Poison","Grim Woods (Tall Grass, Day & Night)","Ground, Ghost, Normal, Fighting, Bug, Grass, Fairy","✅ Tim 1,4,5","A","WORTH","Special attacker terbaik! Shadow Ball+Sludge Bomb+Thunderbolt+Destiny Bond. Butuh trade untuk Gengar atau pakai cheat Wild Pokemon Encounter. Gengarite di Victory Road (snowy area).","mid1"],
  ["Duskull → Dusclops → Dusknoir","Ghost","Grim Woods (Tall Grass, Night)","Ghost, Dark","❌ Skip","C","SKIP","Eviolite Dusclops untuk Trick Room support tapi sangat lambat.","mid1"],
  ["Shuppet → Banette","Ghost","Grim Woods (Tall Grass, Night)","Ghost, Dark","❌ Skip","C","SKIP","Mega Banette Prankster menarik tapi stat biasa tanpa Mega. Banettite tersedia.","mid1"],
  ["Pumpkaboo → Gourgeist","Ghost/Grass","Grim Woods (Tall Grass, Day & Night)","Fire, Ice, Flying, Dark, Ghost","❌ Skip","C","SKIP","Frisk menarik tapi stat biasa. Hanya untuk Pokedex.","mid1"],
  ["Phantump → Trevenant","Ghost/Grass","Grim Woods (Tall Grass, Night)","Fire, Ice, Flying, Dark, Ghost","❌ Skip","C","SKIP","Natural Cure berguna tapi stat biasa.","mid1"],
  ["Spiritomb","Ghost/Dark","Grim Woods (misi khusus, statik)","Fairy ONLY!","❌ Skip","B","UNIK","NOL kelemahan kecuali Fairy! Trigger conversation unik di Grim Woods. Bagus untuk stall dan lore. Sulit didapat karena butuh misi.","mid1"],
  ["Psyduck → Golduck","Water/Psychic","Grim Woods (Surf)","Electric, Grass, Bug, Ghost, Dark","❌ Skip","C","SKIP","Golduck cukup serbaguna dengan Cloud Nine tapi ada Water type lebih baik.","mid1"],
  ["Surskit → Masquerain","Bug/Flying","Grim Woods (Surf, rare)","Electric, Ice, Rock, Fire","❌ Skip","D","SKIP","Stat rendah. Skip.","mid1"],
  ["Barboach → Whiscash","Water/Ground","Grim Woods (Fishing)","Grass ONLY!","⚠️ Situasional","B","WORTH","Whiscash hanya 1 kelemahan (Grass)! Oblivious imun attraction & Taunt. Solid defensive pivot.","mid1"],

  // ══ ROUTE 4 ═══════════════════════════════════════════════════════════
  ["Starly → Staravia → Staraptor","Normal/Flying","Route 4 (Tall Grass, Day)","Electric, Ice, Rock","❌ Skip","B","WORTH","Staraptor Reckless+Brave Bird sangat kuat! Intimidate berguna. Sangat cepat dengan coverage bagus.","mid1"],
  ["Mankey → Primeape","Fighting","Route 4 (Tall Grass, Day & Night)","Psychic, Flying, Fairy","❌ Skip","C","SKIP","Cukup cepat tapi stat biasa. Ada Fighting type lebih baik: Lucario, Gallade.","mid1"],
  ["Ekans → Arbok","Poison","Route 4 (Tall Grass, Day & Night)","Grass, Fairy, Bug","❌ Skip","D","SKIP","Stat biasa. Skip.","mid1"],
  ["Ralts → Kirlia → Gardevoir","Psychic/Fairy","Route 4 (Tall Grass, Day & Night)","Fighting, Dragon, Dark, Poison, Steel","✅ Tim 2,3","S","WAJIB TANGKAP","Sangat kuat! Moonblast+Calm Mind+Psychic coverage luas. Gardevoirite di Vivill Town Warehouse (cari dengan Dowsing Machine). Juga ideal untuk Synchronize nature farming.","mid1"],
  ["Ralts → Kirlia → Gallade","Psychic/Fighting","Route 4 (male Ralts, evolve Kirlia dgn Dawn Stone)","Normal, Ice, Rock, Steel, Dark, Dragon","⚠️ Situasional","A","WORTH","Physical alternative Gardevoir. Close Combat+Psycho Cut+Shadow Sneak solid. Galladite di Antisis City Port.","mid1"],
  ["Cherubi → Cherrim","Grass","Route 4 (Tall Grass, Swarm)","Fire, Ice, Flying, Poison, Bug","❌ Skip","D","SKIP","Stat rendah. Skip.","mid1"],
  ["Yanma → Yanmega","Bug/Flying","Route 4 (Tall Grass, Swarm)","Electric, Ice, Rock, Fire, Flying","❌ Skip","C","SKIP","Speed Boost menarik tapi fragile dan banyak kelemahan.","mid1"],
  ["Kricketot → Kricketune","Bug","Route 4 (Tall Grass, Night)","Fire, Flying, Rock","❌ Skip","D","SKIP","Stat sangat rendah. Skip.","mid1"],
  ["Drowzee → Hypno","Psychic","Route 4 (Tall Grass, Night)","Fighting, Bug, Ghost, Dark","❌ Skip","D","SKIP","Stat biasa. Ada Psychic type jauh lebih baik.","mid1"],
  ["Houndour → Houndoom","Dark/Fire","Route 4 (Tall Grass, Night)","Water, Ground, Rock, Fighting, Bug","❌ Skip","B","WORTH","Mega Houndoom Sp.Attack tinggi! Flash Fire berguna. Houndoominite tersedia. Tanpa Mega cukup solid juga.","mid1"],
  ["Tentacool → Tentacruel","Water/Poison","Route 4 (Surf)","Ground, Electric, Psychic","❌ Skip","C","SKIP","Tentacruel cukup solid tapi biasa.","mid1"],
  ["Magikarp","Water","Route 4 (Old Rod)","Ground, Electric, Bug, Grass","✅ Tim 2,4,5","A","WORTH","Lihat Gyarados.","mid1"],

  // ══ CINDER VOLCANO ═════════════════════════════════════════════════════
  ["Growlithe → Arcanine","Fire","Route 3 (Day & Night), Route 5 (Day)","Grass, Ice, Bug, Steel, Fairy","✅ Tim 2,3","A","WAJIB AWAL","Fire coverage vital untuk Gym 1 (Grass) dan Gym 8 (Bug). Extreme Speed priority move sangat berguna. Sangat cepat. Evolusi via Fire Stone.","early"],
  ["Vulpix → Ninetales","Fire","Cinder Volcano (Swarm only)","Grass, Ice, Bug, Steel","❌ Skip","C","SKIP","Drought menarik untuk sun team tapi biasa tanpa setup.","mid1"],
  ["Alolan Vulpix → Alolan Ninetales","Ice/Fairy","Mission #043: Ninetales of Snow (reward egg)","Ground, Steel, Fire, Poison","❌ Skip","B","WORTH","Snow Warning+Blizzard menarik. Ice/Fairy typing solid dengan Fairy coverage penting.","mid1"],
  ["Numel → Camerupt","Fire/Ground","Cinder Volcano (Tall Grass, Day & Night)","Water, Ground, Grass","❌ Skip","B","WORTH","Mega Camerupt sangat berguna vs Gym 5 Galavan (Steel)! Cameruptite dari Elder di Cinder Volcano. Tanpa Mega biasa saja.","mid1"],
  ["Litwick → Lampent → Chandelure","Ghost/Fire","Cinder Volcano (Tall Grass, Night)","Water, Ground, Ghost, Dark, Rock","❌ Skip","B","WORTH","Chandelure Sp.Attack salah satu tertinggi! Shadow Ball+Flamethrower+Energy Ball sangat powerful. Tapi defensive stat sangat rendah.","mid1"],
  ["Torkoal","Fire","Cinder Volcano (Tall Grass, Day)","Water, Ground, Rock","❌ Skip","C","SKIP","Drought+Stealth Rock menarik untuk sun team tapi sangat lambat.","mid1"],
  ["Salandit → Salazzle","Poison/Fire","Cinder Volcano (Tall Grass, Night, female only)","Water, Ground, Rock, Psychic","❌ Skip","C","SKIP","Corrosion+Toxic menarik tapi fragile. Membutuhkan female Salandit (langka).","mid1"],
  ["Slugma → Magcargo","Fire/Rock","Cinder Volcano (Tall Grass, Day)","Water, Ground, Rock, Fighting","❌ Skip","D","SKIP","Sangat lambat dan lemah. Skip.","mid1"],

  // ══ ROUTE 5 ═══════════════════════════════════════════════════════════
  ["Nidoran♀ → Nidorina → Nidoqueen","Poison/Ground","Route 5 (Tall Grass, Day & Night)","Grass, Fairy, Bug, Electric, Fighting, Rock","❌ Skip","B","WORTH","Nidoqueen Poison/Ground coverage. Moon Stone evolusi. Sheer Force menarik.","early"],
  ["Nidoran♂ → Nidorino → Nidoking","Poison/Ground","Route 5 (Tall Grass, Day & Night)","Grass, Fairy, Bug, Electric, Fighting, Rock","❌ Skip","B","WORTH","Nidoking Sheer Force+Life Orb menarik. Moon Stone evolusi. Lebih offensive dari Nidoqueen.","early"],
  ["Sentret → Furret","Normal","Route 5 (Tall Grass, Day)","Ghost","❌ Skip","D","SKIP","Normal biasa. Skip.","early"],
  ["Ledyba → Ledian","Bug/Flying","Route 5 (Tall Grass, Day)","Electric, Ice, Rock, Fire, Flying","❌ Skip","D","SKIP","Stat sangat rendah. Skip.","early"],
  ["Spinarak → Ariados","Bug/Poison","Route 5 (Tall Grass, Night)","Fire, Flying, Rock, Psychic","❌ Skip","D","SKIP","Stat rendah. Skip.","early"],
  ["Hoppip → Skiploom → Jumpluff","Grass/Flying","Route 5 (Tall Grass, Day)","Fire, Ice, Flying, Poison, Rock, Electric, Bug","❌ Skip","D","SKIP","Terlalu banyak kelemahan, stat rendah. Skip.","early"],
  ["Sunkern → Sunflora","Grass","Route 5 (Tall Grass, Day)","Fire, Ice, Flying, Poison, Bug","❌ Skip","D","SKIP","Sunflora stat sangat buruk. Skip.","early"],
  ["Girafarig","Normal/Psychic","Route 5 (Tall Grass, Day & Night)","Bug, Dark","❌ Skip","C","SKIP","Typing menarik tapi stat biasa.","early"],

  // ══ VALLEY CAVE ═══════════════════════════════════════════════════════
  ["Zubat → Golbat → Crobat","Poison/Flying","Valley Cave (semua floor)","Ground, Electric, Ice, Rock, Psychic","❌ Skip","C","SKIP","Crobat cepat sebagai pivot. Tapi banyak kelemahan penting.","mid1"],
  ["Machop → Machoke → Machamp","Fighting","Valley Cave (1F)","Psychic, Flying, Fairy","❌ Skip","B","WORTH","Machamp No Guard+Dynamic Punch selalu kena! Guts sangat kuat. Butuh trade untuk Machamp. Tapi Lucario lebih mudah dapat.","mid1"],
  ["Geodude → Graveler → Golem","Rock/Ground","Valley Cave (Rock Smash)","Water, Ice, Grass, Steel, Ground, Fighting","❌ Skip","C","SKIP","Sturdy berguna tapi lambat dan banyak kelemahan penting.","mid1"],

  // ══ ROUTE 6 ═══════════════════════════════════════════════════════════
  // Data verifikasi: unboundwiki.com/locations/route-6/
  ["Bunnelby → Diggersby","Normal/Ground","Route 6 (Tall Grass, Day & Night) — 30%!","Ghost, Water, Ice, Grass","❌ Skip","C","SKIP","Huge Power Diggersby menarik tapi typing biasa. Mudah dapat tapi tidak worth untuk tim utama.","mid1"],
  ["Deerling (Spring) → Sawsbuck","Normal/Grass","Route 6 (Tall Grass, Day & Night)","Fire, Ice, Flying, Fighting, Poison, Bug","❌ Skip","C","SKIP","Sap Sipper imun Grass. Cukup cepat tapi typing biasa.","mid1"],
  ["Shinx → Luxio → Luxray","Electric","Route 6 (Tall Grass, Day & Night)","Ground","❌ Skip","B","WORTH","Guts+Wild Charge menarik. Intimidate berguna. Cukup solid sebagai Electric type mid-game.","mid1"],
  ["Sunkern → Sunflora","Grass","Route 6 (Tall Grass, Day)","Fire, Ice, Flying, Poison, Bug","❌ Skip","D","SKIP","Stat rendah. Skip.","mid1"],
  ["Ledyba → Ledian","Bug/Flying","Route 6 (Tall Grass, Day)","Electric, Ice, Rock, Fire, Flying","❌ Skip","D","SKIP","Stat rendah. Skip.","mid1"],
  ["Kricketot → Kricketune","Bug","Route 6 (Tall Grass, Night)","Fire, Flying, Rock","❌ Skip","D","SKIP","Stat rendah. Skip.","mid1"],
  ["Spinarak → Ariados","Bug/Poison","Route 6 (Tall Grass, Night)","Fire, Flying, Rock, Psychic","❌ Skip","D","SKIP","Stat rendah. Skip.","mid1"],
  ["Smeargle","Normal","Route 6 (Swarm — per tanggal)","Ghost","❌ Skip","C","SKIP","Hanya berguna untuk Sketch (belajar move apapun). Tidak untuk battle normal.","mid1"],
  ["Magikarp → Gyarados","Water/Flying","Route 6 (Old Rod)","Ground, Electric, Bug, Grass","✅ Tim 2,4,5","A","WORTH","Lihat Gyarados.","mid1"],
  ["Goldeen → Seaking","Water","Route 6 (Good Rod)","Electric, Grass","❌ Skip","D","SKIP","Stat biasa. Hanya untuk Pokedex.","mid1"],
  ["Remoraid → Octillery","Water","Route 6 (Good Rod)","Electric, Grass","❌ Skip","C","SKIP","Sniper menarik tapi stat biasa.","mid1"],
  ["Tentacool → Tentacruel","Water/Poison","Route 6 (Surf, 60%)","Ground, Electric, Psychic","❌ Skip","C","SKIP","Cukup solid tapi biasa.","mid1"],
  ["Mantyke → Mantine","Water/Flying","Route 6 (Surf, 5%)","Electric, Rock","❌ Skip","C","SKIP","Water Absorb menarik tapi lambat. Hanya untuk Pokedex.","mid1"],

  // ══ ROUTE 7 ═══════════════════════════════════════════════════════════
  // Data: unboundwiki.com/locations/route-7/ (Meditite, Solosis, Flaaffy, Ponyta, Swarm: Mr. Mime)
  ["Meditite → Medicham","Fighting/Psychic","Route 7 (Tall Grass, Day & Night)","Flying, Ghost, Fairy","❌ Skip","B","WORTH","Pure Power Medicham Attack efektif sangat tinggi! Hi Jump Kick+Zen Headbutt solid. Berguna sebagai Fighting type alternatif.","mid1"],
  ["Solosis → Duosion → Reuniclus","Psychic","Route 7 (Tall Grass, Day & Night)","Bug, Ghost, Dark","❌ Skip","B","WORTH","Reuniclus Magic Guard+Trick Room sangat menarik! Sp.Attack tinggi. Berguna untuk Trick Room team.","mid1"],
  ["Flaaffy → Ampharos","Electric","Route 7 (Tall Grass, Day & Night)","Ground","❌ Skip","B","WORTH","Mega Ampharos (Electric/Dragon) sangat menarik! Ampharosite tersedia. Static menarik. Tanpa Mega biasa.","mid1"],
  ["Ponyta → Rapidash","Fire","Route 7 (Tall Grass, Day & Night)","Water, Ground, Rock","❌ Skip","C","SKIP","Rapidash cukup cepat tapi ada Fire type lebih baik.","mid1"],
  ["Snubbull → Granbull","Fairy","Route 7 (Tall Grass, Day & Night)","Poison, Steel","❌ Skip","C","SKIP","Intimidate menarik tapi lambat. Ada Fairy type lebih baik.","mid1"],
  ["Stantler","Normal","Route 7 (Tall Grass, Day & Night)","Ghost","❌ Skip","D","SKIP","Stat biasa. Skip.","mid1"],
  ["Mr. Mime","Psychic/Fairy","Route 7 (Tall Grass, Swarm)","Poison, Steel, Bug, Ghost","❌ Skip","C","SKIP","Soundproof+Barrier menarik tapi stat rendah. Ada Psychic type lebih baik.","mid1"],
  ["Ditto","Normal","Route 7 (Swarm — Ditto Spot)","Fighting","❌ Skip","B","BREEDING","WAJIB untuk breeding! Bisa breed dengan hampir semua Pokemon. Tidak berguna battle tapi vital untuk nature+EV optimization.","mid1"],
  ["Abra → Kadabra → Alakazam","Psychic","Route 7 (Tall Grass, Day & Night)","Fighting, Bug, Ghost, Dark","❌ Skip","B","WORTH","Speed dan Sp.Attack sangat tinggi. Butuh trade untuk Alakazam. Ideal untuk Synchronize nature farming. Alakazamite tersedia.","mid1"],
  ["Magikarp","Water","Route 7 (Fishing)","Ground, Electric, Bug, Grass","✅ Tim 2,4,5","A","WORTH","Lihat Gyarados.","mid1"],

  // ══ FROST MOUNTAIN ═════════════════════════════════════════════════════
  ["Snover → Abomasnow","Grass/Ice","Frost Mountain (Tall Grass, Day & Night)","Fire (4x!), Fighting, Flying, Rock, Bug, Steel, Poison","❌ Skip","C","SKIP","Snow Warning untuk hail team tapi 4x lemah Fire sangat buruk untuk battle normal.","mid2"],
  ["Cubchoo → Beartic","Ice","Frost Mountain (Tall Grass, Day & Night)","Fire, Fighting, Rock, Steel","❌ Skip","C","SKIP","Cukup kuat fisik tapi lambat dan Ice murni banyak kelemahan.","mid2"],
  ["Snorunt → Glalie / Froslass","Ice / Ice-Ghost","Frost Mountain (Tall Grass, Day & Night)","Fire, Fighting, Rock, Steel / + Ghost, Dark (Froslass)","❌ Skip","C","SKIP","Froslass (Dawn Stone, female) sebagai Spikes setter cepat. Tapi ada Ghost type lebih baik.","mid2"],
  ["Teddiursa → Ursaring","Normal","Frost Mountain (Tall Grass, Day & Night)","Ghost","❌ Skip","C","SKIP","Guts+Facade menarik tapi typing Normal terlalu biasa.","mid2"],
  ["Swinub → Piloswine → Mamoswine","Ice/Ground","Frost Mountain (Tall Grass, Day & Night)","Grass, Dragon, Electric, Fire","❌ Skip","B","WORTH","Lihat entry Swinub.","mid2"],
  ["Zubat → Golbat → Crobat","Poison/Flying","Frost Mountain (semua area)","Ground, Electric, Ice, Rock, Psychic","❌ Skip","C","SKIP","Lihat Zubat.","mid2"],
  ["Elekid → Electabuzz → Electivire","Electric","Frost Mountain (Special Encounter)","Ground","❌ Skip","B","WORTH","Electivire Motor Drive menarik. Wild Charge+Ice Punch coverage. Electirizer dari Frost Mountain.","mid2"],
  ["Seel → Dewgong","Water/Ice","Frost Mountain (Good Rod & Surf)","Ground, Electric, Grass, Rock, Fighting","❌ Skip","D","SKIP","Stat biasa. Skip.","mid2"],
  ["Smeargle","Normal","Frost Mountain (Day, Special Encounter)","Ghost","❌ Skip","C","SKIP","Lihat Route 6 Smeargle.","mid2"],

  // ══ ROUTE 8 ═══════════════════════════════════════════════════════════
  // Data dari Scribd Location Guide v2.1.1.1: Snover, Cubchoo, Deerling-Winter, Snorunt, Minior
  ["Snover → Abomasnow","Grass/Ice","Route 8 (Tall Grass, Day & Night)","Fire (4x!), Fighting, Flying, Rock, Bug, Steel","❌ Skip","C","SKIP","Lihat Frost Mountain entry.","mid2"],
  ["Cubchoo → Beartic","Ice","Route 8 (Tall Grass, Day & Night)","Fire, Fighting, Rock, Steel","❌ Skip","C","SKIP","Lihat Frost Mountain entry.","mid2"],
  ["Deerling (Winter) → Sawsbuck (Winter)","Normal/Grass","Route 8 (Tall Grass, Day & Night)","Fire, Ice, Flying, Fighting, Poison, Bug","❌ Skip","C","SKIP","Sap Sipper imun Grass. Tapi typing biasa.","mid2"],
  ["Snorunt → Glalie / Froslass","Ice / Ice-Ghost","Route 8 (Tall Grass, Day & Night)","Fire, Fighting, Rock, Steel","❌ Skip","C","SKIP","Lihat entry Frost Mountain.","mid2"],
  ["Minior (Winter Shield)","Rock/Flying","Route 8 (Tall Grass, Day & Night)","Flying, Bug, Steel, Fire, Water, Electric, Ice","⚠️ Situasional","A","WORTH","BST 600! Lihat Route 1 Minior. Winter Shield form khusus Route 8.","mid2"],
  ["Furret","Normal","Route 8 (Tall Grass, Day)","Ghost","❌ Skip","D","SKIP","Stat biasa. Skip.","mid2"],

  // ══ ROUTE 9 (+ AUTL WOODS) ════════════════════════════════════════════
  // Data dari Scribd: Spearow, Lotad, Marill, Deerling, Shroomish, Meditite, Floatzel, Audino, Goomy, Slowpoke, Ditto, Snubbull, Stantler, Glameow, dll
  ["Spearow → Fearow","Normal/Flying","Route 9 (Tall Grass, Day & Night)","Electric, Ice, Rock","❌ Skip","D","SKIP","Normal/Flying biasa. Skip.","mid2"],
  ["Lotad → Lombre → Ludicolo","Water/Grass","Route 9 (Tall Grass, Day & Night)","Flying, Poison, Bug","❌ Skip","C","SKIP","Swift Swim+Rain menarik tapi biasa tanpa rain team.","mid2"],
  ["Marill → Azumarill","Water/Fairy","Route 9 (Tall Grass, Day & Night)","Ground, Electric, Grass, Dragon, Dark, Fighting","⚠️ Situasional","B","WORTH","Azumarill Huge Power+Aqua Jet sangat kuat! Belly Drum setup mematikan.","mid2"],
  ["Deerling (Autumn) → Sawsbuck","Normal/Grass","Route 9 (Tall Grass, Day & Night)","Fire, Ice, Flying, Fighting, Poison, Bug","❌ Skip","C","SKIP","Sap Sipper solid tapi typing biasa.","mid2"],
  ["Shroomish → Breloom","Grass/Fighting","Route 9 (Tall Grass, Day)","Fire, Ice, Flying, Psychic, Poison, Fairy","❌ Skip","C","SKIP","Spore+Focus Punch gimmicky menarik tapi sulit digunakan efektif secara konsisten.","mid2"],
  ["Meditite → Medicham","Fighting/Psychic","Route 9 (Tall Grass, Day & Night)","Flying, Ghost, Fairy","❌ Skip","B","WORTH","Lihat Route 7 Meditite.","mid2"],
  ["Floatzel","Water","Route 9 (Tall Grass, Day & Night)","Ground, Electric, Grass","❌ Skip","C","SKIP","Swift Swim menarik di rain tapi typing Water biasa.","mid2"],
  ["Audino → Mega Audino","Normal / Normal-Fairy (Mega)","Route 9 (Tall Grass, Day)","Ghost / +Poison, Steel (Mega)","❌ Skip","B","WORTH","TERPENTING untuk grinding! HP Trainer pakai full party Audino. EXP sangat tinggi karena Audino adalah EXP machine.","mid2"],
  ["Goomy → Sliggoo → Goodra","Dragon","Route 9 (Tall Grass, Night), Cootes Bog (rainy)","Ice, Dragon, Fairy","❌ Skip","B","WORTH","Dragon defensive terbaik. Sap Sipper imun Grass. Murni Dragon minim kelemahan selain 3 type.","mid2"],
  ["Slowpoke → Slowbro / Slowking","Water/Psychic","Route 9 (Tall Grass, Day & Night)","Electric, Grass, Bug, Ghost, Dark","❌ Skip","C","SKIP","Regenerator+Slack Off menarik untuk stall tapi Speed sangat rendah.","mid2"],
  ["Ditto","Normal","Route 9 (Swarm)","Fighting","❌ Skip","B","BREEDING","WAJIB untuk breeding! Tangkap saat Swarm. Vital untuk nature+EV optimization.","mid2"],
  ["Snubbull → Granbull","Fairy","Route 9 (Tall Grass, Swarm)","Poison, Steel","❌ Skip","C","SKIP","Intimidate menarik tapi biasa.","mid2"],
  ["Stantler","Normal","Route 9 (Tall Grass, Day)","Ghost","❌ Skip","D","SKIP","Stat biasa. Skip.","mid2"],
  ["Glameow → Purugly","Normal","Route 9 (Swarm)","Ghost","❌ Skip","D","SKIP","Lithe menarik tapi biasa.","mid2"],
  ["Karrablast → Escavalier","Bug / Bug-Steel (evolve trade with Shelmet)","Route 9 (Swarm)","Fire (4x!), Flying","❌ Skip","C","SKIP","Bug/Steel menarik tapi 4x lemah Fire dan butuh trade khusus.","mid2"],
  ["Wobbuffet","Psychic","Route 9 (Special Encounter)","Bug, Ghost, Dark","❌ Skip","C","SKIP","Shadow Tag gimmicky, tidak efektif battle normal.","mid2"],

  // ══ ROUTE 10 ══════════════════════════════════════════════════════════
  ["Spoink → Grumpig","Psychic","Route 10 (Tall Grass, Day & Night)","Bug, Ghost, Dark","❌ Skip","C","SKIP","Thick Fat berguna tapi stat biasa.","mid2"],
  ["Solosis → Reuniclus","Psychic","Route 10 (Tall Grass, Day & Night)","Bug, Ghost, Dark","❌ Skip","B","WORTH","Lihat Route 7 Solosis.","mid2"],
  ["Linoone","Normal","Route 10 (Tall Grass, Day & Night)","Ghost","❌ Skip","C","SKIP","Pickup berguna untuk farming items tapi stat biasa.","mid2"],
  ["Gastrodon","Water/Ground","Route 10 (Tall Grass, Day & Night)","Grass only!","⚠️ Situasional","B","WORTH","Lihat Gastrodon Route 2.","mid2"],
  ["Golduck","Water/Psychic","Route 10 (Tall Grass, Day & Night)","Electric, Grass, Bug, Ghost, Dark","❌ Skip","C","SKIP","Cloud Nine menarik tapi ada Water type lebih baik.","mid2"],
  ["Gulpin → Swalot","Poison","Route 10 (Tall Grass, Night)","Ground, Psychic","❌ Skip","D","SKIP","Stat rendah. Skip.","mid2"],
  ["Ponyta → Rapidash","Fire","Route 10 (Tall Grass, Day)","Water, Ground, Rock","❌ Skip","C","SKIP","Lihat Route 7 Ponyta.","mid2"],
  ["Weepinbell → Victreebel","Grass/Poison","Route 10 (Tall Grass, Day)","Fire, Ice, Flying, Psychic, Bug","❌ Skip","C","SKIP","Chlorophyll menarik di sun tapi fragile.","mid2"],
  ["Bellsprout → Weepinbell","Grass/Poison","Route 10 (Tall Grass, Night)","Fire, Ice, Flying, Psychic, Bug","❌ Skip","D","SKIP","Stat rendah. Skip.","mid2"],
  ["Togepi → Togetic → Togekiss","Fairy/Flying","Fallshore City (Egg gift setelah Chapter)","Ground, Ghost, Fighting, Bug, Dragon","✅ Semua Tim","S","WAJIB","Support terbaik! Serene Grace+Air Slash = 60% flinch rate. Thunder Wave. Roost. MVP Insane mode dan Elite Four.","mid2"],
  ["Magikarp → Gyarados","Water/Flying","Route 10 (Old Rod)","Ground, Electric, Bug, Grass","✅ Tim 2,4,5","A","WORTH","Lihat Gyarados.","mid2"],
  ["Horsea → Seadra → Kingdra","Water/Dragon","Route 10 (Good Rod & Super Rod)","Dragon, Fairy","❌ Skip","B","WORTH","Kingdra hanya 2 kelemahan! Swift Swim di rain. Draco Meteor solid. Dragon Scale untuk trade evolusi.","mid2"],

  // ══ AUBURN WATERWAY ═══════════════════════════════════════════════════
  ["Dratini → Dragonair → Dragonite","Dragon/Flying","Auburn Waterway (Surf & Super Rod)","Electric, Ice, Dragon, Rock","❌ Skip","B","WORTH","Dragonite Multi Scale menarik. Tapi grinding sangat panjang. Salamence dari Bagon lebih mudah.","mid2"],
  ["Mantine → Mega Mantine","Water/Flying","Auburn Waterway (Surf)","Electric, Rock","❌ Skip","C","SKIP","Water Absorb tapi lambat dan fragile.","mid2"],
  ["Luvdisc","Water","Auburn Waterway (Old Rod)","Electric, Grass","❌ Skip","D","SKIP","Hanya untuk farm Heart Scale. Tidak untuk battle.","mid2"],
  ["Horsea → Kingdra","Water/Dragon","Auburn Waterway (Good Rod)","Dragon, Fairy","❌ Skip","B","WORTH","Lihat Route 10 Horsea.","mid2"],
  ["Bruxish","Water/Psychic","Auburn Waterway (Special Encounter)","Electric, Grass, Bug, Ghost, Dark","❌ Skip","C","SKIP","Cukup cepat tapi stat biasa.","mid2"],
  ["Clamperl → Huntail / Gorebyss","Water","Auburn Waterway (Fishing)","Electric, Grass","❌ Skip","C","SKIP","Shell Smash menarik tapi fragile setelah boost.","mid2"],

  // ══ ROUTE 11 ══════════════════════════════════════════════════════════
  ["Swablu → Altaria","Normal/Flying → Dragon/Flying","Route 11 (Tall Grass, Day & Night)","Ice, Dragon, Fairy, Rock, Electric","❌ Skip","B","WORTH","Mega Altaria (Dragon/Fairy) sangat solid! Pixilate+Hyper Voice kuat. Altarianite tersedia.","mid2"],
  ["Rotom (6 Form)","Electric+Tipe lain","Route 11 (Abandoned Mansion, statik)","berbeda per form","⚠️ Situasional","A","WORTH","6 form! Rotom-Wash (Water/Electric) terbaik — imun Ground via Levitate. Rotom-Heat (Fire/Electric) bagus vs Ice+Steel. Rotom-Frost, Fan, Mow juga tersedia.","mid2"],
  ["Machoke","Fighting","Route 11 (Mountain area)","Psychic, Flying, Fairy","❌ Skip","B","WORTH","Lihat Machop Valley Cave. Bisa dapat Machoke langsung di Route 11 Mountain.","mid2"],
  ["Magnemite → Magneton → Magnezone","Electric/Steel","Thundercap Mountain (via Route 11)","Fire, Ground, Fighting","❌ Skip","B","WORTH","Magnet Pull untuk trap Steel type. Sturdy sangat berguna. Hanya 2 kelemahan. Magnezone via Thunder Stone near Magnetic Field.","mid2"],
  ["Fletchling → Fletchinder → Talonflame","Normal/Fire → Fire/Flying","Route 11 (Tall Grass, Day)","Water, Electric, Rock","❌ Skip","B","WORTH","Gale Wings (Original) Priority Brave Bird mematikan! Acrobatics coverage. Tapi Gale Wings diperlemah di update.","mid2"],
  ["Noctowl","Normal/Flying","Route 11 (Tall Grass, Night)","Electric, Ice, Rock","❌ Skip","D","SKIP","Stat biasa. Skip.","mid2"],
  ["Hoothoot → Noctowl","Normal/Flying","Route 11 (Tall Grass, Night)","Electric, Ice, Rock","❌ Skip","D","SKIP","Stat biasa. Skip.","mid2"],
  ["Bibarel","Normal/Water","Route 11 (Tall Grass, Day)","Ghost, Electric, Grass","❌ Skip","D","SKIP","HM slave murni. Skip.","mid2"],
  ["Tentacool → Tentacruel","Water/Poison","Route 11 (Surf)","Ground, Electric, Psychic","❌ Skip","C","SKIP","Cukup solid tapi biasa.","mid2"],

  // ══ ROUTE 12 ══════════════════════════════════════════════════════════
  // Data: Gothita (Night), Swablu, Fletchling, Marill, Exeggcute, Rockruff, Mienfoo, dll
  ["Gothita → Gothorita → Gothitelle","Psychic","Route 12 (Tall Grass, Night)","Bug, Ghost, Dark","❌ Skip","C","SKIP","Frisk menarik tapi stat biasa. Shadow Tag dari Gothorita berguna untuk trapping.","mid2"],
  ["Swablu → Altaria","Normal/Flying → Dragon/Flying","Route 12 (Tall Grass, Day)","Ice, Dragon, Fairy, Rock, Electric","❌ Skip","B","WORTH","Lihat Route 11 Swablu.","mid2"],
  ["Fletchling → Talonflame","Normal/Fire → Fire/Flying","Route 12 (Tall Grass, Day)","Water, Electric, Rock","❌ Skip","B","WORTH","Lihat Route 11 Fletchling.","mid2"],
  ["Marill → Azumarill","Water/Fairy","Route 12 (Tall Grass, Day & Night)","Ground, Electric, Grass, Dragon, Dark, Fighting","⚠️ Situasional","B","WORTH","Lihat Route 9 Marill.","mid2"],
  ["Exeggcute → Exeggutor","Grass/Psychic → Grass/Psychic atau Dragon/Grass (Alolan)","Route 12 (Tall Grass, Night)","Fire, Ice, Flying, Poison, Bug, Ghost, Dark","❌ Skip","C","SKIP","Alolan Exeggutor Dragon/Grass menarik dengan 12 resistansi tapi sangat lambat.","mid2"],
  ["Rockruff → Lycanroc","Rock","Route 12 (Tall Grass, Day & Night)","Water, Grass, Steel, Ground, Fighting","❌ Skip","B","WORTH","Lycanroc Midnight Form Tough Claws+Stone Edge kuat! Cukup cepat.","mid2"],
  ["Mienfoo → Mienshao","Fighting","Route 12 (Tall Grass, Day & Night)","Psychic, Flying, Fairy","❌ Skip","B","WORTH","Regenerator+U-Turn pivot sangat bagus. High Jump Kick kuat. Cepat dan fleksibel.","mid2"],
  ["Heracross","Bug/Fighting","Route 12 (Headbutt Trees, Day & Night)","Fire, Flying, Psychic, Fairy","⚠️ Situasional","B","WORTH","Moxie+Close Combat sweeper kuat! Guts+Facade juga menarik vs status. Heracronite dari James (parting gift, story).","mid2"],
  ["Scyther → Scizor","Bug/Steel","Route 12 (Headbutt Trees), Great Desert","Fire (4x!)","✅ Tim 4","A","WORTH","Scizor Bug/Steel banyak resistansi. Bullet Punch priority sangat berguna. Scizorite dari Ace Trainer Great Desert (butuh Rock Climb).","mid2"],
  ["Pineco → Forretress","Bug/Steel","Route 12 (Headbutt Trees)","Fire (4x!)","❌ Skip","C","SKIP","Sturdy+Spikes+Stealth Rock setter berguna tapi 4x lemah Fire sangat buruk.","mid2"],
  ["Pinsir → Mega Pinsir","Bug","Route 12 (Headbutt Trees, Night)","Fire, Flying, Rock","❌ Skip","B","WORTH","Mega Pinsir Aerilate+Return sangat kuat! Pinsirite di Route 12 (hidden). Tanpa Mega biasa.","mid2"],
  ["Gligar → Gliscor","Ground/Flying","Route 12 (Tall Grass, Day)","Water, Ice","❌ Skip","B","WORTH","Gliscor Poison Heal+Protect stall sangat efektif! Ground/Flying imun Electric dan Ground. Butuh Razor Fang malam hari evolusi.","mid2"],
  ["Togedemaru","Electric/Steel","Route 12 (Tall Grass, Day & Night)","Ground, Fire, Fighting","❌ Skip","C","SKIP","Lightning Rod menarik tapi stat biasa.","mid2"],

  // ══ GREAT DESERT ══════════════════════════════════════════════════════
  ["Sandshrew → Sandslash","Ground","Great Desert (Sand area, Day & Night)","Water, Ice, Grass","❌ Skip","C","SKIP","Sand Rush di pasir menarik tapi typing Ground biasa.","mid2"],
  ["Hippopotas → Hippowdon","Ground","Great Desert (Sand area, Day & Night)","Water, Ice, Grass","❌ Skip","B","WORTH","Sand Stream+Slack Off wall sangat solid. Sangat bulky defensive.","mid2"],
  ["Sandile → Krokorok → Krookodile","Ground/Dark","Great Desert (Sand area, Day & Night)","Water, Ice, Grass, Bug, Fighting, Fairy","⚠️ Situasional","B","WORTH","Moxie+Earthquake+Crunch sweeper situasional bagus! Intimidate berguna. Solid mid-late game.","mid2"],
  ["Silicobra → Sandaconda","Ground","Great Desert (Sand area, Day)","Water, Ice, Grass","❌ Skip","C","SKIP","Sand Spit berguna tapi stat biasa. Ada Ground type lebih baik.","mid2"],
  ["Trapinch → Vibrava → Flygon","Ground/Dragon","Great Desert (Sand area, Night)","Ice, Dragon, Bug, Fairy","❌ Skip","B","WORTH","Flygon Ground/Dragon unik. Alternatif tanpa Gible starter. Lebih mudah dapat tapi stat lebih rendah dari Garchomp.","mid2"],
  ["Cacnea → Cacturne","Grass/Dark","Great Desert (Sand area, Night)","Fire, Ice, Flying, Bug, Fighting, Fairy, Poison","❌ Skip","D","SKIP","Terlalu banyak kelemahan. Skip.","mid2"],
  ["Yamask → Cofagrigus","Ghost","Great Desert (Tomb of Borrius, Day & Night)","Ghost, Dark","❌ Skip","C","SKIP","Mummy ability menarik untuk Trick Room tapi sangat lambat.","mid2"],
  ["Sigilyph","Psychic/Flying","Great Desert (Day)","Electric, Ice, Rock, Ghost, Dark","❌ Skip","C","SKIP","Magic Guard+Cosmic Power stall menarik tapi stat biasa.","mid2"],
  ["Darumaka → Darmanitan","Fire","Great Desert (Day)","Water, Ground, Rock","❌ Skip","B","WORTH","Darmanitan Sheer Force+Flare Blitz sangat kuat! Zen Mode (Fire/Psychic) gimmick menarik. Berguna untuk late game sweeper.","mid2"],
  ["Bouffalant","Normal","Great Desert (Day & Night)","Ghost","❌ Skip","C","SKIP","Sap Sipper+Head Charge menarik tapi lambat.","mid2"],
  ["Mienfoo → Mienshao","Fighting","Great Desert (Day)","Psychic, Flying, Fairy","❌ Skip","B","WORTH","Lihat Route 12 Mienfoo.","mid2"],
  ["Hawlucha","Fighting/Flying","Route 13 area, Great Desert adjacent","Electric, Ice, Rock, Psychic, Fairy","❌ Skip","B","WORTH","Unburden+Acrobatics+High Jump Kick mematikan setelah item digunakan! Sangat unik.","mid2"],
  ["Scizor (via Scyther trade)","Bug/Steel","Great Desert (Scizorite dari Ace Trainer)","Fire (4x!)","✅ Tim 4","A","WORTH","Scizorite dari Ace Trainer butuh Rock Climb. Lihat Route 12 Scyther.","mid2"],

  // ══ ROUTE 13 ══════════════════════════════════════════════════════════
  ["Bagon → Shelgon → Salamence","Dragon/Flying","Route 13 (Tall Grass, Special Encounter)","Electric, Ice, Dragon, Rock","❌ Skip","B","WORTH","Lebih mudah dari Dragonite. Intimidate berguna. Salamencite tersedia.","mid2"],
  ["Jangmo-o → Hakamo-o → Kommo-o","Dragon/Fighting","Route 13 area","Ice, Dragon, Fairy, Psychic, Flying","❌ Skip","B","WORTH","Clanging Scales menarik. Dragon/Fighting coverage bagus tapi banyak kelemahan.","mid2"],

  // ══ ROUTE 14 ══════════════════════════════════════════════════════════
  ["Sneasel → Weavile","Dark/Ice","Route 14 (Tall Grass, Night)","Fighting, Bug, Fire, Fairy","✅ Tim 1,4","A","WORTH","Speed 125, salah satu tercepat! Ice Punch+Night Slash coverage luar biasa. Razor Claw evolusi (Battle Frontier atau 10% drop Sneasel malam).","mid2"],
  ["Weepinbell → Victreebel","Grass/Poison","Route 14 (Tall Grass, Day)","Fire, Ice, Flying, Psychic, Bug","❌ Skip","C","SKIP","Chlorophyll menarik tapi fragile dan banyak kelemahan.","mid2"],
  ["Noibat → Noivern","Flying/Dragon","Route 14 (Tall Grass, Night)","Electric, Ice, Dragon, Fairy, Rock","❌ Skip","B","WORTH","Noivern sangat cepat (Speed 123)! Infiltrator+Boomburst coverage luas. Worth untuk late game attacker.","late"],
  ["Helioptile → Heliolisk","Electric/Normal","Route 14 (Tall Grass, Day)","Ground, Fighting","❌ Skip","C","SKIP","Dry Skin menarik tapi stat biasa.","mid2"],

  // ══ VIVILL WOODS ══════════════════════════════════════════════════════
  ["Caterpie → Butterfree","Bug/Flying","Vivill Woods (Tall Grass, Day)","Electric, Ice, Rock, Fire","❌ Skip","D","SKIP","Compound Eyes+Sleep Powder situasional tapi stat terlalu rendah.","mid2"],
  ["Weedle → Beedrill","Bug/Poison","Vivill Woods (Tall Grass, Night)","Fire, Flying, Rock, Psychic","❌ Skip","C","SKIP","Mega Beedrill (Beedrillite) sangat cepat! Tanpa Mega sangat lemah.","mid2"],
  ["Pikachu → Raichu","Electric","Vivill Woods (Swarm)","Ground","❌ Skip","C","SKIP","Alolan Raichu (Electric/Psychic) cukup menarik tapi ada Electric type lebih baik.","mid2"],
  ["Oddish → Gloom → Vileplume / Bellossom","Grass/Poison → Grass/Poison atau Grass","Vivill Woods (Tall Grass, Night)","Fire, Ice, Flying, Psychic, Bug","❌ Skip","C","SKIP","Chlorophyll menarik tapi fragile.","mid2"],
  ["Misdreavus → Mismagius","Ghost","Vivill Woods, Route 11 area","Ghost, Dark","❌ Skip","B","WORTH","Nasty Plot+Shadow Ball+Power Gem menarik. Cukup cepat untuk special Ghost attacker.","mid2"],

  // ══ ROUTE 15 ══════════════════════════════════════════════════════════
  ["Aron → Lairon → Aggron","Steel/Rock","Route 15 (Frozen Heights, Tall Grass Day & Night)","Fire, Water, Fighting, Ground","✅ Tim 2,5","A","WORTH","Sturdy = tidak bisa di-OHKO dari semua HP! Physical wall sangat solid. Berguna di Insane mode. Aggronite di Lost Tunnel.","late"],
  ["Swinub → Mamoswine","Ice/Ground","Route 15 (Tall Grass, Day & Night)","Grass, Dragon, Electric, Fire","❌ Skip","B","WORTH","Lihat Swinub entry.","late"],
  ["Drilbur → Excadrill","Ground/Steel","Route 15 (Tall Grass, Day & Night)","Fire, Water, Fighting","❌ Skip","B","WORTH","Lihat Icicle Cave Drilbur.","late"],

  // ══ ROUTE 16 ══════════════════════════════════════════════════════════
  ["Pancham → Pangoro","Fighting/Dark","Route 16 (Tall Grass, Day)","Fairy, Flying, Psychic","❌ Skip","B","WORTH","Iron Fist+Hammer Arm+Parting Shot berguna. Pangoro cukup kuat secara fisik.","late"],
  ["Pawniard → Bisharp","Dark/Steel","Route 16 (Tall Grass, Night)","Fire, Fighting (4x!), Ground","❌ Skip","B","WORTH","Defiant+Swords Dance mematikan! Sucker Punch priority+Iron Head solid. Tapi 4x lemah Fighting.","late"],
  ["Skuntank","Poison/Dark","Route 16 (Tall Grass, Day)","Ground","❌ Skip","C","SKIP","Aftermath menarik tapi stat biasa.","late"],
  ["Nincada → Ninjask / Shedinja","Bug/Ground → Bug/Flying / Bug/Ghost","Route 16 (Swarm, Day)","Fire, Flying, Ice, Electric / Fire, Flying, Rock, Ghost, Dark","⚠️ Situasional","B","WORTH","Shedinja (Wonder Guard) imun semua kecuali 5 type! Sangat fragile tapi bisa lock lawan tanpa coverage tersebut.","late"],
  ["Chatot","Normal/Flying","Route 16 (Tall Grass, Day)","Electric, Ice, Rock","❌ Skip","D","SKIP","Chatter menarik tapi stat biasa. Skip.","late"],
  ["Tropius","Grass/Flying","Route 16 (Tall Grass, Day)","Ice (4x!), Fire, Flying, Poison, Rock, Electric, Bug","❌ Skip","D","SKIP","4x lemah Ice. Skip.","late"],

  // ══ ROUTE 17 ══════════════════════════════════════════════════════════
  ["Pidgeotto → Pidgeot","Normal/Flying","Route 17 (Tall Grass, Day)","Electric, Ice, Rock","❌ Skip","C","SKIP","No Guard+Hurricane menarik tapi stat biasa.","late"],
  ["Girafarig","Normal/Psychic","Route 17 (Tall Grass, Day)","Bug, Dark","❌ Skip","C","SKIP","Typing menarik tapi stat biasa.","late"],
  ["Noctowl","Normal/Flying","Route 17 (Tall Grass, Night)","Electric, Ice, Rock","❌ Skip","D","SKIP","Stat biasa. Skip.","late"],
  ["Zangoose","Normal","Route 17 (Tall Grass, Day)","Ghost","❌ Skip","C","SKIP","Toxic Boost menarik tapi typing Normal biasa.","late"],
  ["Seviper","Poison","Route 17 (Tall Grass, Night)","Ground, Psychic","❌ Skip","C","SKIP","Sheer Force menarik tapi stat biasa.","late"],
  ["Sableye → Mega Sableye","Dark/Ghost","Route 17 (Tall Grass, Night)","Fairy (kecuali Mega: TIDAK ADA!)","❌ Skip","B","WORTH","Mega Sableye nol kelemahan! Magic Bounce memantulkan status+hazards. Ideal untuk stall team.","late"],
  ["Sudowoodo","Rock","Route 17 (Special Encounter)","Water, Grass, Steel, Ground, Fighting","❌ Skip","C","SKIP","Sturdy berguna tapi lambat dan Rock type banyak kelemahan.","late"],

  // ══ ROUTE 18 ══════════════════════════════════════════════════════════
  ["Skiploom → Jumpluff","Grass/Flying","Route 18 (Tall Grass, Day)","Fire, Ice, Flying, Poison, Rock, Electric, Bug","❌ Skip","D","SKIP","Terlalu banyak kelemahan. Skip.","late"],
  ["Farfetch'd","Normal/Flying","Route 18 (Tall Grass, Day)","Electric, Ice, Rock","❌ Skip","D","SKIP","Stat rendah. Skip.","late"],
  ["Happiny → Chansey → Blissey","Normal","Route 18 (Special Encounter), Route 9 (rare)","Fighting","✅ Tim 5 (Insane)","B","WORTH","HP wall terbesar! Di Insane mode (no items in battle) Blissey vital untuk stall. Natural Cure. Eviolite Chansey lebih berguna dari Blissey tanpa item.","late"],

  // ══ COOTES BOG ════════════════════════════════════════════════════════
  ["Wooper → Quagsire","Water/Ground","Cootes Bog (Tall Grass & Surf)","Grass ONLY!","⚠️ Situasional","B","WORTH","Water Absorb imun Water+Unaware mengabaikan stat boost musuh! Hanya 1 kelemahan Grass. Defensif kuat.","late"],
  ["Goomy → Sliggoo → Goodra","Dragon","Cootes Bog (Tall Grass, rainy)","Ice, Dragon, Fairy","❌ Skip","B","WORTH","Dragon defensive terbaik. Sap Sipper imun Grass. Murni Dragon hanya 3 kelemahan.","late"],
  ["Tynamo → Eelektrik → Eelektross","Electric","Cootes Bog (Special Area)","TIDAK ADA (Electric+Levitate)!","⚠️ Situasional","B","WORTH","Satu-satunya Pokemon TANPA KELEMAHAN di game! Electric+Levitate imun Ground. Tapi lambat dan stat biasa.","late"],
  ["Croagunk → Toxicroak","Poison/Fighting","Cootes Bog (Tall Grass, Day & Night)","Ground, Flying, Psychic","❌ Skip","C","SKIP","Dry Skin imun Water menarik. Tapi banyak kelemahan dan stat biasa.","late"],
  ["Lotad → Ludicolo","Water/Grass","Cootes Bog (Tall Grass, Day)","Flying, Poison, Bug","❌ Skip","C","SKIP","Swift Swim di rain berguna tapi biasa tanpa rain team.","late"],

  // ══ MAGNOLIA FIELDS ════════════════════════════════════════════════════
  ["Cobalion","Steel/Fighting","Magnolia Fields (post-game, statik)","Fire, Ground, Fighting","⚠️ Post-game","A","LEGENDARY","Swords of Justice. Lightning Rod+Sacred Sword kuat. Steel/Fighting solid.","postgame"],
  ["Terrakion","Rock/Fighting","Victory Road (post-game, statik)","Water, Ground, Grass, Steel, Psychic, Fighting","⚠️ Post-game","A","LEGENDARY","Attack tertinggi Swords of Justice. Close Combat+Stone Edge sangat kuat.","postgame"],
  ["Virizion","Grass/Fighting","Magnolia Fields (post-game, misi)","Fire, Ice, Flying, Psychic, Fairy, Poison","⚠️ Post-game","B","LEGENDARY","Saber Dance menarik tapi banyak kelemahan.","postgame"],

  // ══ CRYSTAL PEAK ═════════════════════════════════════════════════════
  ["Joltik → Galvantula","Bug/Electric","Crystal Peak (Tall Grass, Day & Night)","Fire, Rock","❌ Skip","B","WORTH","Compound Eyes+Thunder sangat akurat! Bug/Electric typing menarik late game.","late"],
  ["Larvesta → Volcarona","Bug/Fire","Crystal Peak (Egg dari story plot)","Water, Flying, Rock, Fire","❌ Skip","A","WORTH (late)","Quiver Dance+Fiery Dance sweeper terbaik late game! Tapi evolusi di Lv.59 sangat lambat. Butuh kesabaran.","late"],
  ["Deino → Zweilous → Hydreigon","Dark/Dragon","Crystal Peak (Tall Grass area)","Ice, Fighting, Dragon, Fairy","❌ Skip","A","WORTH (late)","Dragon terkuat non-legendary! Dark Pulse+Draco Meteor+Flamethrower coverage hampir sempurna. Evolusi di Lv.64 — untuk yang sangat sabar.","late"],
  ["Noibat → Noivern","Flying/Dragon","Crystal Peak (Night), Route 14","Electric, Ice, Dragon, Fairy, Rock","❌ Skip","B","WORTH","Sangat cepat (Speed 123). Infiltrator+Boomburst menarik. Solid late game attacker.","late"],
  ["Cubchoo → Beartic","Ice","Crystal Peak (Tall Grass, Day & Night)","Fire, Fighting, Rock, Steel","❌ Skip","C","SKIP","Lihat Frost Mountain entry.","late"],
  ["Bergmite → Avalugg","Ice","Crystal Peak (Tall Grass, Day & Night)","Fire, Fighting, Rock, Steel","❌ Skip","C","SKIP","Physical wall Ice tapi typing buruk.","late"],
  ["Cryogonal","Ice","Crystal Peak (Tall Grass, Night)","Fire, Fighting, Rock, Steel","❌ Skip","C","SKIP","Rapid Spin+Recover menarik untuk hazard removal tapi sangat fragile.","late"],
  ["Froslass","Ice/Ghost","Crystal Peak, Icicle Cave (female Snorunt+Dawn Stone)","Fire, Rock, Steel, Dark, Ghost","❌ Skip","B","WORTH","Spikes setter tercepat! Cursed Body menarik. Solid support ghostspikes setter.","late"],

  // ══ REDWOOD FOREST ════════════════════════════════════════════════════
  ["Vigoroth → Slaking","Normal","Redwood Forest (Tall Grass)","Ghost","❌ Skip","C","SKIP","Slaking sangat kuat tapi Truant ability skip satu turn. Gimmicky.","late"],
  ["Durant","Bug/Steel","Redwood Forest (Tall Grass)","Fire (4x!)","❌ Skip","B","WORTH","Hustle+Iron Head sangat kuat! Bug/Steel tapi 4x lemah Fire adalah masalah besar.","late"],
  ["Heracross","Bug/Fighting","Redwood Forest (Headbutt Trees)","Fire, Flying, Psychic, Fairy","⚠️ Situasional","B","WORTH","Lihat Route 12 Heracross.","late"],
  ["Aipom → Ambipom","Normal","Redwood Forest (Headbutt Trees, Day)","Ghost","❌ Skip","C","SKIP","Technician+Fake Out menarik untuk support tapi biasa.","late"],
  ["Scyther → Scizor","Bug/Steel","Redwood Forest (Headbutt Trees, Night)","Fire","✅ Tim 4","A","WORTH","Lihat Route 12 Scyther.","late"],
  ["Pinsir","Bug","Redwood Forest (Headbutt Trees, Night)","Fire, Flying, Rock","❌ Skip","B","WORTH","Mega Pinsir Aerilate kuat. Lihat Route 12 Pinsir.","late"],
  ["Komala","Normal","Redwood Forest (Day, rare)","Ghost","❌ Skip","C","SKIP","Comatose berguna tapi typing Normal terlalu biasa.","late"],
  ["Passimian","Fighting","Redwood Forest (Day, rare)","Psychic, Flying, Fairy","❌ Skip","C","SKIP","Receiver menarik tapi biasa.","late"],
  ["Oranguru","Normal/Psychic","Redwood Forest (Night, rare)","Bug, Dark","❌ Skip","C","SKIP","Instruct menarik tapi stat biasa.","late"],

  // ══ VICTORY ROAD ══════════════════════════════════════════════════════
  ["Golbat → Crobat","Poison/Flying","Victory Road (semua floor)","Ground, Electric, Ice, Rock, Psychic","❌ Skip","C","SKIP","Crobat cepat sebagai pivot.","late"],
  ["Boldore → Gigalith","Rock","Victory Road (Tall Grass area)","Water, Ice, Grass, Steel, Ground, Fighting","❌ Skip","C","SKIP","Sturdy berguna tapi lambat.","late"],
  ["Drapion","Poison/Dark","Victory Road (Tall Grass)","Ground","❌ Skip","C","SKIP","Poison/Dark imun Psychic. Sniper situasional. Stat biasa.","late"],
  ["Absol → Mega Absol","Dark","Victory Road (Special Encounter)","Fighting, Bug, Fairy","❌ Skip","B","WORTH","Mega Absol Magic Bounce sangat kuat! Super Luck menarik juga. Absolite tersedia.","late"],
  ["Dusclops → Dusknoir","Ghost","Victory Road (Tall Grass, Night)","Ghost, Dark","❌ Skip","C","SKIP","Trick Room support tapi sangat lambat.","late"],
  ["Gengar","Ghost/Poison","Victory Road (snowy area, Special Encounter — untuk dapat Gengarite)","Ground, Ghost, Normal, Fighting, Bug, Grass, Fairy","✅ Tim 1,4,5","A","WORTH","Gengarite ada di Victory Road snowy area! Special Encounter. Mega Gengar Shadow Tag sangat powerful.","late"],

  // ══ EEVEE EVOLUTIONS (dari story event Magnolia Town) ════════════════
  ["Eevee","Normal","Magnolia Town (story event, diberikan NPC)","Ghost","⚠️ Situasional","A","WORTH","8 evolusi! Pilih sesuai kebutuhan tim.","late"],
  ["Eevee → Espeon","Psychic","Evolusi: Eevee+Max Happiness+Siang Hari","Fighting, Bug, Ghost, Dark","⚠️ Situasional","A","WORTH","Magic Bounce memantulkan status+hazards. Sangat berguna sebagai Psychic type support.","late"],
  ["Eevee → Umbreon","Dark","Evolusi: Eevee+Max Happiness+Malam Hari","Fighting, Bug","⚠️ Situasional","B","WORTH","Tank Dark sangat bulky. Moonlight+Wish healing support.","late"],
  ["Eevee → Sylveon","Fairy","Evolusi: Eevee+Fairy move+2 Affection Heart","Poison, Steel","⚠️ Situasional","A","WORTH","Pixilate+Hyper Voice sangat kuat! Fairy coverage penting vs Dragon dan Dark.","late"],
  ["Eevee → Jolteon","Electric","Evolusi: Eevee+Thunder Stone","Ground","⚠️ Situasional","B","WORTH","Speed 130. Volt Absorb imun Electric. Solid offensive Electric attacker.","late"],
  ["Eevee → Vaporeon","Water","Evolusi: Eevee+Water Stone","Electric, Grass","⚠️ Situasional","B","WORTH","HP tertinggi di Eevee line. Water Absorb imun Water. Bulky Water support.","late"],
  ["Eevee → Flareon","Fire","Evolusi: Eevee+Fire Stone","Water, Ground, Rock","⚠️ Situasional","C","SKIP","Attack tinggi tapi tidak bisa belajar banyak physical Fire move. Skip.","late"],
  ["Eevee → Glaceon","Ice","Evolusi: Eevee+Ice Stone atau dekat Ice Rock","Fire, Fighting, Rock, Steel","❌ Skip","C","SKIP","Ice murni banyak kelemahan. Ada Ice type lebih baik.","late"],
  ["Eevee → Leafeon","Grass","Evolusi: Eevee+Leaf Stone atau dekat Mossy Rock","Fire, Ice, Flying, Poison, Bug","❌ Skip","C","SKIP","Grass murni banyak kelemahan. Ada Grass type lebih baik.","late"],

  // ══ GIFT / SPECIAL ENCOUNTER POKEMON ════════════════════════════════
  ["Riolu → Lucario","Fighting/Steel","Route 2 (Tall Grass, SANGAT AWAL)","Ice, Rock, Normal, Steel, Dark, Fairy, Dragon","✅ Tim 1,3,4","S","WAJIB TANGKAP","Entry utama: Tangkap di Route 2 SESEGERA MUNGKIN! Terbaik yang bisa didapat early game.","early"],
  ["Togepi → Togekiss","Fairy/Flying","Fallshore City (Egg gift dari NPC setelah Gym 4)","Ground, Ghost, Fighting, Bug, Dragon","✅ Semua Tim","S","WAJIB","Entry utama: Support terbaik di seluruh game!","mid2"],
  ["Alolan Vulpix","Ice","Mission #043: Ninetales of Snow (egg reward)","Ground, Steel, Fire, Poison","❌ Skip","B","WORTH","Reward misi unik. Ice/Fairy Alolan Ninetales solid.","mid1"],
  ["Kanto Starters (Bulbasaur/Charmander/Squirtle)","Grass-Poison / Fire / Water","Magnolia Cafe (Egg Lady, random tiap hari)","berbeda per starter","❌ Skip","B","WORTH","Semua punya Mega Evolution kuat! Random dari Egg Lady. Worth untuk collector Mega.","late"],
  ["Unova Starters (Tepig/Snivy/Oshawott)","Fire / Grass / Water","Route 5 (Gift dari NPC)","berbeda per starter","❌ Skip","B","WORTH","Emboar (Fire/Fight), Serperior (Grass+Contrary Leaf Storm!), Samurott (Water). Type coverage tambahan.","early"],
  ["Froakie → Frogadier → Greninja","Water/Dark","Magnolia Cafe (Egg Lady, random) atau cheat","Ground, Electric, Bug, Fairy","✅ Tim 4","A","WORTH","Protean = semua move jadi STAB! Coverage sangat luas. Best Water type untuk Elite Four.","late"],
  ["Chimchar → Monferno → Infernape","Fire/Fighting","Magnolia Cafe (Egg Lady, random) atau cheat","Water, Ground, Rock, Flying, Psychic","✅ Tim 1","A","WORTH","Mach Punch priority+Close Combat kuat. Nasty Plot untuk special sweep. Iron Fist menarik.","late"],
  ["Litleo → Pyroar","Fire/Normal","Route 2 (random gift dari NPC)","Water, Ground, Rock","❌ Skip","C","SKIP","Cukup kuat sebagai Fire type awal tapi Growlithe→Arcanine jauh lebih baik.","early"],
  ["Ditto","Normal","Route 7 (Swarm) dan Route 9 (Swarm)","Fighting","❌ Skip","B","BREEDING","WAJIB untuk breeding! Bisa breed dengan hampir semua Pokemon. Vital untuk nature+EV optimization.","mid1"],

  // ══ LEGENDARY POKEMON ═════════════════════════════════════════════════
  ["Latias","Dragon/Psychic","45 Misi selesai → Mission HQ (post-game)","Ice, Bug, Ghost, Dragon, Dark, Fairy","⚠️ Post-game","S","LEGENDARY","Dragon/Psychic kuat. Levitate. Mega Latias (Latiasite dari 45 misi reward). Berguna post-game.","postgame"],
  ["Latios","Dragon/Psychic","45 Misi selesai → Mission HQ (post-game)","Ice, Bug, Ghost, Dragon, Dark, Fairy","⚠️ Post-game","S","LEGENDARY","Sp.Attack lebih tinggi dari Latias. Levitate. Mega Latios tersedia. Sangat powerful.","postgame"],
  ["Darkrai","Dark","Tarmigan Inn malam hari (setelah Mission: The Endless Nightmare)","Fighting, Bug, Fairy","⚠️ Post-game","A","LEGENDARY","Dark Void (sleep all)+Nightmare combo sangat powerful. Butuh selesaikan misi dulu.","postgame"],
  ["Rayquaza / Mega Rayquaza","Dragon/Flying","Crystal Peak (post-game, statik)","Ice, Rock, Dragon, Fairy","⚠️ Post-game","S","LEGENDARY","Salah satu terkuat di game! Air Lock ability. Dragon Ascent untuk Mega tanpa Mega Stone. Satu-satunya exception Mega Evolution rules.","postgame"],
  ["Jirachi","Steel/Psychic","Route 13 (post-game, setelah syarat tertentu)","Fire, Ground, Ghost, Dark","⚠️ Post-game","A","LEGENDARY","Serene Grace+Iron Head flinch 60%! Steel/Psychic solid hanya 3 kelemahan.","postgame"],
  ["Shaymin Land / Sky","Grass / Grass-Flying","Flower Paradise (post-game)","Fire, Ice, Flying, Poison, Bug (Land) / + Electric, Rock (Sky)","⚠️ Post-game","A","LEGENDARY","Natural Cure+Seed Flare (50% drop Sp.Def). Sky Form Serene Grace+Air Slash menarik.","postgame"],
  ["Kyurem","Dragon/Ice","Ruins of Void (Underwater, post-game)","Fighting, Dragon, Steel, Rock, Fairy","⚠️ Post-game","A","LEGENDARY","Dragon/Ice coverage. Black Kyurem (DNA Splicers+Zekrom) atau White Kyurem (+Reshiram) form tersedia.","postgame"],
  ["Tornadus","Flying","Roaming overworld (post-game) — SIMPAN MASTER BALL!","Electric, Ice, Rock","⚠️ Post-game","A","LEGENDARY","Roaming legendary! Prankster+Tailwind berguna. Therian Form lebih kuat. SIMPAN MASTER BALL.","postgame"],
  ["Thundurus","Electric/Flying","Roaming overworld (post-game) — SIMPAN MASTER BALL!","Ice, Rock","⚠️ Post-game","A","LEGENDARY","Roaming! Prankster+Thunder Wave sangat berguna untuk support. Therian Form lebih kuat.","postgame"],
  ["Landorus","Ground/Flying","Post-game (setelah dapat Tornadus+Thundurus+item khusus)","Water, Ice","⚠️ Post-game","S","LEGENDARY","Intimidate Therian Form! Hanya 2 kelemahan. Sangat powerful untuk competitive.","postgame"],
  ["Cresselia","Psychic","Fullmoon Island (Seaport City, post-game via misi)","Bug, Ghost, Dark","⚠️ Post-game","B","LEGENDARY","Sangat bulky. Trick Room support terbaik. Bagus untuk stall team post-game.","postgame"],
  ["Hoopa Confined / Unbound","Psychic/Ghost atau Psychic/Dark","Post-game misi (mascot game!)","Ghost, Dark, Bug","⚠️ Post-game","S","LEGENDARY","Mascot Pokemon Unbound! Hyperspace Fury (Unbound Form) sangat powerful. Dark Pulse+Psychic coverage sempurna.","postgame"],
  ["Kyogre / Primal Kyogre","Water","Ruins of Void (post-game)","Electric, Grass","⚠️ Post-game","S","LEGENDARY","Drizzle+Origin Pulse sangat powerful! Primordial Sea di Primal form.","postgame"],
  ["Groudon / Primal Groudon","Ground","Cinder Volcano (post-game, statik)","Water, Grass, Ice","⚠️ Post-game","S","LEGENDARY","Drought+Precipice Blades. Desolate Land Primal form. Sangat kuat.","postgame"],
  ["Mewtwo","Psychic","Ruins of Void (post-game, deep area)","Bug, Ghost, Dark","⚠️ Post-game","S","LEGENDARY","Salah satu terkuat! Mega Mewtwo X (Psychic/Fighting) atau Y (pure Psychic). Mewtwoite tersedia.","postgame"],
  ["Xerneas","Fairy","Post-game misi khusus","Poison, Steel","⚠️ Post-game","S","LEGENDARY","Fairy Aura+Moonblast. Geomancy setup sangat powerful!","postgame"],
  ["Yveltal","Dark/Flying","Post-game misi khusus","Electric, Ice, Rock, Fairy","⚠️ Post-game","S","LEGENDARY","Dark Aura+Oblivion Wing (heals 75% damage). Sangat powerful offensif dan defensif.","postgame"],
  ["Zygarde (10%/50%/Complete)","Dragon/Ground","Zygarde Cells (tersebar seluruh Borrius, dikumpulkan satu per satu)","Ice, Dragon, Fairy","⚠️ Post-game","A","LEGENDARY","Complete Form (100%) Power Construct sangat bulky! Cells harus dikumpulkan dari seluruh map.","postgame"],
  ["Diancie → Mega Diancie","Rock/Fairy","Post-game misi khusus","Water, Ground, Steel, Grass","⚠️ Post-game","A","LEGENDARY","Mega Diancie Speed tinggi! Magic Bounce. Diancite tersedia.","postgame"],
  ["Volcanion","Fire/Water","Post-game misi khusus","Ground, Rock, Electric","⚠️ Post-game","A","LEGENDARY","Water Absorb (beberapa versi) atau Steam Eruption 130 BP! Fire/Water hanya 3 kelemahan.","postgame"],
  ["Zapdos","Electric/Flying","Power Station area (post-game)","Ice, Rock","⚠️ Post-game","A","LEGENDARY","Hanya 2 kelemahan! Pressure+Thunderbolt kuat. Defog berguna.","postgame"],
  ["Moltres","Fire/Flying","Victory Road Peak (post-game)","Water, Electric, Rock (via Stealth Rock)","⚠️ Post-game","A","LEGENDARY","Flame Body+Flamethrower solid. Tapi 4x Stealth Rock membatasi switch-in.","postgame"],
  ["Articuno","Ice/Flying","Flower Paradise (post-game)","Electric, Fire, Rock, Steel","⚠️ Post-game","B","LEGENDARY","Pressure+Sheer Cold menarik tapi typing banyak kelemahan. Sentimental value.","postgame"],
  ["Raikou","Electric","Roaming (post-game) — simpan Master Ball!","Ground","⚠️ Post-game","A","LEGENDARY","Roaming! Sp.Attack dan Speed sangat tinggi. Sacred Fire variant menarik.","postgame"],
  ["Entei","Fire","Roaming (post-game) — simpan Master Ball!","Water, Ground, Rock","⚠️ Post-game","A","LEGENDARY","Roaming! Sacred Fire 50% burn. Pressure berguna.","postgame"],
  ["Suicune","Water","Static encounter (post-game)","Electric, Grass","⚠️ Post-game","A","LEGENDARY","Static encounter, lebih mudah dari roaming. Pressure+Calm Mind+Scald wall sangat kuat.","postgame"],
  ["Lugia","Psychic/Flying","Ruins area post-game (deep)","Electric, Ice, Rock, Ghost, Dark","⚠️ Post-game","S","LEGENDARY","Multiscale saat HP penuh sangat kuat! Defensive wall terbaik. Aeroblast 130 BP.","postgame"],
  ["Ho-Oh","Fire/Flying","Flower Paradise (post-game)","Water, Electric, Rock","⚠️ Post-game","A","LEGENDARY","Sacred Fire 50% burn, Regenerator+Recover. Tapi 4x Stealth Rock.","postgame"],
  ["Dialga","Steel/Dragon","Post-game misi (portal)","Fire, Fighting, Ground","⚠️ Post-game","S","LEGENDARY","Steel/Dragon sedikit kelemahan! Roar of Time 150 BP.","postgame"],
  ["Palkia","Water/Dragon","Post-game misi (portal)","Dragon, Fairy","⚠️ Post-game","S","LEGENDARY","Hanya 2 kelemahan! Spacial Rend kuat. Sangat solid.","postgame"],
  ["Giratina Altered / Origin","Ghost/Dragon","Ruins of Void (post-game)","Ice, Ghost, Dragon, Dark, Fairy","⚠️ Post-game","A","LEGENDARY","Levitate (Altered) atau Pressure (Origin). Ghost/Dragon solid coverage.","postgame"],
  ["Reshiram","Fire/Dragon","Post-game misi (portal)","Ground, Rock, Dragon","⚠️ Post-game","S","LEGENDARY","Turboblaze+Blue Flare 130 BP. Fire/Dragon coverage solid.","postgame"],
  ["Zekrom","Electric/Dragon","Post-game misi (portal)","Ice, Ground, Dragon","⚠️ Post-game","S","LEGENDARY","Teravolt+Bolt Strike 130 BP. Electric/Dragon solid.","postgame"],
  ["Victini","Psychic/Fire","Post-game misi (event khusus)","Water, Ground, Rock, Dark, Ghost","⚠️ Post-game","A","LEGENDARY","Victory Star+V-create 180 BP sangat kuat! Psyshock berguna. Fire/Psychic coverage.","postgame"],
  ["Keldeo","Water/Fighting","Post-game misi","Electric, Grass, Flying, Psychic, Fairy","⚠️ Post-game","A","LEGENDARY","Justified+Secret Sword kuat. Resolute Form menarik.","postgame"],
  ["Genesect","Bug/Steel","Post-game misi khusus","Fire (4x!)","⚠️ Post-game","A","LEGENDARY","Download+Techno Blast menarik. Drives untuk ganti tipe. 4x lemah Fire adalah kelemahan utama.","postgame"],
  ["Deoxys (4 Form)","Psychic","Post-game misi khusus","Bug, Ghost, Dark","⚠️ Post-game","A","LEGENDARY","4 form! Speed Form tercepat non-mega. Attack Form offensive tertinggi. Sangat fleksibel.","postgame"],
];

// Export
if (typeof module !== 'undefined') module.exports = POKEMON_DB;
