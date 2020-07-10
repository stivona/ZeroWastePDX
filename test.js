<script type="text/javascript">
var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyjHtQ8uncyIrJ1A'}).base('appffTsmWo1LKPmRg');
base('Bulk Inventory- Portland, OR').select({
    // Selecting the first 3 records in Bulk Inventory:
    maxRecords: 3,
    view: "Bulk Inventory"
}).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.
    records.forEach(function(record) {
        console.log('Retrieved', record.get('Product'));
    });
    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();
}, function done(err) {
    if (err) { console.error(err); return; }
});
</script>
