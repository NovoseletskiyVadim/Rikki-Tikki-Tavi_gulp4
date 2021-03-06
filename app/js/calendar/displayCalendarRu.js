
$(function(){
    var data = [
        { "date": "2019-08-24 09:00:00", "title": "День независимости Украины. Поздравляем всех с общим объединяющим праздником нации!", "description": "", "url": "" },
        { "date": "2019-08-27 08:00:00", "title": "Возобновление деятельности детского садика полного дня пребывания 'Рикки-Тикки-Тави'. Начало деятельности в 8:00.", "description": "", "url": "" },
        { "date": "2019-09-01 09:00:20", "title": "День Знаний. Поздравляем наших выпускников с новым учебным годом в школе!", "description": "", "url": "" },
        { "date": "2019-09-02 11:00:00", "title": "Приглашаем детей-школьников на встречу с дошкольниками детского садика 'Рикки-Тикки-Тави' в 11:30 для приветствия, беседы, эстафеты", "description": "", "url": "" },
        
        { "date": "2019-09-09 09:00:00", "title": "Международный день красоты. В понедельник будет проводиться мастер-класс «Красавица Осень». Дети-дизайнеры будут создавать наряды из природного материала.", "description": "", "url": "" },
        { "date": "2019-09-23 09:00:00", "title": "Осеннее равноденствие. В рамках раскрытия темы в Монтессори-зоне «Природа и культура. Космос» будет проведена беседа и опыт особенности этого дня.", "description": "", "url": "" },
        { "date": "2019-09-27 17:30:00", "title": "Праздник Осени. В детском клубе в 17:30 будет проведен тематический праздник с родителями.", "description": "", "url": "" },
        
        { "date": "2019-10-01 09:00:00", "title": "Международный день музыки. Во вторник, в посвящении этому дню, дети изготавливать музыкальные инструменты и создадут собственную мелодию шумовым оркестром.", "description": "", "url": "" },
        { "date": "2019-10-11 09:00:00", "title": "По случаю Дня украинского казачества и защитника Украины, который отмечается 14 октября, состоится развлечение для детей в вышиванках, спортивного характера.", "description": "", "url": "" },
        
        { "date": "2019-11-04 09:00:00", "title": "По случаю Дня украинской письменности и языка, что отмечается в субботу 9 ноября, с детьми, в течении недели, будут проводиться занятия и будет выполняться деятельность по методикам Н.Зайцева и М.Монтессори (изготовление книжечки «Мое имя»)", "description": "", "url": "" },
        { "date": "2019-11-05 09:00:00", "title": "По случаю Дня украинской письменности и языка, что отмечается в субботу 9 ноября, с детьми, в течении недели, будут проводиться занятия и будет выполняться деятельность по методикам Н.Зайцева и М.Монтессори (изготовление книжечки «Мое имя»)", "description": "", "url": "" },
        { "date": "2019-11-06 09:00:00", "title": "По случаю Дня украинской письменности и языка, что отмечается в субботу 9 ноября, с детьми, в течении недели, будут проводиться занятия и будет выполняться деятельность по методикам Н.Зайцева и М.Монтессори (изготовление книжечки «Мое имя»)", "description": "", "url": "" },
        { "date": "2019-11-07 09:00:00", "title": "По случаю Дня украинской письменности и языка, что отмечается в субботу 9 ноября, с детьми, в течении недели, будут проводиться занятия и будет выполняться деятельность по методикам Н.Зайцева и М.Монтессори (изготовление книжечки «Мое имя»)", "description": "", "url": "" },
        { "date": "2019-11-08 09:00:00", "title": "По случаю Дня украинской письменности и языка, что отмечается в субботу 9 ноября, с детьми, в течении недели, будут проводиться занятия и будет выполняться деятельность по методикам Н.Зайцева и М.Монтессори (изготовление книжечки «Мое имя»)", "description": "", "url": "" },
        
        { "date": "2019-11-15 09:00:00", "title": "16 ноября, отмечается «Всемирный День пуговиц». В клубе «Рикки-Тикки-Тави» по случаю этого дня с детьми будет проводиться мастер-класс по изготовлению открытки с украшением пуговицами.", "description": "", "url": "" },
        
        { "date": "2019-12-06 09:00:00", "title": "В пятницу, 6 декабря, День Вооруженных сил Украины. По случаю этого особого дня будет проведено развлечение для детей с поздравлением.", "description": "", "url": "" },
        { "date": "2019-12-13 09:00:00", "title": "По случаю Международного дня чая, который имеет фиксированную дату 15 декабря, в пятницу 13.12.2019 состоится угощение детьми сверстников в процессе чаепития.", "description": "", "url": "" },
        { "date": "2019-12-19 09:00:00", "title": "День Святого Николая. В этот особый день, в четверг, состоится развлечение для детей с вручением подарочков от Николайчика.", "description": "", "url": "" },
        { "date": "2019-12-20 09:00:00", "title": "В вечернее время пятницы, в 17:30, приглашаем родителей детей на празднование. Для прощания с уходящим годом и встречи Нового года приглашаем на Праздник Зимы!", "description": "", "url": "" },

        { "date": "2020-06-21 09:00:00", "title": "Неделя \"Семья\" По случаю празднования Дня Папы, который отмечается в субботу 21 июня, на протяжении недели, дети будут изготавливать открытки с изображением членов семьи, будут проводиться беседы, игры, разучивание песен", "description": "", "url": "" },
        { "date": "2020-06-22 09:00:00", "title": "Неделя \"Семья\" По случаю празднования Дня Папы, который отмечается в субботу 21 июня, на протяжении недели, дети будут изготавливать открытки с изображением членов семьи, будут проводиться беседы, игры, разучивание песен", "description": "", "url": "" },
        { "date": "2020-06-23 09:00:00", "title": "Неделя \"Семья\" По случаю празднования Дня Папы, который отмечается в субботу 21 июня, на протяжении недели, дети будут изготавливать открытки с изображением членов семьи, будут проводиться беседы, игры, разучивание песен", "description": "", "url": "" },
        { "date": "2020-06-24 09:00:00", "title": "Неделя \"Семья\" По случаю празднования Дня Папы, который отмечается в субботу 21 июня, на протяжении недели, дети будут изготавливать открытки с изображением членов семьи, будут проводиться беседы, игры, разучивание песен", "description": "", "url": "" },
        { "date": "2020-06-25 09:00:00", "title": "Неделя \"Семья\" По случаю празднования Дня Папы, который отмечается в субботу 21 июня, на протяжении недели, дети будут изготавливать открытки с изображением членов семьи, будут проводиться беседы, игры, разучивание песен", "description": "", "url": "" },
        { "date": "2020-06-26 09:00:00", "title": "Неделя \"Семья\" По случаю празднования Дня Папы, который отмечается в субботу 21 июня, на протяжении недели, дети будут изготавливать открытки с изображением членов семьи, будут проводиться беседы, игры, разучивание песен", "description": "", "url": "" },
        { "date": "2020-06-27 09:00:00", "title": "Неделя \"Семья\" По случаю празднования Дня Папы, который отмечается в субботу 21 июня, на протяжении недели, дети будут изготавливать открытки с изображением членов семьи, будут проводиться беседы, игры, разучивание песен", "description": "", "url": "" },
        
        { "date": "2020-06-22 09:00:00", "title": "22 - 30 июня Неделя безопасности (насекомые) На этой неделе дети будут изготавливать открытки, будут проводиться игры, беседы творческие работи, поучающие истории по тематике \"Приключения бабочки\" ", "description": "", "url": "" },
        { "date": "2020-06-23 09:00:00", "title": "22 - 30 июня Неделя безопасности (насекомые) На этой неделе дети будут изготавливать открытки, будут проводиться игры, беседы творческие работи, поучающие истории по тематике \"Приключения бабочки\" ", "description": "", "url": "" },
        { "date": "2020-06-24 09:00:00", "title": "22 - 30 июня Неделя безопасности (насекомые) На этой неделе дети будут изготавливать открытки, будут проводиться игры, беседы творческие работи, поучающие истории по тематике \"Приключения бабочки\" ", "description": "", "url": "" },
        { "date": "2020-06-25 09:00:00", "title": "22 - 30 июня Неделя безопасности (насекомые) На этой неделе дети будут изготавливать открытки, будут проводиться игры, беседы творческие работи, поучающие истории по тематике \"Приключения бабочки\" ", "description": "", "url": "" },
        { "date": "2020-06-26 09:00:00", "title": "22 - 30 июня Неделя безопасности (насекомые) На этой неделе дети будут изготавливать открытки, будут проводиться игры, беседы творческие работи, поучающие истории по тематике \"Приключения бабочки\"  ", "description": "", "url": "" },
        { "date": "2020-06-27 09:00:00", "title": "22 - 30 июня Неделя безопасности (насекомые) На этой неделе дети будут изготавливать открытки, будут проводиться игры, беседы творческие работи, поучающие истории по тематике \"Приключения бабочки\"  ", "description": "", "url": "" },
        { "date": "2020-06-28 09:00:00", "title": "22 - 30 июня Неделя безопасности (насекомые) На этой неделе дети будут изготавливать открытки, будут проводиться игры, беседы творческие работи, поучающие истории по тематике \"Приключения бабочки\" ", "description": "", "url": "" },
        { "date": "2020-06-29 09:00:00", "title": "22 - 30 июня Неделя безопасности (насекомые) На этой неделе дети будут изготавливать открытки, будут проводиться игры, беседы творческие работи, поучающие истории по тематике \"Приключения бабочки\"  ", "description": "", "url": "" },
        { "date": "2020-06-30 09:00:00", "title": "22 - 30 июня Неделя безопасности (насекомые) На этой неделе дети будут изготавливать открытки, будут проводиться игры, беседы творческие работи, поучающие истории по тематике \"Приключения бабочки\" ", "description": "", "url": "" },
        
        { "date": "2020-07-01 09:00:00", "title": "1-3 июля Неделя животних. По случаю Всемирного дня собак, который празднуется 2 июля, в течении первых дней июля и его первой недели с детьми будут проводиться беседы, игри, творческие задания. ", "description": "", "url": "" },
        { "date": "2020-07-02 09:00:00", "title": "1-3 июля Неделя животних. По случаю Всемирного дня собак, который празднуется 2 июля, в течении первых дней июля и его первой недели с детьми будут проводиться беседы, игри, творческие задания. ", "description": "", "url": "" },
        { "date": "2020-07-03 09:00:00", "title": "1-3 июля Неделя животних. По случаю Всемирного дня собак, который празднуется 2 июля, в течении первых дней июля и его первой недели с детьми будут проводиться беседы, игри, творческие задания. ", "description": "", "url": "" },
        
        { "date": "2020-07-13 09:00:00", "title": "13-17.07.2020 Неделя Мира. По случаю Дня украинского миротворца, который отмечается 15 июля, в течение недели будут организованы игры, беседы и творческая работа, где дети смогут себя проявить в тематике недели. ", "description": "", "url": "" },
        { "date": "2020-07-14 09:00:00", "title": "13-17.07.2020 Неделя Мира. По случаю Дня украинского миротворца, который отмечается 15 июля, в течение недели будут организованы игры, беседы и творческая работа, где дети смогут себя проявить в тематике недели. ", "description": "", "url": "" },
        { "date": "2020-07-15 09:00:00", "title": "13-17.07.2020 Неделя Мира. По случаю Дня украинского миротворца, который отмечается 15 июля, в течение недели будут организованы игры, беседы и творческая работа, где дети смогут себя проявить в тематике недели. ", "description": "", "url": "" },
        { "date": "2020-07-16 09:00:00", "title": "13-17.07.2020 Неделя Мира. По случаю Дня украинского миротворца, который отмечается 15 июля, в течение недели будут организованы игры, беседы и творческая работа, где дети смогут себя проявить в тематике недели. ", "description": "", "url": "" },
        { "date": "2020-07-17 09:00:00", "title": "13-17.07.2020 Неделя Мира. По случаю Дня украинского миротворца, который отмечается 15 июля, в течение недели будут организованы игры, беседы и творческая работа, где дети смогут себя проявить в тематике недели. ", "description": "", "url": "" },
    ];
    $('#eventCalendar').eventCalendar({
        jsonData: data,
        eventsjson: 'data.json',
        jsonDateFormat: 'human',
        startWeekOnMonday: true,
        openEventInNewWindow: true,
        dateFormat: 'DD-MM-YYYY',
        showDescription: false,
        locales: {
            locale: "ru",
            txt_noEvents: "Нет запланированных событий",
            txt_SpecificEvents_prev: "",
            txt_SpecificEvents_after: ":",
            txt_NextEvents: "Ближайшее событие:",
            txt_GoToEventUrl: "Смотреть ",
            moment: {
                "months" : [ "Январь","Февраль", "Март", "Апрель", "Май", "Июнь",
                "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь" ],
                "monthsShort" : [ "Янв", "Фев", "Мар", "Апр", "Май", "Июн",
                "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек" ],
                "weekdays" : [ "Воскресение", "Понедельник","Вторник","Среда","Четверг",
                "Пятница","Суббота" ],
                "weekdaysShort" : [ "Вс","Пн","Вт","Ср","Чт",
                "Пт","Сб" ],
                "weekdaysMin" : [ "Вс","Пн","Вт","Ср","Чт",
                "Пт","Сб" ]
            }
        }
    });
});