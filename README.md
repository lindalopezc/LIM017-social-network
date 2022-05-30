# 📱Red Social: Slowly

## 💻Preámbulo

Instagram, Snapchat, Twitter, Facebook, Twitch, Linkedin, etc. Las redes sociales han invadido nuestras vidas. Las amamos u odiamos, y muchos no podemos vivir sin ellas. Hay redes sociales de todo tipo y para todo tipo de intereses, que permiten a personas, en (casi) cualquier lugar del mundo, compartir contenido en tiempo real y de manera eficiente y rápida. Formamos así comunidades en donde la discusión e interacción es posible.
![imagen-redes-sociales](https://blog.up.edu.mx/hubfs/PrepaUP/PrepaUP-Femenil/Blog-Images/RRSS.jpg)

## 📝Introducción 

Frente a la busqueda de una temática innovadora para la creación de una red social, nos inspiramos de un movimiento llamado **Slow Fashion** que aboga por la compra de prendas de mejor calidad, que duren mas tiempo y que valora el trato justo de las personas, los animales y el planeta en todo el proceso de producción.
Con esa idea nace **SLOWLY** es una red social que permite crear una comunidad alrededor de la idea de que se le puede dar una 'segunda vida' a las prendas, brindando la oportunidad de poder intercambiar, vender, comprar y/o donar ropa de segunda mano en lugar de desecharlas.
![Imagen text](https://github.com/angelicabolivar/LIM017-social-network/blob/dev/src/img/img-readme/inicio-desktop.png)
 
## 📎Descripción del proyecto

#### ¿Quiénes son los principales usuarios del producto?

Los principales usuarios de Slowly son todas aquellas personas que se encuentren interesadas por la moda sostenible, bajo la tendencia de *Slow fashion*; la cual aboga por la compra de prendas de mejor calidad que duren más tiempo, valora el trato justo de las personas, los animales y el planeta a lo largo del proceso; además de animar a comprar menos prendas con menos frecuencia, y a optar por la segunda mano mientras sea posible. 
De acuerdo a la investigación realizada por nuestro equipo con el fin de conocer los hábitos de nuestros usuarios con respecto al tratamiento que le dan a la ropa que ya no usan, se encontró que el 80% de los encuestados hacen una donación, el 23% la desecha y el 8% la vende. 

#### ¿Qué problema resuelve el producto? 

La industria de la moda es la segunda más contaminante en el mundo. Según la Agencia Internacional de la Energía, en 2015 la producción textil emitió el equivalente a 1,2 billones de toneladas de CO2, más que las que expulsaron a la atmósfera el transporte marítimo y la aviación internacional, juntos.
Además, el sector textil gasta, cada año, una media de 93.000 millones de metros cúbicos de agua, a lo que hay que añadir la contaminación por tintes y por el tratado de los tejidos, prácticas culpables del 20% de la polución global del agua.

### Proceso creativo del diseño
![Imagen text](https://github.com/angelicabolivar/LIM017-social-network/blob/dev/src/img/img-readme/Historias%20de%20usuario.png)

#### Criterios de aceptación y Definición de terminado

#### 📍Historia Usuario 1 

*Criterios de aceptación*

* El usuario  puede ingresar su correo valido.
* El usuario no puede ingresar con correo electrónico ya existente en la plataforma.
* Informar al usuario si su correo es válido o no.
* El usuario puede iniciar sesión con su cuenta de google.
* El usuario ingrese mínimo 6 caracteres.

*Definición de terminado*

* Las funciones pasan test.
* Almacenamiento de nuevos usuarios.
* Diseño responsive.
* Producto final es semejante a prototipo de alta fidelidad.
* Despliegue de aplicación con etiqueta de la versión (Git Tag).

#### 📍Historia Usuario 2 

*Criterios de aceptación*

* Crear un espacio donde el usuario pueda subir una foto.
* Crear campos donde el usuario pueda colocar título, estado, categoría y breve descripción de la prenda que desea publicar.
* Conectar Firestorage con la imagen que el usuario ha cargado de sus archivos.
* Conectar la base de datos de firestore con los textos que el usuario ha colocado en cada campo y retornarlo en la vista Home.

*Definición de terminado*

* Las funciones pasan test.
* Almacenamiento de fotos por publicación en firestorage.
* Diseño responsive.
* Producto final es semejante a prototipo de alta fidelidad.
* Despliegue de aplicación con etiqueta de la versión (Git Tag).

#### Historia Usuario 3

*Criterios de aceptación*

* Implementar botones en la vista Home para filtrar por categoría.
* Mostrar los post filtrados de acuerdo a la categoría elegida por el usuario.Home.

*Definición de terminado*

* Las funciones pasan test.
* Diseño responsive.
* Producto final es semejante a prototipo de alta fidelidad.
* Despliegue de aplicación con etiqueta de la versión (Git Tag).

#### 📍Historia Usuario 4 

*Criterios de aceptación*

* Implementar una vista 'perfil' donde el usuario puede introducir sus datos de contacto.
* Conectar los datos de contacto con el post que realiza el usuario y que se visualice la foto de perfil.
* Implementar una ventana modal para mostrar los datos de contacto a otras personas.

*Definición de terminado*

* Las funciones pasan test.
* Las personas pueden ver la información de contacto de otros usuarios en sus post a través de la ventana modal.
* Se puede ver la foto de perfil de los usuarios en cada uno de sus posts.
* El usuario puede introducir sus datos de contacto. 
* Diseño responsive.
* Producto final es semejante a prototipo de alta fidelidad.
* Despliegue de aplicación con etiqueta de la versión (Git Tag).


#### 📍Historia Usuario 5 

*Criterios de aceptación*

* Implementar un botón de editar post.
* Implemantar un botón de eliminar post.
* Colocar ícono de dar like y quitar like a una publicación.

*Definición de terminado*

* El usuario puede editar un post y modificar los campos que desee.
* El usuario puede dar like y quitarlo, además ver cuántos likes posee una foto.
* El diseño de la red social es responsive.
* Las funciones implementadas pasan los test.
* Se realizó test de usabilidad.
* Producto final es semejante a prototipo de alta fidelidad.
* Despliegue de aplicación con etiqueta de la versión (Git Tag).


#### Diseño de alta fidelidad

![Imagen text](https://github.com/angelicabolivar/LIM017-social-network/blob/dev/src/img/img-readme/welcome-desktop.png)
![Imagen text](https://github.com/angelicabolivar/LIM017-social-network/blob/dev/src/img/img-readme/inicio-desktop.png)

#### Producto final

![Imagen text](https://github.com/angelicabolivar/LIM017-social-network/blob/dev/src/img/img-readme/final-home-desktop.png)
![Imagen text](https://github.com/angelicabolivar/LIM017-social-network/blob/dev/src/img/img-readme/final-publicar-desktop.png)
![Imagen text](https://github.com/angelicabolivar/LIM017-social-network/blob/dev/src/img/img-readme/final-perfil-deskttop.png)

