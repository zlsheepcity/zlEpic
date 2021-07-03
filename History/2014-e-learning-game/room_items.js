var TheItemsList =
[
  'shelf_l_old',
  'shelf_c_old',
  'tv_old',
  'kreslo_old',
  'table_old',
  'headset_old',
  'keyboard_old',
  'monik_old',
  'chair_old',
  'mouse_old',
  
  
  'tv_new',
  'kreslo_new',
  'shelf_l_new',
  'shelf_c_new',
  'table_new',
  'headset_new',
  'keyboard_new',
  'monik_new',
  'chair_new',
  'mouse_new',
  'carpet_new',
  
  'fish',
  'box',
  'cinema',
  'flowers',
  'kofe',
  'lamp',
  'photo_1',
  'photo_2',
  'playstation',
  'shell',
  'snow',
  'trenazer',
  'turtle',
  'vacuum',
  'water'
];

var TheItemsListNameTable =
{
  i01: { name:'shelf_l_old', code:'i01' },
  i02: { name:'shelf_c_old', code:'i02' },
  i03: { name:'tv_old', code:'i03' },
  i04: { name:'kreslo_old', code:'i04' },
  i05: { name:'table_old', code:'i05' },
  i06: { name:'headset_old', code:'i06' },
  i07: { name:'keyboard_old', code:'i07' },
  i08: { name:'monik_old', code:'i08' },
  i09: { name:'chair_old', code:'i09' },
  i10: { name:'mouse_old',   code:'i10' },
  
  i11: { name:'tv_new', code:'i11' },
  i12: { name:'kreslo_new', code:'i12' },
  i13: { name:'shelf_l_new', code:'i13' },
  i14: { name:'shelf_c_new', code:'i14' },
  i15: { name:'table_new', code:'i15' },
  i16: { name:'headset_new', code:'i16' },
  i17: { name:'keyboard_new', code:'i17' },
  i18: { name:'monik_new', code:'i18' },
  i19: { name:'chair_new', code:'i19' },
  i20: { name:'mouse_new', code:'i20' },
  i21: { name:'carpet_new', code:'i21' },
  
  i22: { name:'fish', code:'i22' },
  i23: { name:'box', code:'i23' },
  i24: { name:'cinema', code:'i24' },
  i25: { name:'flowers', code:'i25' },
  i26: { name:'kofe', code:'i26' },
  i27: { name:'lamp', code:'i27' },
  i28: { name:'photo_1', code:'i28' },
  i29: { name:'photo_2', code:'i29' },
  i30: { name:'playstation', code:'i30' },
  i31: { name:'shell', code:'i31' },
  i32: { name:'snow', code:'i32' },
  i33: { name:'trenazer', code:'i33' },
  i34: { name:'turtle', code:'i34' },
  i35: { name:'vacuum', code:'i35' },
  i36: { name:'water', code:'i36' }
}

var TheItemData =
{

  fish:
  {
    caption:      'Аквариум',
    price:        '15',
    img:          'fish.png',
    x:            314,
    y:            166,
    z:            3,
    description:  'Отличный собеседник для тех, кто хочет наконец-то просто помолчать.',
    parent:       false,
    purchased:    false,
    button:       { x:15, y:15 }
  }
  ,
  flowers:
  {
    caption:      'Герань',
    price:        '5',
    img:          'flowers.png',
    x: 206,     y: 195,     z: 3,
    description:  'Комнатные растения дадут глазам отдохнуть. Герань еще и цветёт симпатично.',
    parent:       false,
    purchased:    false,
    button:       { x:70, y:12 }
  }
  ,
  shell:
  {
    caption:      'Поездка на море',
    price:        '40',
    img:          'shell.png',
    x:            382,
    y:            165,
    z:            3,
    description:  'Ракушка - красивый сувенир, привезённый из поездки на юг.',
    parent:       false,
    purchased:    false,
    button:       { x:0, y:-10 }
  }
  ,
  box:
  {
    caption:      'Боксерская груша',
    price:        '15',
    img:          'box.png',
    x:            431,
    y:            0,
    z:            0,
    description:  'Поможет снять стресс после некоторых разговоров.',
    parent:       false,
    purchased:    false,
    button:       { x:55, y:15 }
  }
  ,
  carpet_new:
  {
    caption:      'Ковёр',
    price:        '10',
    img:          'carpet_new.png',
    x:            235,
    y:            201,
    z:            0,
    description:  'Радует глаз и делает комнату менее гулкой.',
    parent:       false,
    purchased:    false,
    button:       { x:308, y:51 }
  }
  ,
  cinema:
  {
    caption:      'Домашний кинотеатр',
    price:        '50',
    img:          'cinema.png',
    x:            217,
    y:            256,
    z:            3,
    description:  'Мощный, чистый звук понравится даже соседям.',
    parent:       false,
    purchased:    false,
    button:       { x:533, y:-63 }
  }
  ,
  
  
  

  lamp:
  {
    caption:      'Лампа',
    price:        '15',
    img:          'lamp.png',
    x:            816,
    y:            132,
    z:            8,
    description:  'Приятный для глаз свет и ощущение уюта, особенно когда нужно работать поздно вечером.',
    parent:       false,
    purchased:    false,
    button:       { x:82, y:47 }
  }
  ,
  photo_1:
  {
    caption:      'Поездка в горы',
    price:        '35',
    img:          'photo_1.png',
    x:            960,
    y:            255,
    z:            0,
    description:  '',
    parent:       false,
    purchased:    false,
    button:       { x:8, y:14 }
  }
  ,
  photo_2:
  {
    caption:      'Поход на концерт',
    price:        '10',
    img:          'photo_2.png',
    x:            422,
    y:            51,
    z:            0,
    description:  '',
    parent:       false,
    purchased:    false,
    button:       { x:2, y:19 }
  }
  ,
  playstation:
  {
    caption:      'Игровая приставка',
    price:        '20',
    img:          'playstation.png',
    x:            597,
    y:            176,
    z:            6,
    description:  'Можно играть в игры и по сети, но гораздо веселее собрать друзей у себя дома.',
    parent:       'shelf_c_new',
    purchased:    false,
    button:       { x:18, y:10 }
  }
  ,
  snow:
  {
    caption:      'Сноуборд',
    price:        '20',
    img:          'snow.png',
    x:            1,
    y:            338,
    z:            0,
    description:  'Хотя бы раз в год можно выбраться в горы.',
    parent:       false,
    purchased:    false,
	tooltipOnTop: true,
    button:       { x:69, y:29 }
  }
  ,
  trenazer:
  {
    caption:      'Велотренажер',
    price:        '25',
    img:          'trenazer.png',
    x:            87,
    y:            400,
    z:            6,
    description:  'Поможет оставаться в форме, не выходя из дома. В крайнем случае - станет удобной вешалкой.',
    parent:       false,
    purchased:    false,
	tooltipOnTop: true,
    button:       { x:41, y:92 }
  }
  ,

  vacuum:
  {
    caption:      'Робот-пылесос',
    price:        '15',
    img:          'vacuum.png',
    x:            964,
    y:            421,
    z:            8,
    description:  'Позволит сэкономить время на уборку. Главное, чтобы не включился во время звонка клиенту.',
    parent:       false,
    purchased:    false,
    button:       { x:7, y:20 }
  }
  ,

  tv_new:
  {
    caption:      'Домашний кинотеатр',
    price:        '70',
    img:          'tv_new.png',
    x:            581,
    y:            13,
    z:            1,
    description:  'Мощный, чистый звук понравится даже соседям.',
    parent:       'tv_old',
    purchased:    false,
    button:       { x:80, y:95 }
  }
  ,
  
//////////////////////////////////////////////////////////////
  water:
  {
    caption:      'Увлажнитель воздуха',
    price:        '15',
    img:          'water.png',
    x:            930,
    y:            281,
    z:            8,
    description:  'Если после работы устают глаза, может быть, в помещении слишком сухо?',
    parent:       'table_new',
    purchased:    false,
    button:       { x:0, y:20 }
  }
  ,
  kofe:
  {
    caption:      'Кофейный аппарат',
    price:        '15',
    img:          'kofe.png',
    x:            650,
    y:            324,
    z:            8,
    description:  'Позволяет обработать 1-2 дополнительные заявки в час.',
    parent:       false,
    purchased:    false,
    button:       { x:17, y:41 }
  }
  ,
  turtle:
  {
    caption:      'Черепашка',
    price:        '5',
    img:          'turtle.png',
    x:            830,
    y:            232,
    z:            8,
    description:  'Идеальное домашнее животное - не лает, не мяукает, кормить не чаще раза в день.',
    parent:       'table_new',
    purchased:    false,
    button:       { x:40, y:25 }
  }
  ,
  chair_new:
  {
    caption:      'Улучшенное рабочее кресло',
    price:        '15',
    img:          'chair_new.png',
    x:            793,
    y:            354,
    z:            15,
    description:  'Позволит провести за работой целый день и не устать.',
    parent:       'chair_old',
    purchased:    false,
    button:       { x:85, y:95 }
  }
  ,
  mouse_new:
  {
    caption:      'Эргономичная мышь',
    price:        '5',
    img:          'mouse_new.png',
    x:            833,
    y:            337,
    z:            8,
    description:  'Не только удобна в работе, но и светится веселыми огоньками.',
    parent:       'mouse_old',
    purchased:    false,
    button:       { x:15, y:0 }
  }
  ,
  monik_new:
  {
    caption:      'Новый монитор',
    price:        '10',
    img:          'monik_new.png',
    x:            700,
    y:            250,
    z:            7,
    description:  'Глаза совсем не устают.',
    parent:       'monik_old',
    purchased:    false,
    button:       { x:50, y:50 }
  }
  ,
  keyboard_new:
  {
    caption:      'Эргономичная клавиатура',
    price:        '5',
    img:          'keyboard_new.png',
    x:            732,
    y:            342,
    z:            8,
    description:  'Позволит меньше уставать пальцам.',
    parent:       'keyboard_old',
    purchased:    false,
    button:       { x:60, y:20 }
  }
  ,
  headset_new:
  {
    caption:      'Новая гарнитура',
    price:        '5',
    img:          'headset_new.png',
    x:            714,
    y:            385,
    z:            9,
    description:  'Четкий звук и разборчивая речь произведут на клиента впечатление профессионализма.',
    parent:       'headset_old',
    purchased:    false,
    button:       { x:0, y:0 }
  }
  ,
  
////////////////////////////////////////////////////////////  
  kreslo_new:
  {
    caption:      'Диван',
    price:        '20',
    img:          'kreslo_new.png',
    x:            243,
    y:            300,
    z:            3,
    description:  'Идеален для отдыха после работы перед телевизором.',
    parent:       'kreslo_old',
    purchased:    false,
	tooltipOnTop: true,
    button:       { x:240, y:95 },
	firstBuy:	  true
  }
  ,
  shelf_l_new:
  {
    caption:      'Полка для предметов',
    price:        '5',
    img:          'shelf_l_new.png',
    x:            173,
    y:            168,
    z:            2,
    description:  'Позволяет содержать комнату в порядке. Просто складывайте сюда все, что плохо лежит.',
    parent:       'shelf_l_old',
    purchased:    false,
    button:       { x:190, y:55 },
	firstBuy:	  true
  }
  ,
  shelf_c_new:
  {
    caption:      'Новая полка под телевизором',
    price:        '5',
    img:          'shelf_c_new.png',
    x:            588,
    y:            176,
    z:            2,
    description:  'Очень удобно хранить здесь фильмы из домашней коллекции.',
    parent:       'shelf_c_old',
    purchased:    false,
    button:       { x:60, y:65 },
	firstBuy:	  true
  }
  ,
  table_new:
  {
    caption:      'Новый рабочий стол',
    price:        '20',
    img:          'table_new.png',
    x:            642,
    y:            268,
    z:            4,
    description:  'Всё под рукой и ничего не мешает.',
    parent:       'table_old',
    purchased:    false,
    button:       { x:80, y:170 },
	firstBuy:	  true
  }
  ,
  kreslo_old:
  {
    caption:      'Старое кресло',
    price:        '0',
    img:          'kreslo_old.png',
    x:            378,
    y:            299,
    z:            1,
    description:  'Старое, но привычное и по-домашнему уютное.',
    parent:       false,
    replace:      'kreslo_new',
	tooltipOnTop: true,
    purchased:    false
  }
  ,
  tv_old:
  {
    caption:      'Большой телевизор',
    price:        '45',
    img:          'tv_old.png',
    x:            620,
    y:            48,
    z:            1,
    description:  'Немного поцарапан, но это не мешает смотреть кино.',
    parent:       false,
    replace:      'tv_new',
    purchased:    false
  }
  ,
  shelf_l_old:
  {
    caption:      'Полка для предметов',
    price:        '5',
    img:          'shelf_l_old.png',
    x:            211,
    y:            180,
    z:            1,
    description:  'Хорошая полка. Можно слегка подкрасить и будет как новая.',
    parent:       false,
    replace:      'shelf_l_new',
    purchased:    false
  }
  ,
  shelf_c_old:
  {
    caption:      'Полка для техники',
    price:        '0',
    img:          'shelf_c_old.png',
    x:            605,
    y:            198,
    z:            1,
    description:  'Например, чтобы не потерять пульт от телевизора. Кстати, где он?',
    parent:       false,
    replace:      'shelf_c_new',
    purchased:    false
  }
  ,
  table_old:
  {
    caption:      'Стол',
    price:        '0',
    img:          'table_old.png',
    x:            615,
    y:            230,
    z:            4,
    description:  'Старый рабочий стол.',
    parent:       false,
    replace:      'table_new',
    purchased:    false
  }
  ,
  headset_old:
  {
    caption:      'Гарнитура',
    price:        '0',
    img:          'headset_old.png',
    x:            720,
    y:            390,
    z:            7,
    description:  'Старенькие наушники с микрофоном.',
    parent:       false,
    replace:      'headset_new',
    purchased:    false
  }
  ,
  keyboard_old:
  {
    caption:      'Клавиатура',
    price:        '0',
    img:          'keyboard_old.png',
    x:            748,
    y:            343,
    z:            8,
    description:  'Обычная клавиатура',
    parent:       false,
    replace:      'keyboard_new',
    purchased:    false
  }
  ,
  monik_old:
  {
    caption:      'Монитор',
    price:        '0',
    img:          'monik_old.png',
    x:            702,
    y:            274,
    z:            7,
    description:  'Большой и тяжелый монитор. Изображение заметно мерцает.',
    parent:       false,
    replace:      'monik_new',
    purchased:    false
  }
  ,
  chair_old:
  {
    caption:      'Старое рабочее кресло',
    price:        '0',
    img:          'chair_old.png',
    x:            805,
    y:            374,
    z:            15,
    description:  'Чуть сломано, но это почти не мешает работе.',
    parent:       false,
    replace:      'chair_new',
    purchased:    false
  }
  ,
  mouse_old:
  {
    caption:      'Компьютерная мышка',
    price:        '0',
    img:          'mouse_old.png',
    x:            790,
    y:            315,
    z:            6,
    description:  'Не очень удобная и далеко не новая компьютерная мышь.',
    parent:       false,
    replace:      'mouse_new',
    purchased:    false
  }
}