$(document).ready(function(){

    // $('.card').hover(
    //     function(){
    //         alert("Entrou")
    //     },
    //     function(){
    //         alert('Saiu')
    //     }
    // )
    var api = ('http://api.openweathermap.org/data/2.5/forecast?lat=-23.5489&lon=-46.6388&appid=b9bbbe6e3f56141ab71507d03a151347')
    $.get(api, function(data,err){
            console.log(data);
            var lista = data.list;
            var cidade = data.city.name;

            for(x = 0; x<3; x++){
                var hor = lista[x].dt_txt;
                var dia = hor.slice(8,10);
                var mes = hor.slice(5,7)
                var ano = hor.slice(0,4)
                hor = hor.slice(10,16);
                // alert("DIA = " + dia + " MES = "+ mes + " ANO = "+ ano)

                var temp = (lista[x].main.temp)-273.15;
                temp = (temp.toString());

                var cond = lista[x].weather[0].main;
                var weather = '';
                if(cond == 'Clouds'){
                    weather = '/icons/cloudy.svg'
                }else if(cond == 'Rain'){
                    weather = '/icons/rainy-5.svg'
                }else if(cont == 'Clear'){
                    weather = '/icons/day.svg'
                }

                var icon_element = '#icon' + (x+1);
                var hor_element = '#horario'+ (x+1);
                var temp_element = '#temp' + (x+1);

                $(hor_element).append(hor + 'h');
                $(icon_element).attr('src',weather);
                $(temp_element).append(temp.slice(0,5) + '°C');
            }

            $('.title').append('Clima - SP - ' + cidade + ' - ' + dia + '/' + mes + '/' + ano)
            
            // var hor1 = lista[0].dt_txt;
            // var temp1 = (lista[0].main.temp)-273.15;

            // hor1 = hor1.slice(10,16);
            // $('#horario1').append(hor1);
            // $('#temp1').append(temp1)
        }
    )
    // if(request.success){
    //     alert(cidade)
    // }else{
    //     alert("Error. Please try again later")
    // }
});
