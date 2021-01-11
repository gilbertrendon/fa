# frontAlcald
Front end de la prueba de la alcaldía
Para relacionar las tablas en las vistas se harán combobox que impedirán que se inserten datos que no existen en la bd

# Mocks

https://www.google.com/search?q=mock+en+programacion+que+es&newwindow=1&safe=active&sxsrf=ALeKk02yB_dSSdLYf06ykp6-SxBLs7a8pQ:1609956486579&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjMzPGj84fuAhVrUt8KHeEiB-YQ_AUoAXoECAkQAw&biw=1024&bih=657

NOTA: Estos mocks se relacionan con la parte del controlador que en muchos casos es respecto a pruebas como por ejemplo los assert, entonces debo preguntar bien por eso(Whats). 

# Material de apoyo
https://www.youtube.com/watch?v=84YlkcuFeAk&t=2s (voy en el minuto 53)

# Observaciones importantes

--PRIMERO SE SELECCIONAN LA CIUDAD DE ORIGEN Y DESTINO
--El horario se trabajará con hora militar y se mostrarán en un combobox de los horarios entre esos dos destinos
--Las ciudades con las que se trabajará inicialmente son: Medellín, Bogotá, Rionegro

--psudocodigo:
-- arreglo vuelosconhorariosproisblesentredestinos
--...
-- let cityinitinsertbyuser //la ciudad de partida que ingresa el usuario
-- let cityfinalinsertbyuser // >>         destino >>

--for(let i in res) //res es el json que me retorna el servicio
--if((i["cityinit"] == cityinitinsertbyuser)&&(i["cityend"] == cityfinalinsertbyuser){
--	vuelosconhorariosproisblesentredestinos.add(i)
--}
-- esto se usa para luego mostrar en una vista que sería la vista de las tarifas



--Otras posibles clases: flight(`idflight`, `state`, `hourinit`, `houraend`, `cityinit`, `cityend`,seats, cost)
-- las tarifas son gráficas que dependiendo de las ciudades tienen un costo diferente
--los estados del vuelo pueden ser in progress, pending, over,...  
-- Para los asientos simplemente se pondrá para cada vuelo 20 asientos y cada que se reserva se le resta
-- uno a los asientos

--NOTA: Cuando reservo un vuelo, estoy haciendo un update(primero tendrá un seat menos, también se actualiza el estado)
-- Lo anterior asumiendo que para un vuelo solo importa su estado si almenos tiene un tipulante

--Para estos updates mencionados se borrará el vuelvo con el id seleccionado de vuelosconhorariosproisblesentredestinos de la BD
--Luego se insertará el nuevo elemento selccionado de vuelosconhorariosproisblesentredestinos

--El siguiente save se deja pero no es OBLIGATORIO POR EL MOMENTO
--pseudocódigo(java):
--@PostMapping("/addflight")
--public Flight saveFlight(@RequestBody Flight flight){
--  service deleteFlightById(idflight); //Este método va en los services(por ejemplo en el proyecto crud hay guía)
--	return service.saveFlightToDB(flight) //saveFlightToDB va en los services
--}
--NOTA: Si por alguna razón se duplican elementos con la misma clave primaria mirar el proyecto crud en CrudRestController


--PARA LAS RESERVAS VA UN SAVE COMO EL ANTERIOR, ADEMÁS
-- En donde se reserva se hará un filtro donde se pondra: cityinit-cityend(este tendrá el autocompletado), luego un select box
-- donde se seleccionará el usuario quien reserva


--NOTA:EN EL 56:13 se crean productos con un form, pero yo pienso hacer la reserva desde button normal