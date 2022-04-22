 <template>
  <div class="itemCard">
    <h3>{{ itemData.market_name}}</h3>
      <img :src="'https://steamcommunity-a.akamaihd.net/economy/image/'+itemData.icon_url">

      <ul>
    
    <li>Average Selling Price Yesterday:{{itemData.avg_price_yesterday}}</li>
     <li>Number of Sold Items Yesterday: {{itemData.number_sales_yesterday}}</li>
     <li>Average Selling Price Last 30 Days: {{itemData.avg_price_30}}</li>
     <li>Average Number of Sales last 30 Days: {{itemData.avg_sales_30}}</li>
    </ul>
  </div>
</template>
 
 <script>
export default {
  props: ["itemData"],
};
</script>
 
 <style>
 .itemCard{
     display:flex;
     flex-direction: column;
     background: rgba(7, 16, 27,0.6);
     margin: 20px 20px;
     border-radius: 5px;
     padding: 5px 5px;
     border: 1px solid rgb(12, 189, 106);
     align-items: center;
 }

 .itemCard:hover{
  border: 1px solid crimson;
 }

 ul{
   list-style: none;
   
   padding:0;

   
   
 }

 li{
  
   margin: 5px 5px;
   border-radius: 7px;
   border: 1px solid grey;
   padding: 1px 10px
   

 }

 .itemCard img{
     width: 70%;
 }
</style>