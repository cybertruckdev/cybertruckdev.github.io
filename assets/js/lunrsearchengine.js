
var documents = [{
    "id": 0,
    "url": "https://cybertruck.dev/404.html",
    "title": "404",
    "body": "404 Page does not exist!Please use the search bar at the top or visit our homepage! "
    }, {
    "id": 1,
    "url": "https://cybertruck.dev/about",
    "title": "About Cybertruck.dev",
    "body": " Cybertruck. dev is coming soon "
    }, {
    "id": 2,
    "url": "https://cybertruck.dev/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 3,
    "url": "https://cybertruck.dev/",
    "title": "Home",
    "body": "      Featured:                                                                                                                                                                                                             The Cybertruck's Arrival in Missouri - A New Chapter in Automotive Innovation                              :               The Cybertruck’s Arrival in Missouri: A New Chapter in Automotive Innovation:                                                                       20 Aug 2022                                                                                                                                                                                                                                                                                                                    First Post                              :               Welcome to Cybertruck. dev! Stay tuned!:                                                                       20 Aug 2022                                                                                                                      All Stories:                                                                               The Cybertruck's Arrival in Missouri - A New Chapter in Automotive Innovation              :       The Cybertruck’s Arrival in Missouri: A New Chapter in Automotive Innovation:                               20 Aug 2022                                                                                                              First Post              :       Welcome to Cybertruck. dev! Stay tuned!:                               20 Aug 2022                                            "
    }, {
    "id": 4,
    "url": "https://cybertruck.dev/About",
    "title": "",
    "body": ""
    }, {
    "id": 5,
    "url": "https://cybertruck.dev/redirects.json",
    "title": "",
    "body": "{“/About”:”https://cybertruck. dev/about”} "
    }, {
    "id": 6,
    "url": "https://cybertruck.dev/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 7,
    "url": "https://cybertruck.dev/cybertruck-missouri",
    "title": "The Cybertruck's Arrival in Missouri - A New Chapter in Automotive Innovation",
    "body": "2022/08/20 - The Cybertruck’s Arrival in Missouri: A New Chapter in Automotive InnovationMissouri, long known for its contributions to the automotive industry, is soon to become one of the latest states to welcome Tesla’s futuristic electric vehicle, the Cybertruck. Set to disrupt the trucking market with its radical design and cutting-edge technology, the Cybertruck is poised to make a significant impact in the Show-Me State. Tesla’s Cybertruck: A Quick Overview: The Cybertruck, announced by Tesla in 2019, is a fully electric pickup truck that challenges the conventional automotive design. With its angular, stainless steel exterior and innovative electric drivetrain, the Cybertruck has captured the imagination of auto enthusiasts and tech-savvy consumers alike. Featuring a 100 cubic feet of exterior, lockable storage, the Cybertruck aims to provide utility and performance without compromising on environmental sustainability. With different models offering a range of up to 500 miles on a single charge and the ability to tow over 14,000 pounds, it is seen as a serious competitor to traditional fossil fuel-powered trucks. Missouri’s Automotive History: Missouri has a rich history in the automotive industry. Kansas City and St. Louis have been home to several major car manufacturing plants, contributing significantly to the economy and technological development in the area. The arrival of the Cybertruck is seen as a continuation of this tradition, marking a new era of innovation and progress in automotive manufacturing and electric vehicle adoption. The Demand for Electric Vehicles in Missouri: In recent years, Missouri has seen a growing interest in electric vehicles (EVs). The state government has been proactive in supporting EV adoption through incentives, charging infrastructure, and collaboration with industry leaders. With the Cybertruck’s arrival, there is anticipation for a surge in consumer interest in electric trucks, particularly among those involved in agriculture, construction, and other industries that rely heavily on pickup trucks. The Cybertruck’s blend of power and efficiency is expected to appeal to a wide range of consumers across the state. Economic Impact: The introduction of the Cybertruck to Missouri may also have significant economic implications. Beyond the consumer market, the Cybertruck may find applications in various commercial sectors, potentially generating new business opportunities and jobs. Local dealerships and service centers may also see growth, as they adapt to the increasing demand for electric vehicles and the specific needs of Cybertruck owners. Collaboration between Tesla and local educational institutions for training and research could foster innovation and skill development in the region. Challenges and Concerns: While excitement surrounds the Cybertruck’s arrival, there are challenges and concerns to address. The unique design of the Cybertruck may require adaptations in service infrastructure. The continued expansion of charging stations will be crucial to support new Cybertruck owners. Moreover, the state’s readiness to embrace this new technology in terms of regulations, safety standards, and public perception may shape the Cybertruck’s success in Missouri. Conclusion: The Cybertruck’s arrival in Missouri is more than a new vehicle entering the market; it’s a symbol of the ongoing shift toward sustainable transportation and a new chapter in the state’s proud automotive history. The success of the Cybertruck in Missouri will depend on various factors, including consumer acceptance, infrastructure development, and collaboration between Tesla and local stakeholders. However, the excitement and anticipation surrounding this futuristic vehicle suggest that the Show-Me State is ready to embrace the Cybertruck as a part of its automotive future. Picture Source "
    }, {
    "id": 8,
    "url": "https://cybertruck.dev/first-post",
    "title": "First Post",
    "body": "2022/08/20 - Welcome to Cybertruck. dev! Stay tuned! (Photo courtesy of Ed Runnion) "
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow-lg" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-danger btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><small><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});