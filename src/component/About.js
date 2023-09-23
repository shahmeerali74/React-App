import React from 'react'


export default function About(props) {  

  let mystyle={
    color:props.mode==='dark'?'white':"black",
    backgroundColor:props.mode==='dark'?'#884d3b':'white',
    border:"2px solid",
    borderColor:props.mode==="dark"?"white":"black",
  }

  const shahmeer=()=>{
    props.showSuccess("you have clicked shahmeer","success");
  }




  return (
    <div className='container my-5' style={{width:"50%"}}>
      <div id="list-example"  className="list-group" >
        <a className="list-group-item list-group-item-action" style={mystyle}  href="#list-item-1" onClick={shahmeer}>Click here if wants to know about Shahmeer</a>
        <a className="list-group-item list-group-item-action" style={mystyle} href="#list-item-2">Click here if wants to know about Ali</a>
        <a className="list-group-item list-group-item-action" style={mystyle} href="#list-item-3">Click here if wants to know about Shouib</a>
        <a className="list-group-item list-group-item-action" style={mystyle} href="#list-item-4">Click here if wants to know about Iftikhar</a>
      </div>
<div data-spy="scroll" data-target="#list-example" data-offset="0" className="scrollspy-example my-5">
  <h4 id="list-item-1">Shahmeer</h4>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum dignissimos iste molestias nulla eaque pariatur eligendi doloremque nam veniam. Laudantium natus labore beatae qui sequi nulla aliquid magni dolor ab?
  Quo debitis nulla delectus tempora id perspiciatis porro necessitatibus? Praesentium, natus? Odio voluptates eos tenetur cupiditate laudantium rerum, ea expedita deserunt corrupti. Consectetur quibusdam, laborum error velit nihil commodi hic.
  Nisi laboriosam, facilis alias autem dignissimos nesciunt ullam aliquam eos, sit voluptate dicta harum? Quae iure tempore cum iusto culpa aperiam laborum libero at. Id sed ipsa quaerat possimus ex!
  Tempore laudantium tempora suscipit cum consequatur, et maxime velit nobis ullam possimus non repellendus nesciunt molestiae iure laborum voluptas recusandae voluptatem ex, quo odit, molestias omnis. Possimus quasi officia soluta.
  Voluptatibus quod sunt veniam similique aliquid doloremque eius perspiciatis repudiandae rerum possimus esse amet nemo ullam laborum quos, corporis, ad sint inventore alias unde? Earum expedita nihil totam quidem dolores.
  Officia expedita possimus rerum impedit reprehenderit ullam eos molestiae beatae ab! Quasi tenetur porro quo tempore velit, fugit aspernatur expedita molestiae veritatis ducimus cum suscipit molestias esse natus. Cumque, aliquid.
  Quaerat, laborum omnis. Delectus eaque accusantium veritatis labore cupiditate commodi fugit recusandae, corporis vitae porro odio explicabo ea sequi ullam ab eligendi minus dolores accusamus aliquam? Reprehenderit placeat dicta quidem.
  Aliquid adipisci voluptatem velit error nesciunt minima molestiae itaque tenetur incidunt, optio illum sapiente, unde sed, labore quae deserunt voluptatibus voluptates saepe mollitia cumque eaque necessitatibus pariatur perspiciatis! Enim, temporibus!
  Modi deleniti autem ea ad exercitationem dolore, consequatur voluptatum, similique tenetur inventore commodi id nemo numquam animi. Eos et tempora quidem aperiam perferendis? Ad porro alias atque, dolor accusamus accusantium.
  At natus, asperiores, in officia voluptatem tempore, totam sit dolorum maiores eaque impedit distinctio aut neque numquam est culpa! Odio sunt quasi sint ipsa, unde amet quo expedita quaerat autem!</p>
  <h4 id="list-item-2">Ali</h4>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nobis, omnis repellendus odit laborum sequi quam accusamus sapiente sed assumenda odio vel nostrum, corporis natus quos, architecto cumque dolor recusandae!
  Quam unde tempore iusto perferendis. Doloremque dolorum libero illum fuga, magni ex et est omnis neque accusamus aliquid quidem facilis sint sequi, explicabo odit! Labore inventore eos nobis voluptate temporibus.
  Reiciendis, quos laudantium voluptatum eveniet quaerat, itaque unde quae aspernatur neque quas voluptas illum rerum saepe dolor deleniti cumque voluptatibus nulla accusamus. Illum cumque vitae deleniti ipsum, doloremque neque nesciunt.
  Est, ratione nobis quam dolorum tenetur dolorem enim. Soluta amet quasi, quia, laboriosam eaque natus, tempore expedita tempora quae magni veniam aut et magnam nobis molestias obcaecati iusto officiis esse.
  Accusantium, veritatis adipisci voluptatibus excepturi magni doloribus quis soluta sit dignissimos possimus libero ab, ratione impedit beatae cum mollitia pariatur magnam incidunt maiores vel. Adipisci facilis nihil repellendus saepe voluptatum.
  At eos velit ipsa odit corporis sit atque suscipit, qui quae unde similique sapiente dolorum reiciendis ipsam rerum tenetur aspernatur perspiciatis quo reprehenderit cumque! Quidem perferendis quos quibusdam commodi unde?
  Facilis magnam possimus tempore dolorem expedita earum reprehenderit, eligendi laboriosam recusandae sequi impedit culpa debitis, harum ad dolor assumenda nobis dolorum? Omnis dolorem iusto provident! Deserunt neque perspiciatis doloremque eos.
  Accusantium hic aliquam, temporibus harum debitis similique molestias, aperiam aspernatur explicabo earum quis saepe expedita est praesentium? Sequi suscipit ipsam laboriosam! Itaque dignissimos atque adipisci quisquam laboriosam suscipit quasi blanditiis.
  Corrupti aliquid eligendi commodi deleniti nobis excepturi ad, aut hic odit! Autem ratione aspernatur voluptates, ullam quam magnam veniam nihil culpa, id perspiciatis dolores animi? Neque earum laboriosam exercitationem vero?
  Unde repellendus, consequuntur modi, eos deleniti maxime distinctio, earum tenetur mollitia sequi voluptates natus repellat voluptatum saepe suscipit hic cupiditate nulla sed possimus dolorem? Expedita placeat error voluptatibus magnam eligendi.</p>
  <h4 id="list-item-3">Shouib</h4>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quam natus exercitationem asperiores maiores fugit et error molestiae doloremque fuga. Quod, sequi! Eos voluptate doloribus sit quos, assumenda eaque accusantium!
  Rerum, perspiciatis nisi at dolores earum nostrum eius, voluptate quis numquam repellendus consequatur. Nobis nulla et vitae odit sint eos, doloremque earum. Reprehenderit doloremque commodi est incidunt quaerat! Quidem, quibusdam?
  Minima totam nesciunt adipisci fuga tempora accusantium sed eos! Dolorum suscipit ipsum autem ratione. Qui accusamus similique reiciendis natus, perspiciatis nesciunt officiis impedit. Blanditiis autem aliquam, ut deleniti delectus doloribus.
  Incidunt laudantium quas ullam fuga voluptates tenetur ut omnis. Minus sapiente dolor facilis voluptates delectus iste a, necessitatibus hic quis, aliquam nulla laborum incidunt. Sequi assumenda unde quod quibusdam facere.
  Nemo, repudiandae fuga. Voluptates consequatur impedit eos quo aut, provident fugiat vel sequi ipsum mollitia eius molestias officiis delectus iste assumenda neque exercitationem alias laborum dignissimos harum architecto facere quas.
  Delectus libero reprehenderit harum, et quidem laudantium ipsam vero veritatis nam aperiam placeat qui pariatur illo temporibus praesentium cum voluptatem molestiae! Consequuntur doloremque tempore minus quo pariatur eius voluptates maiores.
  Rerum molestiae corporis molestias fuga eius, voluptatum, qui ab dolor itaque deserunt pariatur, cumque ut dolorum vel modi inventore facilis earum et possimus quas maxime quae quo consectetur. Explicabo, illum?
  Veniam id obcaecati omnis nulla dolorum dolorem. Sequi impedit aliquid similique placeat minus suscipit aspernatur numquam, ipsam itaque saepe porro dolor enim eius sapiente velit commodi delectus inventore laborum voluptates?
  Earum, reiciendis. At qui, alias neque dolorum eveniet ipsam quibusdam sequi excepturi mollitia, ut rerum eos aliquam consequatur deserunt earum ad eum animi adipisci sit voluptates! Quos minus porro dicta.
  Ea accusamus, suscipit minus perspiciatis nostrum repudiandae nobis magnam hic! Inventore asperiores quibusdam ex laudantium nisi quas in quod nemo illum, numquam rerum iusto, harum iste facilis nulla exercitationem distinctio.</p>
  <h4 id="list-item-4">Iftikhar</h4>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint illo eum delectus veritatis enim autem placeat minus accusamus obcaecati non qui, mollitia temporibus provident dolore, explicabo libero ex hic? Perferendis.
  Impedit quia hic consectetur. Natus, recusandae sunt placeat reprehenderit tempore harum similique dolorum cum veniam, vero facere, dignissimos beatae quas tenetur alias ab expedita asperiores libero quaerat repellendus consequatur soluta.
  Consectetur amet adipisci sequi qui labore provident dolor. Vitae fuga aspernatur dolores? Distinctio, debitis sapiente voluptatibus quisquam, esse repudiandae qui consequatur tenetur officiis odit eligendi omnis molestias recusandae vel dolor?
  Quae quisquam accusamus in tempore quo, ipsum ad numquam! Temporibus, repudiandae repellat atque consectetur harum id, eum ea quae vitae vel labore quidem illo voluptas beatae voluptate earum voluptatum voluptates.
  Commodi natus magnam ab id voluptas libero veritatis. Ullam praesentium dolores sed laboriosam autem fugiat ab nisi odit maxime, fugit aliquid possimus asperiores corporis reiciendis quas itaque distinctio in facilis.
  Quod dolorum sint rerum officia molestias consequatur, quidem inventore laudantium placeat consequuntur distinctio harum optio cum nobis reprehenderit commodi debitis labore. Assumenda, iusto. Quod modi et repudiandae nesciunt, nam ut.
  Nesciunt expedita laudantium aliquid beatae numquam. Tenetur, ullam necessitatibus quam, laboriosam deserunt inventore odio est quibusdam tempora assumenda neque recusandae fugit similique cumque soluta sunt enim blanditiis itaque dolorem at!
  Laborum eos est nihil repudiandae veritatis? Ipsam quia quaerat qui quidem nobis fugit perspiciatis voluptatibus ullam doloremque, voluptas impedit similique ducimus itaque numquam nulla illo doloribus alias reiciendis ab architecto.
  Amet, distinctio cum reiciendis facilis a inventore ea, laboriosam quam sequi architecto fugiat unde dolore dolor dolores et at obcaecati veritatis nulla quis tempora deserunt placeat. Voluptatum nobis autem ex.
  At maxime omnis consequuntur aut, laborum suscipit saepe? Sit beatae repellendus quidem enim quas libero nam laborum quisquam, impedit nemo pariatur veniam repellat incidunt iure, consectetur eaque laudantium suscipit ab!</p>
</div>
    </div>
  )
}
