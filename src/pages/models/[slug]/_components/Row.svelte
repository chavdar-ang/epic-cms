<script>
  import _ from "lodash";
  import schema from "../../../../database/schema";
  export let item, model;

  // check user list -> :address.city :address.street

  //  console.log('flat', Object.keys(model.list).flat(2));

  // render schema function

  let list = model.list;

  let column = field => {
    if (list[field].indexOf(":") === -1) return item[field];

    const regex = /:[a-z.]+/g;
    let matches = list[field].match(regex);

    // console.log("field", list[field]);

    

    // test.replace(":address.street", "test");

    // console.log('res ', res);
    let test = list[field];

    // test.replace(":", "1");

    // console.log('zzz', test.replace(":", "1"));


    matches.map(m => {
      console.log("m:", m);
      // return `${_.get()}`
      // return _.get(item, [m]);

      // console.log('zxc', field);
      // let rep = `:${m}`;

      // console.log('res:', res, 'replaced:', res.replace(`:${m}`, "test"));

      
      test = test.replace(m, "test");
      return test;
      // console.log('test1', test);
      // res.replace(m, "test");
    });
    console.log("full", test);

    // return test;

    // console.log('matches', matches);

    return "nothing";
  };
</script>

<tr>
  {#each Object.keys(list) as field}
    <td>{column(field)}</td>
  {/each}
  <td>
    <a href="/models/{model.settings.slug}/update/{item['_id']}"> Edit</a>
  </td>
  <td>Delete</td>
</tr>
