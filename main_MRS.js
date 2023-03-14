//-------------------------------------------------------/
 // Original Code Structure: Dr Ioannis Kypraios         /
 // Modified by: Preethi Leelavathy                      /
 //Project: Smart Music Recommendation System            /
 //Description: Development Platform                     /
 //             for PDF Report                           /
 //Date: September-2nd 2022                              /
 //------------------------------------------------------/

//============================================================================//
//============================================================================//


//----------------------------------------------------------------------------//
// Create the references to the buttons and the other HTML layout Elements;
// Use querySelector (jquery) for referencing the HTML parts;
const saveButton2 = document.querySelector("#Add");
const exportButton = document.querySelector("#export");

var canvas = document.querySelector("#myCanvas");//canvasjs chart
var canvas2 = document.querySelector("#myCanvas2");//logo
var canvas2a = document.querySelector("#myCanvas2a");//smartnote1
var canvas2b = document.querySelector("#myCanvas2b");//smartnote2
var canvas2c = document.querySelector("#mycanvas2c");//smartnote3
var canvas2d = document.querySelector("#mycanvas2d");//smartnote4
var canvas2e = document.querySelector("#mycanvas2e");//smartnote5
var canvas2f = document.querySelector("#mycanvas2f");//smartnote6
var canvas2g = document.querySelector("#mycanvas2g");//smartnote7
var canvas2h = document.querySelector("#mycanvas2h");//smartnote8
var canvas2i = document.querySelector("#mycanvas2i");//smartnote9
var canvas2j = document.querySelector("#mycanvas2j");//smartnote10
var canvas2k = document.querySelector("#mycanvas2k");//smartnote11
var canvas2l = document.querySelector("#mycanvas2l");//smartnote12
var canvas2m = document.querySelector("#mycanvas2m");//smartnote13
var canvas2n = document.querySelector("#mycanvas2n");//smartnote14
var canvas2o = document.querySelector("#mycanvas2o");//smartnote15
var canvas2p = document.querySelector("#mycanvas2p");//smartnote16
var canvas2q = document.querySelector("#mycanvas2q");//smartnote17
var canvas2r = document.querySelector("#mycanvas2r");//smartnote18
var canvas2s = document.querySelector("#mycanvas2s");//smartnote19
var canvas2t = document.querySelector("#mycanvas2t");//smartnote20
var canvas2u = document.querySelector("#myCanvas2u");//smartnote21
var canvas2v = document.querySelector("#myCanvas2v");//smartnote22
var canvas2w = document.querySelector("#mycanvas2w");//smartnote23
var canvas2x = document.querySelector("#mycanvas2x");//smartnote24
var canvas2y = document.querySelector("#mycanvas2y");//smartnote25
var canvas2z = document.querySelector("#mycanvas2z");//smartnote26
var canvas2aa = document.querySelector("#mycanvas2aa");//smartnote27
var canvas2bb = document.querySelector("#mycanvas2bb");//smartnote28
var canvas2cc = document.querySelector("#mycanvas2cc");//smartnote29
var canvas2dd = document.querySelector("#mycanvas2dd");//smartnote30
var canvas2ee = document.querySelector("#myCanvas2ee");//smartnote31
var canvas2ff = document.querySelector("#myCanvas2ff");//smartnote32
var canvas2gg = document.querySelector("#mycanvas2gg");//smartnote33
var canvas2hh = document.querySelector("#mycanvas2hh");//smartnote34
var canvas2ii = document.querySelector("#mycanvas2ii");//smartnote35
var canvas2jj = document.querySelector("#mycanvas2jj");//smartnote36
var canvas2kk = document.querySelector("#mycanvas2kk");//smartnote37
var canvas2ll = document.querySelector("#mycanvas2ll");//smartnote38
var canvas2mm = document.querySelector("#mycanvas2mm");//smartnote39
var canvas2nn = document.querySelector("#mycanvas2nn");//smartnote40
var canvas2oo = document.querySelector("#myCanvas2oo");//smartnote41
var canvas2pp = document.querySelector("#myCanvas2pp");//smartnote42
var canvas2qq = document.querySelector("#mycanvas2qq");//smartnote43
var canvas2rr = document.querySelector("#mycanvas2rr");//smartnote44
var canvas2ss = document.querySelector("#mycanvas2ss");//smartnote45
var canvas2tt = document.querySelector("#mycanvas2tt");//smartnote46
var canvas2uu = document.querySelector("#mycanvas2uu");//smartnote47
var canvas2vv = document.querySelector("#mycanvas2vv");//smartnote48
var canvas2ww = document.querySelector("#mycanvas2ww");//smartnote49
var canvas2xx = document.querySelector("#mycanvas2xx");//smartnote50
//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//

// defining variables

var numEmotionsCats;

//smartnote1
//document fields
var album_name1;
var artist_name1;
var duration1;
var emotion1;
var emotion1_value;
var genre1;
var genre1_value;
var location1;
var ranking1;
var ranking1_parsed;
var ranking1_value;
var year1;
var score1_ED;

//smartnote2
//document fields
var album_name2;
var artist_name2;
var duration2;
var emotion2;
var emotion2_value;
var genre2;
var genre2_value;
var location2;
var ranking2;
var ranking2_parsed;
var ranking2_value;
var ranking2_value;
var year2;
var score2_ED;

//smartnote3
//document fields
var album_name3;
var artist_name3;
var duration3;
var emotion3;
var emotion3_value;
var genre3;
var genre3_value;
var location3;
var ranking3;
var ranking3_parsed;
var ranking3_value;
var year3;
var score3_ED;

//smartnote4
//document fields
var album_name4;
var artist_name4;
var duration4;
var emotion4;
var emotion4_value;
var genre4;
var genre4_value;
var location4;
var ranking4;
var ranking4_parsed;
var ranking4_value;
var year4;
var score4_ED;

//smartnote5
//document fields
var album_name5;
var artist_name5;
var duration5;
var emotion5;
var emotion5_value;
var genre5;
var genre5_value;
var location5;
var ranking5;
var ranking5_parsed;
var ranking5_value;
var year5;
var score5_ED;

//smartnote6
//document fields
var album_name6;
var artist_name6;
var duration6;
var emotion6;
var emotion6_value;
var genre6;
var genre6_value;
var location6;
var ranking6;
var ranking6_parsed;
var ranking6_value;
var year6;
var score6_ED;

//smartnote7
//document fields
var album_name7;
var artist_name7;
var duration7;
var emotion7;
var emotion7_value;
var genre7;
var genre7_value;
var location7;
var ranking7;
var ranking7_parsed;
var ranking7_value;
var year7;
var score7_ED;

//smartnote8
//document fields
var album_name8;
var artist_name8;
var duration8;
var emotion8;
var emotion8_value;
var genre8;
var genre8_value;
var location8;
var ranking8;
var ranking8_parsed;
var ranking8_value;
var year8;
var score8_ED;
//smartnote9
//document fields
var album_name9;
var artist_name9;
var duration9;
var emotion9;
var emotion9_value;
var genre9;
var genre9_value;
var location9;
var ranking9;
var ranking9_parsed;
var ranking9_value;
var year9;
var score9_ED;

//smartnote10
//document fields
var album_name10;
var artist_name10;
var duration10;
var emotion10;
var emotion10_value;
var genre10;
var genre10_value;
var location10;
var ranking10;
var ranking10_parsed;
var ranking10_value;
var year10;
var score10_ED;

//smartnote11
//document fields
var album_name11;
var artist_name11;
var duration11;
var emotion11;
var emotion11_value;
var genre11;
var genre11_value;
var location11;
var ranking11;
var ranking11_parsed;
var ranking11_value;
var year11;
var score11_ED;

//smartnote12
//document fields
var album_name12;
var artist_name12;
var duration12;
var emotion12;
var emotion12_value;
var genre12;
var genre12_value;
var location12;
var ranking12;
var ranking12_parsed;
var ranking12_value;
var year12;
var score12_ED;

//smartnote13
//document fields
var album_name13;
var artist_name13;
var duration13;
var emotion13;
var emotion13_value;
var genre13;
var genre13_value;
var location13;
var ranking13;
var ranking13_parsed;
var ranking13_value;
var year13;
var score13_ED;

//smartnote14
//document fields
var album_name14;
var artist_name14;
var duration14;
var emotion14;
var emotion14_value;
var genre14;
var genre14_value;
var location14;
var ranking14;
var ranking14_parsed;
var ranking14_value;
var year14;
var score14_ED;

//smartnote15
//document fields
var album_name15;
var artist_name15;
var duration15;
var emotion15;
var emotion15_value;
var genre15;
var genre15_value;
var location15;
var ranking15;
var ranking15_parsed;
var ranking15_value;
var year15;
var score15_ED;

//smartnote16
//document fields
var album_name16;
var artist_name16;
var duration16;
var emotion16;
var emotion16_value;
var genre16;
var genre16_value;
var location16;
var ranking16;
var ranking16_parsed;
var ranking16_value;
var year16;
var score16_ED;

//smartnote17
//document fields
var album_name17;
var artist_name17;
var duration17;
var emotion17;
var emotion17_value;
var genre17;
var genre17_value;
var location17;
var ranking17;
var ranking17_parsed;
var ranking17_value;
var year17;
var score17_ED;

//smartnote18
//document fields
var album_name18;
var artist_name18;
var duration18;
var emotion18;
var emotion18_value;
var genre18;
var genre18_value;
var location18;
var ranking18;
var ranking18_parsed;
var ranking18_value;
var year18;
var score18_ED;

//smartnote19
//document fields
var album_name19;
var artist_name19;
var duration19;
var emotion19;
var emotion19_value;
var genre19;
var genre19_value;
var location19;
var ranking19;
var ranking19_parsed;
var ranking19_value;
var year19;
var score19_ED;

//smartnote20
//document fields
var album_name20;
var artist_name20;
var duration20;
var emotion20;
var emotion20_value;
var genre20;
var genre20_value;
var location20;
var ranking20;
var ranking20_parsed;
var ranking20_value;
var year20;
var score20_ED;

//smartnote21
//document fields
var album_name21;
var artist_name21;
var duration21;
var emotion21;
var emotion21_value;
var genre21;
var genre21_value;
var location21;
var ranking21;
var ranking21_parsed;
var ranking21_value;
var year21;
var score21_ED;

//smartnote22
//document fields
var album_name22;
var artist_name22;
var duration22;
var emotion22;
var emotion22_value;
var genre22;
var genre22_value;
var location22;
var ranking22;
var ranking22_parsed;
var ranking22_value;
var year22;
var score22_ED;

//smartnote223
//document fields
var album_name23;
var artist_name23;
var duration23;
var emotion23;
var emotion23_value;
var genre23;
var genre23_value;
var location23;
var ranking23;
var ranking23_parsed;
var ranking23_value;
var year23;
var score23_ED;

//smartnote24
//document fields
var album_name24;
var artist_name24;
var duration24;
var emotion24;
var emotion24_value;
var genre24;
var genre24_value;
var location24;
var ranking24;
var ranking24_parsed;
var ranking24_value;
var year24;
var score24_ED;

//smartnote25
//document fields
var album_name25;
var artist_name25;
var duration25;
var emotion25;
var emotion25_value;
var genre25;
var genre25_value;
var location25;
var ranking25;
var ranking25_parsed;
var ranking25_value;
var year25;
var score25_ED;

//smartnote26
//document fields
var album_name26;
var artist_name26;
var duration26;
var emotion26;
var emotion26_value;
var genre26;
var genre26_value;
var location26;
var ranking26;
var ranking26_parsed;
var ranking26_value;
var year26;
var score26_ED;

//smartnote27
//document fields
var album_name27;
var artist_name27;
var duration27;
var emotion27;
var emotion27_value;
var genre27;
var genre27_value;
var location27;
var ranking27;
var ranking27_parsed;
var ranking27_value;
var year27;
var score27_ED;

//smartnote28
//document fields
var album_name28;
var artist_name28;
var duration28;
var emotion28;
var emotion28_value;
var genre28;
var genre28_value;
var location28;
var ranking28;
var ranking28_parsed;
var ranking28_value;
var year28;
var score28_ED;

//smartnote29
//document fields
var album_name29;
var artist_name29;
var duration29;
var emotion29;
var emotion29_value;
var genre29;
var genre29_value;
var location29;
var ranking29;
var ranking29_parsed;
var ranking29_value;
var year29;
var score29_ED;

//smartnote30
//document fields
var album_name30;
var artist_name30;
var duration30;
var emotion30;
var emotion30_value;
var genre30;
var genre30_value;
var location30;
var ranking30;
var ranking30_parsed;
var ranking30_value;
var year30;
var score30_ED;

//smartnote31
//document fields
var album_name31;
var artist_name31;
var duration31;
var emotion31;
var emotion31_value;
var genre31;
var genre31_value;
var location31;
var ranking31;
var ranking31_parsed;
var ranking31_value;
var year31;
var score31_ED;

//smartnote32
//document fields
var album_name32;
var artist_name32;
var duration32;
var emotion32;
var emotion32_value;
var genre32;
var genre32_value;
var location32;
var ranking32;
var ranking32_parsed;
var ranking32_value;
var year32;
var score32_ED;

//smartnote33
//document fields
var album_name33;
var artist_name33;
var duration33;
var emotion33;
var emotion33_value;
var genre33;
var genre33_value;
var location33;
var ranking33;
var ranking33_parsed;
var ranking33_value;
var year33;
var score33_ED;

//smartnote34
//document fields
var album_name34;
var artist_name34;
var duration34;
var emotion34;
var emotion34_value;
var genre34;
var genre34_value;
var location34;
var ranking34;
var ranking34_parsed;
var ranking34_value;
var year34;
var score34_ED;

//smartnote35
//document fields
var album_name35;
var artist_name35;
var duration35;
var emotion35;
var emotion35_value;
var genre35;
var genre35_value;
var location35;
var ranking35;
var ranking35_parsed;
var ranking35_value;
var year35;
var score35_ED;

//smartnote36
//document fields
var album_name36;
var artist_name36;
var duration36;
var emotion36;
var emotion36_value;
var genre36;
var genre36_value;
var location36;
var ranking36;
var ranking36_parsed;
var ranking36_value;
var year36;
var score36_ED;

//smartnote37
//document fields
var album_name37;
var artist_name37;
var duration37;
var emotion37;
var emotion37_value;
var genre37;
var genre37_value;
var location37;
var ranking37;
var ranking37_parsed;
var ranking37_value;
var year37;
var score37_ED;

//smartnote38
//document fields
var album_name38;
var artist_name38;
var duration38;
var emotion38;
var emotion38_value;
var genre38;
var genre38_value;
var location38;
var ranking38;
var ranking38_parsed;
var ranking38_value;
var year38;
var score38_ED;

//smartnote39
//document fields
var album_name39;
var artist_name39;
var duration39;
var emotion39;
var emotion39_value;
var genre39;
var genre39_value;
var location39;
var ranking39;
var ranking39_parsed;
var ranking39_value;
var year39;
var score39_ED;

//smartnote40
//document fields
var album_name40;
var artist_name40;
var duration40;
var emotion40;
var emotion40_value;
var genre40;
var genre40_value;
var location40;
var ranking40;
var ranking40_parsed;
var ranking40_value;
var year40;
var score40_ED;

//smartnote41
//document fields
var album_name41;
var artist_name41;
var duration41;
var emotion41;
var emotion41_value;
var genre41;
var genre41_value;
var location41;
var ranking41;
var ranking41_parsed;
var ranking41_value;
var year41;
var score41_ED;

//smartnote42
//document fields
var album_name42;
var artist_name42;
var duration42;
var emotion42;
var emotion42_value;
var genre42;
var genre42_value;
var location42;
var ranking42;
var ranking42_parsed;
var ranking42_value;
var year42;
var score42_ED;

//smartnote43
//document fields
var album_name43;
var artist_name43;
var duration43;
var emotion43;
var emotion43_value;
var genre43;
var genre43_value;
var location43;
var ranking43;
var ranking43_parsed;
var ranking43_value;
var year43;
var score43_ED;

//smartnote44
//document fields
var album_name44;
var artist_name44;
var duration44;
var emotion44;
var emotion44_value;
var genre44;
var genre44_value;
var location44;
var ranking44;
var ranking44_parsed;
var ranking44_value;
var year44;
var score44_ED;

//smartnote45
//document fields
var album_name45;
var artist_name45;
var duration45;
var emotion45;
var emotion45_value;
var genre45;
var genre45_value;
var location45;
var ranking45;
var ranking45_parsed;
var ranking45_value;
var year45;
var score45_ED;

//smartnote46
//document fields
var album_name46;
var artist_name46;
var duration46;
var emotion46;
var emotion46_value;
var genre46;
var genre46_value;
var location46;
var ranking46;
var ranking46_parsed;
var ranking46_value;
var year46;
var score46_ED;

//smartnote47
//document fields
var album_name47;
var artist_name47;
var duration47;
var emotion47;
var emotion47_value;
var genre47;
var genre47_value;
var location47;
var ranking47;
var ranking47_parsed;
var ranking47_value;
var year47;
var score47_ED;

//smartnote48
//document fields
var album_name48;
var artist_name48;
var duration48;
var emotion48;
var emotion48_value;
var genre48;
var genre48_value;
var location48;
var ranking48;
var ranking48_parsed;
var ranking48_value;
var year48;
var score48_ED;

//smartnote49
//document fields
var album_name49;
var artist_name49;
var duration49;
var emotion49;
var emotion49_value;
var genre49;
var genre49_value;
var location49;
var ranking49;
var ranking49_parsed;
var ranking49_value;
var year49;
var score49_ED;

//smartnote50
//document fields
var album_name50;
var artist_name50;
var duration50;
var emotion50;
var emotion50_value;
var genre50;
var genre50_value;
var location50;
var ranking50;
var ranking50_parsed;
var ranking50_value;
var year50;
var score50_ED;

//ranking buttons and button values
var ranking_button;
var ranking_button_value;
//genres buttons and genre values
var genre_button;
var genre_button_value;
//emotions buttons and button values
var emotion_button;
var emotion_button_value;

//PDF table
var table = document.querySelector("#myTable");
var table1 = document.querySelector("#myTable1");
var table2 = document.querySelector("#myTable2");
var table3 = document.querySelector("#myTable3");


//arrays to import top 3 Euclidean Distance recommendations to pdf table
var score_inTOP3ED;
var album_inTOP3ED;
var artist_inTOP3ED;
var ranking_inTOP3ED;
var genre_inTOP3ED;
var emotion_inTOP3ED;
var image_inTOP3ED;

var scores_ED = [];
var scores_ED_sorted = [];
var scores_ED_TOP3 = [];

var score_ED_TOP1;
var album_ED_TOP1;
var artist_ED_TOP1;
var ranking_ED_TOP1;
var genre_ED_TOP1;
var emotion_ED_TOP1;
var image_ED_TOP1;

var score_ED_TOP2;
var album_ED_TOP2;
var artist_ED_TOP2;
var ranking_ED_TOP2;
var genre_ED_TOP2;
var emotion_ED_TOP2;
var image_ED_TOP2;

var score_ED_TOP3;
var album_ED_TOP3;
var artist_ED_TOP3;
var ranking_ED_TOP3;
var genre_ED_TOP3;
var emotion_ED_TOP3;
var image_ED_TOP3;

//arrays to import top 3 Manhattan Distance recommendations to pdf table
var score_inTOP3MD;
var album_inTOP3MD;
var artist_inTOP3MD;
var ranking_inTOP3MD;
var genre_inTOP3MD;
var emotion_inTOP3MD;
var image_inTOP3MD;

var scores_MD = [];
var scores_MD_sorted = [];
var scores_MD_TOP3 = [];

var score_MD_TOP1;
var album_MD_TOP1;
var artist_MD_TOP1;
var ranking_MD_TOP1;
var genre_MD_TOP1;
var emotion_MD_TOP1;
var image_MD_TOP1;

var score_MD_TOP2;
var album_MD_TOP2;
var artist_MD_TOP2;
var ranking_MD_TOP2;
var genre_MD_TOP2;
var emotion_MD_TOP2;
var image_MD_TOP2;

var score_MD_TOP3;
var album_MD_TOP3;
var artist_MD_TOP3;
var ranking_MD_TOP3;
var genre_MD_TOP3;
var emotion_MD_TOP3;
var image_MD_TOP3;

//arrays to import top 3 RBF recommendations to pdf table
var score_inTOP3RBF;
var album_inTOP3RBF;
var artist_inTOP3RBF;
var ranking_inTOP3RBF;
var genre_inTOP3RBF;
var emotion_inTOP3RBF;
var image_inTOP3RBF;

var score_RBF_TOP1;
var album_RBF_TOP1;
var artist_RBF_TOP1;
var ranking_RBF_TOP1;
var genre_RBF_TOP1;
var emotion_RBF_TOP1;
var image_RBF_TOP1;

var score_RBF_TOP2;
var album_RBF_TOP2;
var artist_RBF_TOP2;
var ranking_RBF_TOP2;
var genre_RBF_TOP2;
var emotion_RBF_TOP2;
var image_RBF_TOP2;

var score_RBF_TOP3;
var album_RBF_TOP3;
var artist_RBF_TOP3;
var ranking_RBF_TOP3;
var genre_RBF_TOP3;
var emotion_RBF_TOP3;
var image_RBF_TOP3;

var scores_RBF = [];
var scores_RBF_sorted = [];
var scores_RBF_TOP3_reverse = [];
var scores_RBF_TOP3 = [];
//----------------------------------------------------------------------------//

//Add button for the mapping
var redsCounter = 0;
var ambersCounter = 0;
var greensCounter = 0;
var bluesCounter = 0;

var num_smartNotes = 50;

var user_choices = []

var inputs = document.getElementsByClassName('container');

//----------------------------------------------------------------------------//

//FUNCTION FOR EUClIDEAN DISTANCE
function getEuclideanDistance(x0_emotion, y0_ranking, z0_genre, xn_emotionFn, yn_rankingFn, zn_genreFn)
{
    var distED = 0;

    if (z0_genre == null) // if emotion and ranking are selected
    {
      //Calculating the distance between two points
      distED = Math.sqrt( Math.pow((x0_emotion-xn_emotionFn), 2) + Math.pow((y0_ranking-yn_rankingFn), 2) );
      console.log("Euclidean distance is: " + distED);
      return distED;
    }
    else if (x0_emotion == null) // if genre and ranking are selected
    {
      //Calculating the distance between two points
      distED = Math.sqrt( Math.pow((z0_genre-zn_genreFn), 2) + Math.pow((y0_ranking-yn_rankingFn), 2) );
      console.log("Euclidean distance is: " + distED);
      return distED;
    }
    else if (y0_ranking == null) // if genre and emotion are selected
    {
      //Calculating the distance between two points
      distED = Math.sqrt( Math.pow((z0_genre-zn_genreFn), 2) + Math.pow((x0_emotion-xn_emotionFn), 2) );
      console.log("Euclidean distance is: " + distED);
      return distED;
    }
} // end function getEuclideanDistance


//FUNCTION FOR MANHATTAN DISTANCE
function getManhattanDistance(x0_emotion, y0_ranking, z0_genre, xn_emotionFn, yn_rankingFn, zn_genreFn)
{
    var distMD = 0;

    if (z0_genre == null)
    {
      //Calculating the distance between two points
      distMD = Math.abs(xn_emotionFn - x0_emotion) + Math.abs(yn_rankingFn - y0_ranking);
      console.log("Manhattan distance is: " + distMD);
      return distMD;
    }
    else if (x0_emotion == null)
    {
      distMD = Math.abs(zn_genreFn - z0_genre) + Math.abs(yn_rankingFn - y0_ranking);
      console.log("Manhattan distance is: " + distMD);
      return distMD;
    }
    else if (y0_ranking == null)
    {
      distMD = Math.abs(zn_genreFn - z0_genre) + Math.abs(xn_emotionFn - x0_emotion);
      console.log("Manhattan distance is: " + distMD);
      return distMD;
    }
} // end function getManhattanDistance

//FUNCTION FOR RBF
function getRBF(x0_emotion, y0_ranking, z0_genre, xn_emotionFn, yn_rankingFn, zn_genreFn, coVariance)
{
    var distRBF = 0;

    if (z0_genre == null)
    {
      //Calculating the distance between two points
      distRBF = Math.exp(- (Math.pow((x0_emotion - xn_emotionFn),2) - Math.pow((y0_ranking - yn_rankingFn), 2))/(2*(Math.pow(coVariance),2)));

      console.log("RBF value is: " + distRBF);
      return distRBF;
    }
    else if (x0_emotion == null)
    {
      distRBF = Math.exp(- (Math.pow((z0_genre - zn_genreFn),2) - Math.pow((y0_ranking - yn_rankingFn), 2))/(2*(Math.pow(coVariance),2)));
      console.log("RBF value is: " + distRBF);
      return distRBF;
    }
    else if (y0_ranking == null)
    {
      distRBF = Math.exp(- (Math.pow((z0_genre - zn_genreFn),2) - Math.pow((x0_emotion - xn_emotionFn), 2))/(2*(Math.pow(coVariance),2)));
      console.log("RBF value is: " + distRBF);
      return distRBF;
    }
} // finction end getRBF


saveButton2.addEventListener("click", function() {

//----------------------------------//
//Emotions numerical LUT: happy-->1 //
//                        calm-->2  //
//                        sad-->3   //
//                        angry-->4 //
//----------------------------------//

//----------------------------------//
//Genres numerical LUT: Classic-->1 //
//                      Rock-->2    //
//                      RnB-->3     //
//                      Pop-->4     //
//----------------------------------//

//----------------------------------//
//Ranking numerical LUT: Top10-->1  //
//                       Top20-->2  //
//                       Top30-->3  //
//----------------------------------//

 //smartnote1
 //read the document fields from Firestore
 if (docRef3 != null) {
   docRef3.get().then(function (doc) {
     if (doc && doc.exists) {
       const myData3 = doc.data();
       album_name1 = myData3.AlbumName;
       artist_name1 = myData3.ArtistName;
       durtion1 = myData3.Duration;
       emotion1 = myData3.Emotion;
       //Debugging statement
       //console.log("rag_status1" + rag_status1)
       if (emotion1.localeCompare("Angry")==0)
       {
         emotion1_value = 4;
         redsCounter = redsCounter + 1;
         //Debugging statement
         console.log("REDS" + redsCounter)
       }
       else if (emotion1.localeCompare("Happy")==0)
       {
         emotion1_value = 1;
         ambersCounter = ambersCounter + 1;
         //Debugging statement
         console.log("AMBERS" + ambersCounter)
       }
       else if (emotion1.localeCompare("Calm")==0)
       {
         emotion1_value = 2;
         greensCounter = greensCounter + 1;
         //Debugging statement
         console.log("GREENS" + greensCounter)
       }
       else if (emotion1.localeCompare("Sad")==0)
       {
         emotion1_value = 3;
         bluesCounter = bluesCounter + 1;
         //Debugging statement
         console.log("BLUES" + bluesCounter)
       }

       genre1 = myData3.Genre;
       if (genre1.localeCompare("Classic")==0)
       {
         genre1_value = 1;
         //Debugging statement
         console.log("Genre Classic" + genre1_value)
       }
       else if (genre1.localeCompare("Rock")==0)
       {
         genre1_value = 2;
         //Debugging statement
         console.log("Genre Rock" + genre1_value)
       }
       else if (genre1.localeCompare("R&B")==0)
       {
         genre1_value = 3;
         //Debugging statement
         console.log("Genre R&B" + genre1_value)
       }
       else if (genre1.localeCompare("Pop")==0)
       {
         genre1_value = 4;
         //Debugging statement
         console.log("Genre Pop" + genre1_value)
       }

       location1 = myData3.Location;
       ranking1 = myData3.Ranking;
       ranking1_parsed = parseInt(ranking1);
       if ( 1<=ranking1_parsed<=10  )
       {
         ranking1_value = 1;
         //Debugging statement
         console.log("Ranking TOP10" + ranking1_value)
       }
       else if (11<=ranking1_parsed<=20 )
       {
         ranking1_value = 2;
         //Debugging statement
         console.log("Ranking TOP20" + ranking1_value)
       }
       else if (  21<=ranking1_parsed<=30  )
       {
         ranking1_value = 3;
         //Debugging statement
         console.log("Ranking TOP30" + ranking1_value)
       }

       year1 = myData3.Year;
     }//end if
    }).catch(function (error) {
      console.log("Got and error: ", error);
    })//end catch of docRef3
 }//end if != null


 //smartnote2
  //read the document fields from Firestore
  if (docRef4 != null) {
    docRef4.get().then(function (doc) {
      if (doc && doc.exists) {
        const myData4 = doc.data();
        album_name2 = myData4.AlbumName;
        artist_name2 = myData4.ArtistName;
        durtion2 = myData4.Duration;
        emotion2 = myData4.Emotion;
        //Debugging statement
        //console.log("rag_status1" + rag_status1)
        if (emotion2.localeCompare("Angry")==0)
        {
          emotion2_value = 4;
          redsCounter = redsCounter + 1;
          //Debugging statement
          console.log("REDS" + redsCounter)
        }
        else if (emotion2.localeCompare("Happy")==0)
        {
          emotion2_value = 1;
          ambersCounter = ambersCounter + 1;
          //Debugging statement
          console.log("AMBERS" + ambersCounter)
        }
        else if (emotion2.localeCompare("Calm")==0)
        {
          emotion2_value = 2;
          greensCounter = greensCounter + 1;
          //Debugging statement
          console.log("GREENS" + greensCounter)
        }
        else if (emotion2.localeCompare("Sad")==0)
        {
          emotion2_value = 3;
          bluesCounter = bluesCounter + 1;
          //Debugging statement
          console.log("BLUES" + bluesCounter)
        }

        genre2 = myData4.Genre;
        if (genre2.localeCompare("Classic")==0)
        {
          genre2_value = 1;
          //Debugging statement
          console.log("Genre Classic" + genre2_value)
        }
        else if (genre2.localeCompare("Rock")==0)
        {
          genre2_value = 2;
          //Debugging statement
          console.log("Genre Rock" + genre2_value)
        }
        else if (genre2.localeCompare("R&B")==0)
        {
          genre2_value = 3;
          //Debugging statement
          console.log("Genre R&B" + genre2_value)
        }
        else if (genre2.localeCompare("Pop")==0)
        {
          genre2_value = 4;
          //Debugging statement
          console.log("Genre Pop" + genre2_value)
        }

        location2 = myData4.Location;

        ranking2 = myData4.Ranking;
        ranking2_parsed = parseInt(ranking2);
        if ( 1<=ranking2_parsed<=10 )
        {
          ranking2_value = 1;
          //Debugging statement
          console.log("Ranking TOP10" + ranking2_value)
        }
        else if ( 11<=ranking2_parsed<=20 )
        {
          ranking2_value = 2;
          //Debugging statement
          console.log("Ranking TOP20" + ranking2_value)
        }
        else if ( 21<=ranking2_parsed<=30  )
        {
          ranking2_value = 3;
          //Debugging statement
          console.log("Ranking TOP30" + ranking2_value)
        }

        year2 = myData4.Year;
      }//end if
     }).catch(function (error) {
       console.log("Got and error: ", error);
     })//end catch of docRef3
  }//end if != null


 //smartnote3
  //read the document fields from Firestore
 if (docRef5 != null) {
   docRef5.get().then(function (doc) {
     if (doc && doc.exists) {
       var row = table.insertRow(1);
       var cell1 = row.insertCell(0);
       var cell2 = row.insertCell(1);
       var cell3 = row.insertCell(2);
       var cell4 = row.insertCell(3);
       var cell5 = row.insertCell(4);
       var cell6 = row.insertCell(5);
       const myData5 = doc.data();
       album_name3 = myData5.AlbumName;
       artist_name3 = myData5.ArtistName;
       duration3 = myData5.Duration;
       emotion3 = myData5.Emotion;
       //Debugging statement
       //console.log("rag_status3" + rag_status3)
       if (emotion3.localeCompare("Angry")==0)
       {
         emotion3_value = 4;
         redsCounter = redsCounter + 1;
         //Debugging statement
         console.log("REDS" + redsCounter)
       }
       else if (emotion3.localeCompare("Happy")==0)
       {
         emotion3_value = 1;
         ambersCounter = ambersCounter + 1;
         //Debugging statement
         console.log("AMBERS" + ambersCounter)
       }
       else if (emotion3.localeCompare("Calm")==0)
       {
         emotion3_value = 2;
         greensCounter = greensCounter + 1;
         //Debugging statement
         console.log("GREENS" + greensCounter)
       }
       else if (emotion3.localeCompare("Sad")==0)
       {
         emotion3_value = 3;
         bluesCounter = bluesCounter + 1;
         //Debugging statement
         console.log("BLUES" + bluesCounter)
       }

       genre3 = myData5.Genre;
       if (genre3.localeCompare("Classic")==0)
       {
         genre3_value = 1;
         //Debugging statement
         console.log("Genre Classic" + genre3_value)
       }
       else if (genre3.localeCompare("Rock")==0)
       {
         genre3_value = 2;
         //Debugging statement
         console.log("Genre Rock" + genre3_value)
       }
       else if (genre3.localeCompare("R&B")==0)
       {
         genre3_value = 3;
         //Debugging statement
         console.log("Genre R&B" + genre3_value)
       }
       else if (genre3.localeCompare("Pop")==0)
       {
         genre3_value = 4;
         //Debugging statement
         console.log("Genre Pop" + genre3_value)
       }

       location3 = myData5.Location;

       ranking3 = myData5.Ranking;
       ranking3_parsed = parseInt(ranking3);
       if ( 1<=ranking3_parsed<=10 )
       {
         ranking3_value = 1;
         //Debugging statement
         console.log("Ranking TOP10" + ranking3_value)
       }
       else if ( 11<=ranking3_parsed<=20 )
       {
         ranking3_value = 2;
         //Debugging statement
         console.log("Ranking TOP20" + ranking3_value)
       }
       else if (21<=ranking3_parsed<=30 )
       {
         ranking3_value = 3;
         //Debugging statement
         console.log("Ranking TOP30" + ranking3_value)
       }

       year3 = myData5.Year;
     }//end if
    }).catch(function (error) {
      console.log("Got and error: ", error);
    })//end catch of docRef3
 }//end if != null


 //smartnote4
 if (docRef6 != null) {
   docRef6.get().then(function (doc) {
     if (doc && doc.exists) {
       var row = table.insertRow(1);
       var cell1 = row.insertCell(0);
       var cell2 = row.insertCell(1);
       var cell3 = row.insertCell(2);
       var cell4 = row.insertCell(3);
       var cell5 = row.insertCell(4);
       var cell6 = row.insertCell(5);
       const myData6 = doc.data();
       album_name4 = myData6.AlbumName;
       artist_name4 = myData6.ArtistName;
       durtion4 = myData6.Duration;
       emotion4 = myData6.Emotion;
       //Debugging statement
       //console.log("rag_status3" + rag_status3)
       if (emotion4.localeCompare("Angry")==0)
       {
         emotion4_value = 4;
         redsCounter = redsCounter + 1;
         //Debugging statement
         console.log("REDS" + redsCounter)
       }
       else if (emotion4.localeCompare("Happy")==0)
       {
         emotion4_value = 1;
         ambersCounter = ambersCounter + 1;
         //Debugging statement
         console.log("AMBERS" + ambersCounter)
       }
       else if (emotion4.localeCompare("Calm")==0)
       {
         emotion4_value = 2;
         greensCounter = greensCounter + 1;
         //Debugging statement
         console.log("GREENS" + greensCounter)
       }
       else if (emotion4.localeCompare("Sad")==0)
       {
         emotion4_value = 3;
         bluesCounter = bluesCounter + 1;
         //Debugging statement
         console.log("BLUES" + bluesCounter)
       }

       genre4 = myData6.Genre;
       if (genre4.localeCompare("Classic")==0)
       {
         genre4_value = 1;
         //Debugging statement
         console.log("Genre Classic" + genre4_value)
       }
       else if (genre4.localeCompare("Rock")==0)
       {
         genre4_value = 2;
         //Debugging statement
         console.log("Genre Rock" + genre4_value)
       }
       else if (genre4.localeCompare("R&B")==0)
       {
         genre4_value = 3;
         //Debugging statement
         console.log("Genre R&B" + genre4_value)
       }
       else if (genre4.localeCompare("Pop")==0)
       {
         genre4_value = 4;
         //Debugging statement
         console.log("Genre Pop" + genre4_value)
       }

       location4 = myData6.Location;
       ranking4 = myData6.Ranking;
       ranking4_parsed = parseInt(ranking4);
       if ( 1<=ranking4_parsed<=10 )
       {
         ranking4_value = 1;
         //Debugging statement
         console.log("Ranking TOP10" + ranking4_value)
       }
       else if ( 11<=ranking4_parsed<=20)
       {
         ranking4_value = 2;
         //Debugging statement
         console.log("Ranking TOP20" + ranking4_value)
       }
       else if (21<=ranking4_parsed<=30 )
       {
         ranking4_value = 3;
         //Debugging statement
         console.log("Ranking TOP30" + ranking4_value)
       }

       year4 = myData6.Year;
     }//end if
    }).catch(function (error) {
      console.log("Got and error: ", error);
    })//end catch of docRef3
 }//end if != null


 //smartnote5
  //read the document fields from Firestore
  if (docRef7 != null) {
    docRef7.get().then(function (doc) {
      if (doc && doc.exists) {
        var row = table.insertRow(1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        const myData7 = doc.data();
        album_name5 = myData7.AlbumName;
        artist_name5 = myData7.ArtistName;
        durtion5 = myData7.Duration;
        emotion5 = myData7.Emotion;
        //Debugging statement
        //console.log("rag_status3" + rag_status3)
        if (emotion5.localeCompare("Angry")==0)
        {
          emotion5_value = 4;
          redsCounter = redsCounter + 1;
          //Debugging statement
          console.log("REDS" + redsCounter)
        }
        else if (emotion5.localeCompare("Happy")==0)
        {
          emotion5_value = 1;
          ambersCounter = ambersCounter + 1;
          //Debugging statement
          console.log("AMBERS" + ambersCounter)
        }
        else if (emotion5.localeCompare("Calm")==0)
        {
          emotion5_value = 2;
          greensCounter = greensCounter + 1;
          //Debugging statement
          console.log("GREENS" + greensCounter)
        }
        else if (emotion5.localeCompare("Sad")==0)
        {
          emotion5_value = 3;
          bluesCounter = bluesCounter + 1;
          //Debugging statement
          console.log("BLUES" + bluesCounter)
        }

        genre5 = myData7.Genre;
        if (genre5.localeCompare("Classic")==0)
        {
          genre5_value = 1;
          //Debugging statement
          console.log("Genre Classic" + genre5_value)
        }
        else if (genre5.localeCompare("Rock")==0)
        {
          genre5_value = 2;
          //Debugging statement
          console.log("Genre Rock" + genre5_value)
        }
        else if (genre5.localeCompare("R&B")==0)
        {
          genre5_value = 3;
          //Debugging statement
          console.log("Genre R&B" + genre5_value)
        }
        else if (genre5.localeCompare("Pop")==0)
        {
          genre5_value = 4;
          //Debugging statement
          console.log("Genre Pop" + genre5_value)
        }

        location5 = myData7.Location;
        ranking5 = myData7.Ranking;
        ranking5_parsed = parseInt(ranking5);
        if ( 1<=ranking5_parsed<=10 )
        {
          ranking5_value = 1;
          //Debugging statement
          console.log("Ranking TOP10" + ranking5_value)
        }
        else if ( 11<=ranking5_parsed<=20 )
        {
          ranking5_value = 2;
          //Debugging statement
          console.log("Ranking TOP20" + ranking5_value)
        }
        else if ( 21<=ranking5_parsed<=30 )
        {
          ranking5_value = 3;
          //Debugging statement
          console.log("Ranking TOP30" + ranking5_value)
        }

        year5 = myData7.Year;
      }//end if
     }).catch(function (error) {
       console.log("Got and error: ", error);
     })//end catch of docRef5
  }//end if != null


 //smartnote6
  //read the document fields from Firestore
  if (docRef8 != null) {
    docRef8.get().then(function (doc) {
      if (doc && doc.exists) {
        var row = table.insertRow(1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        const myData8 = doc.data();
        album_name6 = myData8.AlbumName;
        artist_name6 = myData8.ArtistName;
        durtion6 = myData8.Duration;
        emotion6 = myData8.Emotion;
        //Debugging statement
        //console.log("rag_status3" + rag_status3)
        if (emotion6.localeCompare("Angry")==0)
        {
          emotion6_value = 4;
          redsCounter = redsCounter + 1;
          //Debugging statement
          console.log("REDS" + redsCounter)
        }
        else if (emotion6.localeCompare("Happy")==0)
        {
          emotion6_value = 1;
          ambersCounter = ambersCounter + 1;
          //Debugging statement
          console.log("AMBERS" + ambersCounter)
        }
        else if (emotion6.localeCompare("Calm")==0)
        {
          emotion6_value = 2;
          greensCounter = greensCounter + 1;
          //Debugging statement
          console.log("GREENS" + greensCounter)
        }
        else if (emotion6.localeCompare("Sad")==0)
        {
          emotion6_value = 3;
          bluesCounter = bluesCounter + 1;
          //Debugging statement
          console.log("BLUES" + bluesCounter)
        }
        genre6 = myData8.Genre;
        if (genre6.localeCompare("Classic")==0)
        {
          genre6_value = 1;
          //Debugging statement
          console.log("Genre Classic" + genre6_value)
        }
        else if (genre6.localeCompare("Rock")==0)
        {
          genre6_value = 2;
          //Debugging statement
          console.log("Genre Rock" + genre6_value)
        }
        else if (genre6.localeCompare("R&B")==0)
        {
          genre6_value = 3;
          //Debugging statement
          console.log("Genre R&B" + genre6_value)
        }
        else if (genre6.localeCompare("Pop")==0)
        {
          genre6_value = 4;
          //Debugging statement
          console.log("Genre Pop" + genre6_value)
        }

        location6 = myData8.Location;
        ranking6 = myData8.Ranking;
        ranking6_parsed = parseInt(ranking6);
        if ( 1<=ranking6_parsed<=10 )
        {
          ranking6_value = 1;
          //Debugging statement
          console.log("Ranking TOP10" + ranking6_value)
        }
        else if ( 11<=ranking6_parsed<=20)
        {
          ranking6_value = 2;
          //Debugging statement
          console.log("Ranking TOP20" + ranking6_value)
        }
        else if (21<=ranking6_parsed<=30 )
        {
          ranking6_value = 3;
          //Debugging statement
          console.log("Ranking TOP30" + ranking6_value)
        }

        year6 = myData8.Year;
      }//end if
     }).catch(function (error) {
       console.log("Got and error: ", error);
     })//end catch of docRef6
  }//end if != null


 //smartnote7
 if (docRef9 != null) {
   docRef9.get().then(function (doc) {
     if (doc && doc.exists) {
       var row = table.insertRow(1);
       var cell1 = row.insertCell(0);
       var cell2 = row.insertCell(1);
       var cell3 = row.insertCell(2);
       var cell4 = row.insertCell(3);
       var cell5 = row.insertCell(4);
       var cell6 = row.insertCell(5);
       const myData9 = doc.data();
       album_name7 = myData9.AlbumName;
       artist_name7 = myData9.ArtistName;
       durtion7 = myData9.Duration;
       emotion7 = myData9.Emotion;
       //Debugging statement
       //console.log("rag_status3" + rag_status3)
       if (emotion7.localeCompare("Angry")==0)
       {
         emotion7_value = 4;
         redsCounter = redsCounter + 1;
         //Debugging statement
         console.log("REDS" + redsCounter)
       }
       else if (emotion7.localeCompare("Happy")==0)
       {
         emotion7_value = 1;
         ambersCounter = ambersCounter + 1;
         //Debugging statement
         console.log("AMBERS" + ambersCounter)
       }
       else if (emotion7.localeCompare("Calm")==0)
       {
         emotion7_value = 2;
         greensCounter = greensCounter + 1;
         //Debugging statement
         console.log("GREENS" + greensCounter)
       }
       else if (emotion7.localeCompare("Sad")==0)
       {
         emotion7_value = 3;
         bluesCounter = bluesCounter + 1;
         //Debugging statement
         console.log("BLUES" + bluesCounter)
       }
       genre7 = myData9.Genre;
       if (genre7.localeCompare("Classic")==0)
       {
         genre7_value = 1;
         //Debugging statement
         console.log("Genre Classic" + genre7_value)
       }
       else if (genre7.localeCompare("Rock")==0)
       {
         genre7_value = 2;
         //Debugging statement
         console.log("Genre Rock" + genre7_value)
       }
       else if (genre7.localeCompare("R&B")==0)
       {
         genre7_value = 3;
         //Debugging statement
         console.log("Genre R&B" + genre7_value)
       }
       else if (genre7.localeCompare("Pop")==0)
       {
         genre7_value = 4;
         //Debugging statement
         console.log("Genre Pop" + genre7_value)
       }

       location7 = myData9.Location;
       ranking7 = myData9.Ranking;
       ranking7_parsed = parseInt(ranking7);
       if ( 1<=ranking7_parsed<=10 )
       {
         ranking7_value = 1;
         //Debugging statement
         console.log("Ranking TOP10" + ranking7_value)
       }
       else if (11<=ranking7_parsed<=20)
       {
         ranking7_value = 2;
         //Debugging statement
         console.log("Ranking TOP20" + ranking7_value)
       }
       else if (21<=ranking7_parsed<=30 )
       {
         ranking7_value = 3;
         //Debugging statement
         console.log("Ranking TOP30" + ranking7_value)
       }

       year7 = myData9.Year;
     }//end if
    }).catch(function (error) {
      console.log("Got and error: ", error);
    })//end catch of docRef7
 }//end if != null


 //smartnote8
 if (docRef10 != null) {
   docRef10.get().then(function (doc) {
     if (doc && doc.exists) {
       var row = table.insertRow(1);
       var cell1 = row.insertCell(0);
       var cell2 = row.insertCell(1);
       var cell3 = row.insertCell(2);
       var cell4 = row.insertCell(3);
       var cell5 = row.insertCell(4);
       var cell6 = row.insertCell(5);
       const myData10 = doc.data();
       album_name8 = myData10.AlbumName;
       artist_name8 = myData10.ArtistName;
       durtion8 = myData10.Duration;
       emotion8 = myData10.Emotion;
       //Debugging statement
       //console.log("rag_status3" + rag_status3)
       if (emotion8.localeCompare("Angry")==0)
       {
         emotion8_value = 4;
         redsCounter = redsCounter + 1;
         //Debugging statement
         console.log("REDS" + redsCounter)
       }
       else if (emotion8.localeCompare("Happy")==0)
       {
         emotion8_value = 1;
         ambersCounter = ambersCounter + 1;
         //Debugging statement
         console.log("AMBERS" + ambersCounter)
       }
       else if (emotion8.localeCompare("Calm")==0)
       {
         emotion8_value = 2;
         greensCounter = greensCounter + 1;
         //Debugging statement
         console.log("GREENS" + greensCounter)
       }
       else if (emotion8.localeCompare("Sad")==0)
       {
         emotion8_value = 3;
         bluesCounter = bluesCounter + 1;
         //Debugging statement
         console.log("BLUES" + bluesCounter)
       }
       genre8 = myData10.Genre;
       if (genre8.localeCompare("Classic")==0)
       {
         genre8_value = 1;
         //Debugging statement
         console.log("Genre Classic" + genre8_value)
       }
       else if (genre8.localeCompare("Rock")==0)
       {
         genre8_value = 2;
         //Debugging statement
         console.log("Genre Rock" + genre8_value)
       }
       else if (genre8.localeCompare("R&B")==0)
       {
         genre8_value = 3;
         //Debugging statement
         console.log("Genre R&B" + genre8_value)
       }
       else if (genre8.localeCompare("Pop")==0)
       {
         genre8_value = 4;
         //Debugging statement
         console.log("Genre Pop" + genre8_value)
       }

       location8 = myData10.Location;
       ranking8 = myData10.Ranking;
       ranking8_parsed = parseInt(ranking8);
       if ( 1<=ranking8_parsed<=10 )
       {
         ranking8_value = 1;
         //Debugging statement
         console.log("Ranking TOP10" + ranking8_value)
       }
       else if (11<=ranking8_parsed<=20 )
       {
         ranking8_value = 2;
         //Debugging statement
         console.log("Ranking TOP20" + ranking8_value)
       }
       else if (21<=ranking8_parsed<=30  )
       {
         ranking8_value = 3;
         //Debugging statement
         console.log("Ranking TOP30" + ranking8_value)
       }

       year8 = myData10.Year;
     }//end if
    }).catch(function (error) {
      console.log("Got and error: ", error);
    })//end catch of docRef8
 }//end if != null


 //smartnote9
 if (docRef11 != null) {
   docRef11.get().then(function (doc) {
     if (doc && doc.exists) {
       var row = table.insertRow(1);
       var cell1 = row.insertCell(0);
       var cell2 = row.insertCell(1);
       var cell3 = row.insertCell(2);
       var cell4 = row.insertCell(3);
       var cell5 = row.insertCell(4);
       var cell6 = row.insertCell(5);
       const myData11 = doc.data();
       album_name9 = myData11.AlbumName;
       artist_name9 = myData11.ArtistName;
       durtion9 = myData11.Duration;
       emotion9 = myData11.Emotion;
       //Debugging statement
       //console.log("rag_status3" + rag_status3)
       if (emotion9.localeCompare("Angry")==0)
       {
         emotion9_value = 4;
         redsCounter = redsCounter + 1;
         //Debugging statement
         console.log("REDS" + redsCounter)
       }
       else if (emotion9.localeCompare("Happy")==0)
       {
         emotion9_value = 1;
         ambersCounter = ambersCounter + 1;
         //Debugging statement
         console.log("AMBERS" + ambersCounter)
       }
       else if (emotion9.localeCompare("Calm")==0)
       {
         emotion9_value = 2;
         greensCounter = greensCounter + 1;
         //Debugging statement
         console.log("GREENS" + greensCounter)
       }
       else if (emotion9.localeCompare("Sad")==0)
       {
         emotion9_value = 3;
         bluesCounter = bluesCounter + 1;
         //Debugging statement
         console.log("BLUES" + bluesCounter)
       }
       genre9 = myData11.Genre;
       if (genre9.localeCompare("Classic")==0)
       {
         genre9_value = 1;
         //Debugging statement
         console.log("Genre Classic" + genre9_value)
       }
       else if (genre9.localeCompare("Rock")==0)
       {
         genre9_value = 2;
         //Debugging statement
         console.log("Genre Rock" + genre9_value)
       }
       else if (genre9.localeCompare("R&B")==0)
       {
         genre9_value = 3;
         //Debugging statement
         console.log("Genre R&B" + genre9_value)
       }
       else if (genre9.localeCompare("Pop")==0)
       {
         genre9_value = 4;
         //Debugging statement
         console.log("Genre Pop" + genre9_value)
       }

       location9 = myData11.Location;
       ranking9 = myData11.Ranking;
       ranking9_parsed = parseInt(ranking9);
       if ( 1<=ranking9_parsed<=10 )
       {
         ranking9_value = 1;
         //Debugging statement
         console.log("Ranking TOP10" + ranking9_value)
       }
       else if (11<=ranking9_parsed<=20 )
       {
         ranking9_value = 2;
         //Debugging statement
         console.log("Ranking TOP20" + ranking9_value)
       }
       else if (21<=ranking9_parsed<=30  )
       {
         ranking9_value = 3;
         //Debugging statement
         console.log("Ranking TOP30" + ranking9_value)
       }

       year9 = myData11.Year;
     }//end if
    }).catch(function (error) {
      console.log("Got and error: ", error);
    })//end catch of docRef8
 }//end if != null


//smartnote10
if (docRef13 != null) {
  docRef13.get().then(function (doc) {
    if (doc && doc.exists) {
      var row = table.insertRow(1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      var cell6 = row.insertCell(5);
      const myData13 = doc.data();
      album_name10 = myData13.AlbumName;
      artist_name10 = myData13.ArtistName;
      durtion10 = myData13.Duration;
      emotion10 = myData13.Emotion;
      //Debugging statement
      //console.log("rag_status3" + rag_status3)
      if (emotion10.localeCompare("Angry")==0)
      {
        emotion10_value = 4;
        redsCounter = redsCounter + 1;
        //Debugging statement
        console.log("REDS" + redsCounter)
      }
      else if (emotion10.localeCompare("Happy")==0)
      {
        emotion10_value = 1;
        ambersCounter = ambersCounter + 1;
        //Debugging statement
        console.log("AMBERS" + ambersCounter)
      }
      else if (emotion10.localeCompare("Calm")==0)
      {
        emotion10_value = 2;
        greensCounter = greensCounter + 1;
        //Debugging statement
        console.log("GREENS" + greensCounter)
      }
      else if (emotion10.localeCompare("Sad")==0)
      {
        emotion10_value = 3;
        bluesCounter = bluesCounter + 1;
        //Debugging statement
        console.log("BLUES" + bluesCounter)
      }
      genre10 = myData13.Genre;
      if (genre10.localeCompare("Classic")==0)
      {
        genre10_value = 1;
        //Debugging statement
        console.log("Genre Classic" + genre10_value)
      }
      else if (genre10.localeCompare("Rock")==0)
      {
        genre10_value = 2;
        //Debugging statement
        console.log("Genre Rock" + genre10_value)
      }
      else if (genre10.localeCompare("R&B")==0)
      {
        genre10_value = 3;
        //Debugging statement
        console.log("Genre R&B" + genre10_value)
      }
      else if (genre10.localeCompare("Pop")==0)
      {
        genre10_value = 4;
        //Debugging statement
        console.log("Genre Pop" + genre10_value)
      }

      location10 = myData13.Location;
      ranking10 = myData13.Ranking;
      ranking10_parsed = parseInt(ranking10);
      if ( 1<=ranking10_parsed<=10 )
      {
        ranking10_value = 1;
        //Debugging statement
        console.log("Ranking TOP10" + ranking10_value)
      }
      else if ( 11<=ranking10_parsed<=20 )
      {
        ranking10_value = 2;
        //Debugging statement
        console.log("Ranking TOP20" + ranking10_value)
      }
      else if (21<=ranking10_parsed<=30 )
      {
        ranking10_value = 3;
        //Debugging statement
        console.log("Ranking TOP30" + ranking10_value)
      }

      year10 = myData13.Year;
    }//end if
   }).catch(function (error) {
     console.log("Got and error: ", error);
   })//end catch of docRef10
}//end if != null


//smartnote11
if (docRef14 != null) {
  docRef14.get().then(function (doc) {
    if (doc && doc.exists) {
      var row = table.insertRow(1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      var cell6 = row.insertCell(5);
      const myData14 = doc.data();
      album_name11 = myData14.AlbumName;
      artist_name11 = myData14.ArtistName;
      durtion11 = myData14.Duration;
      emotion11 = myData14.Emotion;
      //Debugging statement
      //console.log("rag_status3" + rag_status3)
      if (emotion11.localeCompare("Angry")==0)
      {
        emotion11_value = 4;
        redsCounter = redsCounter + 1;
        //Debugging statement
        console.log("REDS" + redsCounter)
      }
      else if (emotion11.localeCompare("Happy")==0)
      {
        emotion11_value = 1;
        ambersCounter = ambersCounter + 1;
        //Debugging statement
        console.log("AMBERS" + ambersCounter)
      }
      else if (emotion11.localeCompare("Calm")==0)
      {
        emotion11_value = 2;
        greensCounter = greensCounter + 1;
        //Debugging statement
        console.log("GREENS" + greensCounter)
      }
      else if (emotion11.localeCompare("Sad")==0)
      {
        emotion11_value = 3;
        bluesCounter = bluesCounter + 1;
        //Debugging statement
        console.log("BLUES" + bluesCounter)
      }
      genre11 = myData14.Genre;
      if (genre11.localeCompare("Classic")==0)
      {
        genre11_value = 1;
        //Debugging statement
        console.log("Genre Classic" + genre11_value)
      }
      else if (genre11.localeCompare("Rock")==0)
      {
        genre11_value = 2;
        //Debugging statement
        console.log("Genre Rock" + genre11_value)
      }
      else if (genre11.localeCompare("R&B")==0)
      {
        genre11_value = 3;
        //Debugging statement
        console.log("Genre R&B" + genre11_value)
      }
      else if (genre11.localeCompare("Pop")==0)
      {
        genre11_value = 4;
        //Debugging statement
        console.log("Genre Pop" + genre11_value)
      }

      location11 = myData14.Location;
      ranking11 = myData14.Ranking;
      ranking11_parsed = parseInt(ranking11);
      if ( 1<=ranking11_parsed<=10 )
      {
        ranking11_value = 1;
        //Debugging statement
        console.log("Ranking TOP10" + ranking11_value)
      }
      else if ( 11<=ranking11_parsed<=20)
      {
        ranking11_value = 2;
        //Debugging statement
        console.log("Ranking TOP20" + ranking11_value)
      }
      else if (21<=ranking11_parsed<=30 )
      {
        ranking11_value = 3;
        //Debugging statement
        console.log("Ranking TOP30" + ranking11_value)
      }

      year11 = myData14.Year;
    }//end if
   }).catch(function (error) {
     console.log("Got and error: ", error);
   })//end catch of docRef11
}//end if != null


//smartnote12
if (docRef15 != null) {
  docRef15.get().then(function (doc) {
    if (doc && doc.exists) {
      var row = table.insertRow(1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      var cell6 = row.insertCell(5);
      const myData15 = doc.data();
      album_name12 = myData15.AlbumName;
      artist_name12 = myData15.ArtistName;
      durtion12 = myData15.Duration;
      emotion12 = myData15.Emotion;
      //Debugging statement
      //console.log("rag_status3" + rag_status3)
      if (emotion12.localeCompare("Angry")==0)
      {
        emotion12_value = 4;
        redsCounter = redsCounter + 1;
        //Debugging statement
        console.log("REDS" + redsCounter)
      }
      else if (emotion12.localeCompare("Happy")==0)
      {
        emotion12_value = 1;
        ambersCounter = ambersCounter + 1;
        //Debugging statement
        console.log("AMBERS" + ambersCounter)
      }
      else if (emotion12.localeCompare("Calm")==0)
      {
        emotion12_value = 2;
        greensCounter = greensCounter + 1;
        //Debugging statement
        console.log("GREENS" + greensCounter)
      }
      else if (emotion12.localeCompare("Sad")==0)
      {
        emotion12_value = 3;
        bluesCounter = bluesCounter + 1;
        //Debugging statement
        console.log("BLUES" + bluesCounter)
      }
      genre12 = myData15.Genre;


      location12 = myData15.Location;
      ranking12 = myData15.Ranking;
      ranking12_parsed = parseInt(ranking12);
      if ( 1<=ranking12_parsed<=10 )
      {
        ranking12_value = 1;
        //Debugging statement
        console.log("Ranking TOP10" + ranking12_value)
      }
      else if ( 11<=ranking12_parsed<=20 )
      {
        ranking12_value = 2;
        //Debugging statement
        console.log("Ranking TOP20" + ranking12_value)
      }
      else if (21<=ranking12_parsed<=30 )
      {
        ranking12_value = 3;
        //Debugging statement
        console.log("Ranking TOP30" + ranking12_value)
      }

      year12 = myData15.Year;
    }//end if
   }).catch(function (error) {
     console.log("Got and error: ", error);
   })//end catch of docRef12
}//end if != null

//smartnote13
if (docRef16 != null) {
  docRef16.get().then(function (doc) {
    if (doc && doc.exists) {
      var row = table.insertRow(1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      var cell6 = row.insertCell(5);
      const myData16 = doc.data();
      album_name13 = myData16.AlbumName;
      artist_name13 = myData16.ArtistName;
      durtion13 = myData16.Duration;
      emotion13 = myData16.Emotion;
      //Debugging statement
      //console.log("rag_status3" + rag_status3)
      if (emotion13.localeCompare("Angry")==0)
      {
        emotion13_value = 4;
        redsCounter = redsCounter + 1;
        //Debugging statement
        console.log("REDS" + redsCounter)
      }
      else if (emotion13.localeCompare("Happy")==0)
      {
        emotion13_value = 1;
        ambersCounter = ambersCounter + 1;
        //Debugging statement
        console.log("AMBERS" + ambersCounter)
      }
      else if (emotion13.localeCompare("Calm")==0)
      {
        emotion13_value = 2;
        greensCounter = greensCounter + 1;
        //Debugging statement
        console.log("GREENS" + greensCounter)
      }
      else if (emotion13.localeCompare("Sad")==0)
      {
        emotion13_value = 3;
        bluesCounter = bluesCounter + 1;
        //Debugging statement
        console.log("BLUES" + bluesCounter)
      }
      genre13 = myData16.Genre;
      if (genre13.localeCompare("Classic")==0)
      {
        genre13_value = 1;
        //Debugging statement
        console.log("Genre Classic" + genre13_value)
      }
      else if (genre13.localeCompare("Rock")==0)
      {
        genre13_value = 2;
        //Debugging statement
        console.log("Genre Rock" + genre13_value)
      }
      else if (genre13.localeCompare("R&B")==0)
      {
        genre13_value = 3;
        //Debugging statement
        console.log("Genre R&B" + genre13_value)
      }
      else if (genre13.localeCompare("Pop")==0)
      {
        genre13_value = 4;
        //Debugging statement
        console.log("Genre Pop" + genre13_value)
      }

      location13 = myData16.Location;
      ranking13 = myData16.Ranking;
      ranking13_parsed = parseInt(ranking13);
      if ( 1<=ranking13_parsed<=10 )
      {
        ranking13_value = 1;
        //Debugging statement
        console.log("Ranking TOP10" + ranking13_value)
      }
      else if ( 11<=ranking13_parsed<=20 )
      {
        ranking13_value = 2;
        //Debugging statement
        console.log("Ranking TOP20" + ranking13_value)
      }
      else if ( 21<=ranking13_parsed<=30 )
      {
        ranking13_value = 3;
        //Debugging statement
        console.log("Ranking TOP30" + ranking13_value)
      }

      year13 = myData16.Year;
    }//end if
   }).catch(function (error) {
     console.log("Got and error: ", error);
   })//end catch of docRef13
}//end if != null


//smartnote14
if (docRef17 != null) {
  docRef17.get().then(function (doc) {
    if (doc && doc.exists) {
      var row = table.insertRow(1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      var cell6 = row.insertCell(5);
      const myData17 = doc.data();
      album_name14 = myData17.AlbumName;
      artist_name14 = myData17.ArtistName;
      durtion14 = myData17.Duration;
      emotion14 = myData17.Emotion;
      //Debugging statement
      //console.log("rag_status3" + rag_status3)
      if (emotion14.localeCompare("Angry")==0)
      {
        emotion14_value = 4;
        redsCounter = redsCounter + 1;
        //Debugging statement
        console.log("REDS" + redsCounter)
      }
      else if (emotion14.localeCompare("Happy")==0)
      {
        emotion14_value = 1;
        ambersCounter = ambersCounter + 1;
        //Debugging statement
        console.log("AMBERS" + ambersCounter)
      }
      else if (emotion14.localeCompare("Calm")==0)
      {
        emotion14_value = 2;
        greensCounter = greensCounter + 1;
        //Debugging statement
        console.log("GREENS" + greensCounter)
      }
      else if (emotion14.localeCompare("Sad")==0)
      {
        emotion14_value = 3;
        bluesCounter = bluesCounter + 1;
        //Debugging statement
        console.log("BLUES" + bluesCounter)
      }
      genre14 = myData17.Genre;
      if (genre14.localeCompare("Classic")==0)
      {
        genre14_value = 1;
        //Debugging statement
        console.log("Genre Classic" + genre14_value)
      }
      else if (genre14.localeCompare("Rock")==0)
      {
        genre14_value = 2;
        //Debugging statement
        console.log("Genre Rock" + genre14_value)
      }
      else if (genre14.localeCompare("R&B")==0)
      {
        genre14_value = 3;
        //Debugging statement
        console.log("Genre R&B" + genre14_value)
      }
      else if (genre14.localeCompare("Pop")==0)
      {
        genre14_value = 4;
        //Debugging statement
        console.log("Genre Pop" + genre14_value)
      }
      location14 = myData17.Location;
      ranking14 = myData17.Ranking;
      ranking14_parsed = parseInt(ranking14);
      if ( 1<=ranking14_parsed<=10 )
      {
        ranking14_value = 1;
        //Debugging statement
        console.log("Ranking TOP10" + ranking14_value)
      }
      else if ( 11<=ranking14_parsed<=20  )
      {
        ranking14_value = 2;
        //Debugging statement
        console.log("Ranking TOP20" + ranking14_value)
      }
      else if ( 21<=ranking14_parsed<=30  )
      {
        ranking14_value = 3;
        //Debugging statement
        console.log("Ranking TOP30" + ranking14_value)
      }

      year14 = myData17.Year;
    }//end if
   }).catch(function (error) {
     console.log("Got and error: ", error);
   })//end catch of docRef14
}//end if != null


//smartnote15
if (docRef18 != null) {
  docRef18.get().then(function (doc) {
    if (doc && doc.exists) {
      var row = table.insertRow(1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      var cell6 = row.insertCell(5);
      const myData18 = doc.data();
      album_name15 = myData18.AlbumName;
      artist_name15 = myData18.ArtistName;
      durtion15 = myData18.Duration;
      emotion15 = myData18.Emotion;
      //Debugging statement
      //console.log("rag_status3" + rag_status3)
      if (emotion15.localeCompare("Angry")==0)
      {
        emotion15_value = 4;
        redsCounter = redsCounter + 1;
        //Debugging statement
        console.log("REDS" + redsCounter)
      }
      else if (emotion15.localeCompare("Happy")==0)
      {
        emotion15_value = 1;
        ambersCounter = ambersCounter + 1;
        //Debugging statement
        console.log("AMBERS" + ambersCounter)
      }
      else if (emotion15.localeCompare("Calm")==0)
      {
        emotion15_value = 2;
        greensCounter = greensCounter + 1;
        //Debugging statement
        console.log("GREENS" + greensCounter)
      }
      else if (emotion15.localeCompare("Sad")==0)
      {
        emotion15_value = 3;
        bluesCounter = bluesCounter + 1;
        //Debugging statement
        console.log("BLUES" + bluesCounter)
      }
      genre15 = myData18.Genre;
      if (genre15.localeCompare("Classic")==0)
      {
        genre15_value = 1;
        //Debugging statement
        console.log("Genre Classic" + genre15_value)
      }
      else if (genre15.localeCompare("Rock")==0)
      {
        genre15_value = 2;
        //Debugging statement
        console.log("Genre Rock" + genre15_value)
      }
      else if (genre15.localeCompare("R&B")==0)
      {
        genre15_value = 3;
        //Debugging statement
        console.log("Genre R&B" + genre15_value)
      }
      else if (genre15.localeCompare("Pop")==0)
      {
        genre15_value = 4;
        //Debugging statement
        console.log("Genre Pop" + genre15_value)
      }
      location15 = myData18.Location;
      ranking15 = myData18.Ranking;
      ranking15_parsed = parseInt(ranking15);
      if ( 1<=ranking15_parsed<=10 )
      {
        ranking15_value = 1;
        //Debugging statement
        console.log("Ranking TOP10" + ranking15_value)
      }
      else if ( 11<=ranking15_parsed<=20 )
      {
        ranking15_value = 2;
        //Debugging statement
        console.log("Ranking TOP20" + ranking15_value)
      }
      else if ( 21<=ranking15_parsed<=30 )
      {
        ranking15_value = 3;
        //Debugging statement
        console.log("Ranking TOP30" + ranking15_value)
      }

      year15 = myData18.Year;
    }//end if
   }).catch(function (error) {
     console.log("Got and error: ", error);
   })//end catch of docRef15
}//end if != null


//smartnote16
if (docRef19 != null) {
  docRef19.get().then(function (doc) {
    if (doc && doc.exists) {
      var row = table.insertRow(1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      var cell6 = row.insertCell(5);
      const myData19 = doc.data();
      album_name16 = myData19.AlbumName;
      artist_name16 = myData19.ArtistName;
      durtion16 = myData19.Duration;
      emotion16 = myData19.Emotion;
      //Debugging statement
      //console.log("rag_status3" + rag_status3)
      if (emotion16.localeCompare("Angry")==0)
      {
        emotion16_value = 4;
        redsCounter = redsCounter + 1;
        //Debugging statement
        console.log("REDS" + redsCounter)
      }
      else if (emotion16.localeCompare("Happy")==0)
      {
        emotion16_value = 1;
        ambersCounter = ambersCounter + 1;
        //Debugging statement
        console.log("AMBERS" + ambersCounter)
      }
      else if (emotion16.localeCompare("Calm")==0)
      {
        emotion16_value = 2;
        greensCounter = greensCounter + 1;
        //Debugging statement
        console.log("GREENS" + greensCounter)
      }
      else if (emotion16.localeCompare("Sad")==0)
      {
        emotion16_value = 3;
        bluesCounter = bluesCounter + 1;
        //Debugging statement
        console.log("BLUES" + bluesCounter)
      }
      genre16 = myData19.Genre;
      if (genre16.localeCompare("Classic")==0)
      {
        genre16_value = 1;
        //Debugging statement
        console.log("Genre Classic" + genre16_value)
      }
      else if (genre16.localeCompare("Rock")==0)
      {
        genre16_value = 2;
        //Debugging statement
        console.log("Genre Rock" + genre16_value)
      }
      else if (genre16.localeCompare("R&B")==0)
      {
        genre16_value = 3;
        //Debugging statement
        console.log("Genre R&B" + genre16_value)
      }
      else if (genre16.localeCompare("Pop")==0)
      {
        genre16_value = 4;
        //Debugging statement
        console.log("Genre Pop" + genre16_value)
      }
      location16 = myData19.Location;
      ranking16 = myData19.Ranking;
      ranking16_parsed = parseInt(ranking16);
      if ( 1<=ranking16_parsed<=10 )
      {
        ranking16_value = 1;
        //Debugging statement
        console.log("Ranking TOP10" + ranking16_value)
      }
      else if ( 11<=ranking16_parsed<=20)
      {
        ranking16_value = 2;
        //Debugging statement
        console.log("Ranking TOP20" + ranking16_value)
      }
      else if ( 21<=ranking16_parsed<=30  )
      {
        ranking16_value = 3;
        //Debugging statement
        console.log("Ranking TOP30" + ranking16_value)
      }

      year16 = myData19.Year;
    }//end if
   }).catch(function (error) {
     console.log("Got and error: ", error);
   })//end catch of docRef16
}//end if != null


//smartnote17
if (docRef20 != null) {
  docRef20.get().then(function (doc) {
    if (doc && doc.exists) {
      var row = table.insertRow(1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      var cell6 = row.insertCell(5);
      const myData20 = doc.data();
      album_name17 = myData20.AlbumName;
      artist_name17 = myData20.ArtistName;
      durtion17 = myData20.Duration;
      emotion17 = myData20.Emotion;
      //Debugging statement
      //console.log("rag_status3" + rag_status3)
      if (emotion17.localeCompare("Angry")==0)
      {
        emotion17_value = 4;
        redsCounter = redsCounter + 1;
        //Debugging statement
        console.log("REDS" + redsCounter)
      }
      else if (emotion17.localeCompare("Happy")==0)
      {
        emotion17_value = 1;
        ambersCounter = ambersCounter + 1;
        //Debugging statement
        console.log("AMBERS" + ambersCounter)
      }
      else if (emotion17.localeCompare("Calm")==0)
      {
        emotion17_value = 2;
        greensCounter = greensCounter + 1;
        //Debugging statement
        console.log("GREENS" + greensCounter)
      }
      else if (emotion17.localeCompare("Sad")==0)
      {
        emotion17_value = 3;
        bluesCounter = bluesCounter + 1;
        //Debugging statement
        console.log("BLUES" + bluesCounter)
      }
      genre17 = myData20.Genre;
      if (genre17.localeCompare("Classic")==0)
      {
        genre17_value = 1;
        //Debugging statement
        console.log("Genre Classic" + genre17_value)
      }
      else if (genre17.localeCompare("Rock")==0)
      {
        genre17_value = 2;
        //Debugging statement
        console.log("Genre Rock" + genre17_value)
      }
      else if (genre17.localeCompare("R&B")==0)
      {
        genre17_value = 3;
        //Debugging statement
        console.log("Genre R&B" + genre17_value)
      }
      else if (genre17.localeCompare("Pop")==0)
      {
        genre17_value = 4;
        //Debugging statement
        console.log("Genre Pop" + genre17_value)
      }
      location17 = myData20.Location;
      ranking17 = myData20.Ranking;
      ranking17_parsed = parseInt(ranking17);
      if ( 1<=ranking17_parsed<=10 )
      {
        ranking17_value = 1;
        //Debugging statement
        console.log("Ranking TOP10" + ranking17_value)
      }
      else if ( 11<=ranking17_parsed<=20 )
      {
        ranking17_value = 2;
        //Debugging statement
        console.log("Ranking TOP20" + ranking17_value)
      }
      else if ( 21<=ranking17_parsed<=30  )
      {
        ranking17_value = 3;
        //Debugging statement
        console.log("Ranking TOP30" + ranking17_value)
      }

      year17 = myData20.Year;
    }//end if
   }).catch(function (error) {
     console.log("Got and error: ", error);
   })//end catch of docRef17
}//end if != null

//smartnote18
if (docRef21 != null) {
  docRef21.get().then(function (doc) {
    if (doc && doc.exists) {
      var row = table.insertRow(1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      var cell6 = row.insertCell(5);
      const myData21 = doc.data();
      album_name18 = myData21.AlbumName;
      artist_name18 = myData21.ArtistName;
      durtion18 = myData21.Duration;
      emotion18 = myData21.Emotion;
      //Debugging statement
      //console.log("rag_status3" + rag_status3)
      if (emotion18.localeCompare("Angry")==0)
      {
        emotion18_value = 4;
        redsCounter = redsCounter + 1;
        //Debugging statement
        console.log("REDS" + redsCounter)
      }
      else if (emotion18.localeCompare("Happy")==0)
      {
        emotion18_value = 1;
        ambersCounter = ambersCounter + 1;
        //Debugging statement
        console.log("AMBERS" + ambersCounter)
      }
      else if (emotion18.localeCompare("Calm")==0)
      {
        emotion18_value = 2;
        greensCounter = greensCounter + 1;
        //Debugging statement
        console.log("GREENS" + greensCounter)
      }
      else if (emotion18.localeCompare("Sad")==0)
      {
        emotion18_value = 3;
        bluesCounter = bluesCounter + 1;
        //Debugging statement
        console.log("BLUES" + bluesCounter)
      }
      genre18 = myData21.Genre;
      if (genre18.localeCompare("Classic")==0)
      {
        genre18_value = 1;
        //Debugging statement
        console.log("Genre Classic" + genre18_value)
      }
      else if (genre18.localeCompare("Rock")==0)
      {
        genre18_value = 2;
        //Debugging statement
        console.log("Genre Rock" + genre18_value)
      }
      else if (genre18.localeCompare("R&B")==0)
      {
        genre18_value = 3;
        //Debugging statement
        console.log("Genre R&B" + genre18_value)
      }
      else if (genre18.localeCompare("Pop")==0)
      {
        genre18_value = 4;
        //Debugging statement
        console.log("Genre Pop" + genre18_value)
      }
      location18 = myData21.Location;
      ranking18 = myData21.Ranking;
      ranking18_parsed = parseInt(ranking18);
      if (1<=ranking18_parsed<=10 )
      {
        ranking18_value = 1;
        //Debugging statement
        console.log("Ranking TOP10" + ranking18_value)
      }
      else if ( 11<=ranking18_parsed<=20  )
      {
        ranking18_value = 2;
        //Debugging statement
        console.log("Ranking TOP20" + ranking18_value)
      }
      else if (21<=ranking18_parsed<=30 )
      {
        ranking18_value = 3;
        //Debugging statement
        console.log("Ranking TOP30" + ranking18_value)
      }

      year18 = myData21.Year;
    }//end if
   }).catch(function (error) {
     console.log("Got and error: ", error);
   })//end catch of docRef18
}//end if != null

//smartnote19
if (docRef22 != null) {
  docRef22.get().then(function (doc) {
    if (doc && doc.exists) {
      var row = table.insertRow(1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      var cell6 = row.insertCell(5);
      const myData22 = doc.data();
      album_name19 = myData22.AlbumName;
      artist_name19 = myData22.ArtistName;
      durtion19 = myData22.Duration;
      emotion19 = myData22.Emotion;
      //Debugging statement
      //console.log("rag_status3" + rag_status3)
      if (emotion19.localeCompare("Angry")==0)
      {
        emotion19_value = 4;
        redsCounter = redsCounter + 1;
        //Debugging statement
        console.log("REDS" + redsCounter)
      }
      else if (emotion19.localeCompare("Happy")==0)
      {
        emotion19_value = 1;
        ambersCounter = ambersCounter + 1;
        //Debugging statement
        console.log("AMBERS" + ambersCounter)
      }
      else if (emotion19.localeCompare("Calm")==0)
      {
        emotion19_value = 2;
        greensCounter = greensCounter + 1;
        //Debugging statement
        console.log("GREENS" + greensCounter)
      }
      else if (emotion19.localeCompare("Sad")==0)
      {
        emotion19_value = 3;
        bluesCounter = bluesCounter + 1;
        //Debugging statement
        console.log("BLUES" + bluesCounter)
      }
      genre19 = myData22.Genre;
      if (genre19.localeCompare("Classic")==0)
      {
        genre19_value = 1;
        //Debugging statement
        console.log("Genre Classic" + genre19_value)
      }
      else if (genre19.localeCompare("Rock")==0)
      {
        genre19_value = 2;
        //Debugging statement
        console.log("Genre Rock" + genre19_value)
      }
      else if (genre19.localeCompare("R&B")==0)
      {
        genre19_value = 3;
        //Debugging statement
        console.log("Genre R&B" + genre19_value)
      }
      else if (genre19.localeCompare("Pop")==0)
      {
        genre19_value = 4;
        //Debugging statement
        console.log("Genre Pop" + genre19_value)
      }
      location19 = myData22.Location;
      ranking19 = myData22.Ranking;
      ranking19_parsed = parseInt(ranking19);
      if ( 1<=ranking19_parsed<=10 )
      {
        ranking19_value = 1;
        //Debugging statement
        console.log("Ranking TOP10" + ranking19_value)
      }
      else if ( 11<=ranking19_parsed<=20 )
      {
        ranking19_value = 2;
        //Debugging statement
        console.log("Ranking TOP20" + ranking19_value)
      }
      else if (21<=ranking19_parsed<=30 )
      {
        ranking19_value = 3;
        //Debugging statement
        console.log("Ranking TOP30" + ranking19_value)
      }

      year19 = myData22.Year;
    }//end if
   }).catch(function (error) {
     console.log("Got and error: ", error);
   })//end catch of docRef19
}//end if != null

//smartnote20
if (docRef23 != null) {
  docRef23.get().then(function (doc) {
    if (doc && doc.exists) {
      var row = table.insertRow(1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      var cell6 = row.insertCell(5);
      const myData23 = doc.data();
      album_name20 = myData23.AlbumName;
      artist_name20 = myData23.ArtistName;
      durtion20 = myData23.Duration;
      emotion20 = myData23.Emotion;
      //Debugging statement
      //console.log("rag_status3" + rag_status3)
      if (emotion20.localeCompare("Angry")==0)
      {
        emotion20_value = 4;
        redsCounter = redsCounter + 1;
        //Debugging statement
        console.log("REDS" + redsCounter)
      }
      else if (emotion20.localeCompare("Happy")==0)
      {
        emotion20_value = 1;
        ambersCounter = ambersCounter + 1;
        //Debugging statement
        console.log("AMBERS" + ambersCounter)
      }
      else if (emotion20.localeCompare("Calm")==0)
      {
        emotion20_value = 2;
        greensCounter = greensCounter + 1;
        //Debugging statement
        console.log("GREENS" + greensCounter)
      }
      else if (emotion20.localeCompare("Sad")==0)
      {
        emotion20_value = 3;
        bluesCounter = bluesCounter + 1;
        //Debugging statement
        console.log("BLUES" + bluesCounter)
      }
      genre20 = myData23.Genre;
      if (genre20.localeCompare("Classic")==0)
      {
        genre20_value = 1;
        //Debugging statement
        console.log("Genre Classic" + genre20_value)
      }
      else if (genre20.localeCompare("Rock")==0)
      {
        genre20_value = 2;
        //Debugging statement
        console.log("Genre Rock" + genre20_value)
      }
      else if (genre20.localeCompare("R&B")==0)
      {
        genre20_value = 3;
        //Debugging statement
        console.log("Genre R&B" + genre20_value)
      }
      else if (genre20.localeCompare("Pop")==0)
      {
        genre20_value = 4;
        //Debugging statement
        console.log("Genre Pop" + genre20_value)
      }
      location20 = myData23.Location;
      ranking20 = myData23.Ranking;
      ranking20_parsed = parseInt(ranking20);
      if ( 1<=ranking20_parsed<=10 )
      {
        ranking20_value = 1;
        //Debugging statement
        console.log("Ranking TOP10" + ranking20_value)
      }
      else if ( 11<=ranking20_parsed<=20)
      {
        ranking20_value = 2;
        //Debugging statement
        console.log("Ranking TOP20" + ranking20_value)
      }
      else if ( 21<=ranking20_parsed<=30 )
      {
        ranking20_value = 3;
        //Debugging statement
        console.log("Ranking TOP30" + ranking20_value)
      }

      year20 = myData23.Year;
    }//end if
   }).catch(function (error) {
     console.log("Got and error: ", error);
   })//end catch of docRef20
}//end if != null

//smartnote21
if (docRef24 != null) {
  docRef24.get().then(function (doc) {
    if (doc && doc.exists) {
      var row = table.insertRow(1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      var cell6 = row.insertCell(5);
      const myData24 = doc.data();
      album_name21 = myData24.AlbumName;
      artist_name21 = myData24.ArtistName;
      durtion21 = myData24.Duration;
      emotion21 = myData24.Emotion;
      //Debugging statement
      //console.log("rag_status3" + rag_status3)
      if (emotion21.localeCompare("Angry")==0)
      {
        emotion21_value = 4;
        redsCounter = redsCounter + 1;
        //Debugging statement
        console.log("REDS" + redsCounter)
      }
      else if (emotion21.localeCompare("Happy")==0)
      {
        emotion21_value = 1;
        ambersCounter = ambersCounter + 1;
        //Debugging statement
        console.log("AMBERS" + ambersCounter)
      }
      else if (emotion21.localeCompare("Calm")==0)
      {
        emotion21_value = 2;
        greensCounter = greensCounter + 1;
        //Debugging statement
        console.log("GREENS" + greensCounter)
      }
      else if (emotion21.localeCompare("Sad")==0)
      {
        emotion21_value = 3;
        bluesCounter = bluesCounter + 1;
        //Debugging statement
        console.log("BLUES" + bluesCounter)
      }
      genre21 = myData24.Genre;
      if (genre21.localeCompare("Classic")==0)
      {
        genre21_value = 1;
        //Debugging statement
        console.log("Genre Classic" + genre21_value)
      }
      else if (genre21.localeCompare("Rock")==0)
      {
        genre21_value = 2;
        //Debugging statement
        console.log("Genre Rock" + genre21_value)
      }
      else if (genre21.localeCompare("R&B")==0)
      {
        genre21_value = 3;
        //Debugging statement
        console.log("Genre R&B" + genre21_value)
      }
      else if (genre21.localeCompare("Pop")==0)
      {
        genre21_value = 4;
        //Debugging statement
        console.log("Genre Pop" + genre21_value)
      }
      location21 = myData24.Location;
      ranking21 = myData24.Ranking;
      ranking21_parsed = parseInt(ranking21);
      if ( 1<=ranking21_parsed<=10 )
      {
        ranking21_value = 1;
        //Debugging statement
        console.log("Ranking TOP10" + ranking21_value)
      }
      else if ( 11<=ranking21_parsed<=20   )
      {
        ranking21_value = 2;
        //Debugging statement
        console.log("Ranking TOP20" + ranking21_value)
      }
      else if (21<=ranking21_parsed<=30 )
      {
        ranking21_value = 3;
        //Debugging statement
        console.log("Ranking TOP30" + ranking21_value)
      }

      year21 = myData24.Year;
    }//end if
   }).catch(function (error) {
     console.log("Got and error: ", error);
   })//end catch of docRef21
}//end if != null

//smartnote22
if (docRef25 != null) {
  docRef25.get().then(function (doc) {
    if (doc && doc.exists) {
      var row = table.insertRow(1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      var cell6 = row.insertCell(5);
      const myData25 = doc.data();
      album_name22 = myData25.AlbumName;
      artist_name22 = myData25.ArtistName;
      durtion22 = myData25.Duration;
      emotion22 = myData25.Emotion;
      //Debugging statement
      //console.log("rag_status3" + rag_status3)
      if (emotion22.localeCompare("Angry")==0)
      {
        emotion22_value = 4;
        redsCounter = redsCounter + 1;
        //Debugging statement
        console.log("REDS" + redsCounter)
      }
      else if (emotion22.localeCompare("Happy")==0)
      {
        emotion22_value = 1;
        ambersCounter = ambersCounter + 1;
        //Debugging statement
        console.log("AMBERS" + ambersCounter)
      }
      else if (emotion22.localeCompare("Calm")==0)
      {
        emotion22_value = 2;
        greensCounter = greensCounter + 1;
        //Debugging statement
        console.log("GREENS" + greensCounter)
      }
      else if (emotion22.localeCompare("Sad")==0)
      {
        emotion22_value = 3;
        bluesCounter = bluesCounter + 1;
        //Debugging statement
        console.log("BLUES" + bluesCounter)
      }
      genre22 = myData25.Genre;
      if (genre22.localeCompare("Classic")==0)
      {
        genre22_value = 1;
        //Debugging statement
        console.log("Genre Classic" + genre22_value)
      }
      else if (genre22.localeCompare("Rock")==0)
      {
        genre22_value = 2;
        //Debugging statement
        console.log("Genre Rock" + genre22_value)
      }
      else if (genre22.localeCompare("R&B")==0)
      {
        genre22_value = 3;
        //Debugging statement
        console.log("Genre R&B" + genre22_value)
      }
      else if (genre22.localeCompare("Pop")==0)
      {
        genre22_value = 4;
        //Debugging statement
        console.log("Genre Pop" + genre22_value)
      }
      location22 = myData25.Location;
      ranking22 = myData25.Ranking;
      ranking22_parsed = parseInt(ranking22);
      if ( 1<=ranking22_parsed<=10 )
      {
        ranking22_value = 1;
        //Debugging statement
        console.log("Ranking TOP10" + ranking22_value)
      }
      else if (11<=ranking22_parsed<=20 )
      {
        ranking22_value = 2;
        //Debugging statement
        console.log("Ranking TOP20" + ranking22_value)
      }
      else if (21<=ranking22_parsed<=30)
      {
        ranking22_value = 3;
        //Debugging statement
        console.log("Ranking TOP30" + ranking22_value)
      }

      year22 = myData25.Year;
    }//end if
   }).catch(function (error) {
     console.log("Got and error: ", error);
   })//end catch of docRef22
}//end if != null

//smartnote23
if (docRef26!= null) {
  docRef26.get().then(function (doc) {
    if (doc && doc.exists) {
      var row = table.insertRow(1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      var cell6 = row.insertCell(5);
      const myData26 = doc.data();
      album_name23 = myData26.AlbumName;
      artist_name23 = myData26.ArtistName;
      durtion23 = myData26.Duration;
      emotion23 = myData26.Emotion;
      //Debugging statement
      //console.log("rag_status3" + rag_status3)
      if (emotion23.localeCompare("Angry")==0)
      {
        emotion23_value = 4;
        redsCounter = redsCounter + 1;
        //Debugging statement
        console.log("REDS" + redsCounter)
      }
      else if (emotion23.localeCompare("Happy")==0)
      {
        emotion23_value = 1;
        ambersCounter = ambersCounter + 1;
        //Debugging statement
        console.log("AMBERS" + ambersCounter)
      }
      else if (emotion23.localeCompare("Calm")==0)
      {
        emotion23_value = 2;
        greensCounter = greensCounter + 1;
        //Debugging statement
        console.log("GREENS" + greensCounter)
      }
      else if (emotion23.localeCompare("Sad")==0)
      {
        emotion23_value = 3;
        bluesCounter = bluesCounter + 1;
        //Debugging statement
        console.log("BLUES" + bluesCounter)
      }
      genre23 = myData26.Genre;
      if (genre23.localeCompare("Classic")==0)
      {
        genre23_value = 1;
        //Debugging statement
        console.log("Genre Classic" + genre23_value)
      }
      else if (genre23.localeCompare("Rock")==0)
      {
        genre23_value = 2;
        //Debugging statement
        console.log("Genre Rock" + genre23_value)
      }
      else if (genre23.localeCompare("R&B")==0)
      {
        genre23_value = 3;
        //Debugging statement
        console.log("Genre R&B" + genre23_value)
      }
      else if (genre23.localeCompare("Pop")==0)
      {
        genre23_value = 4;
        //Debugging statement
        console.log("Genre Pop" + genre23_value)
      }
      location23 = myData26.Location;
      ranking23 = myData26.Ranking;
      ranking23_parsed = parseInt(ranking23);
      if ( 1<=ranking23_parsed<=10 )
      {
        ranking23_value = 1;
        //Debugging statement
        console.log("Ranking TOP10" + ranking23_value)
      }
      else if ( 11<=ranking23_parsed<=20 )
      {
        ranking23_value = 2;
        //Debugging statement
        console.log("Ranking TOP20" + ranking23_value)
      }
      else if ( 21<=ranking23_parsed<=30  )
      {
        ranking23_value = 3;
        //Debugging statement
        console.log("Ranking TOP30" + ranking23_value)
      }

      year23 = myData26.Year;
    }//end if
   }).catch(function (error) {
     console.log("Got and error: ", error);
   })//end catch of docRef23
}//end if != null

//smartnote24
if (docRef27 != null) {
  docRef27.get().then(function (doc) {
    if (doc && doc.exists) {
      var row = table.insertRow(1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      var cell6 = row.insertCell(5);
      const myData27 = doc.data();
      album_name24 = myData27.AlbumName;
      artist_name24 = myData27.ArtistName;
      durtion24 = myData27.Duration;
      emotion24 = myData27.Emotion;
      //Debugging statement
      //console.log("rag_status3" + rag_status3)
      if (emotion24.localeCompare("Angry")==0)
      {
        emotion24_value = 4;
        redsCounter = redsCounter + 1;
        //Debugging statement
        console.log("REDS" + redsCounter)
      }
      else if (emotion24.localeCompare("Happy")==0)
      {
        emotion24_value = 1;
        ambersCounter = ambersCounter + 1;
        //Debugging statement
        console.log("AMBERS" + ambersCounter)
      }
      else if (emotion24.localeCompare("Calm")==0)
      {
        emotion24_value = 2;
        greensCounter = greensCounter + 1;
        //Debugging statement
        console.log("GREENS" + greensCounter)
      }
      else if (emotion24.localeCompare("Sad")==0)
      {
        emotion24_value = 3;
        bluesCounter = bluesCounter + 1;
        //Debugging statement
        console.log("BLUES" + bluesCounter)
      }
      genre24 = myData27.Genre;
      if (genre24.localeCompare("Classic")==0)
      {
        genre24_value = 1;
        //Debugging statement
        console.log("Genre Classic" + genre24_value)
      }
      else if (genre24.localeCompare("Rock")==0)
      {
        genre24_value = 2;
        //Debugging statement
        console.log("Genre Rock" + genre24_value)
      }
      else if (genre24.localeCompare("R&B")==0)
      {
        genre24_value = 3;
        //Debugging statement
        console.log("Genre R&B" + genre24_value)
      }
      else if (genre24.localeCompare("Pop")==0)
      {
        genre24_value = 4;
        //Debugging statement
        console.log("Genre Pop" + genre24_value)
      }
      location24 = myData27.Location;
      ranking24 = myData27.Ranking;
      ranking24_parsed = parseInt(ranking24);
      if ( 1<=ranking24_parsed<=10 )
      {
        ranking24_value = 1;
        //Debugging statement
        console.log("Ranking TOP10" + ranking24_value)
      }
      else if ( 11<=ranking24_parsed<=20  )
      {
        ranking24_value = 2;
        //Debugging statement
        console.log("Ranking TOP20" + ranking24_value)
      }
      else if (21<=ranking24_parsed<=30  )
      {
        ranking24_value = 3;
        //Debugging statement
        console.log("Ranking TOP30" + ranking24_value)
      }
      year24 = myData27.Year;
    }//end if
   }).catch(function (error) {
     console.log("Got and error: ", error);
   })//end catch of docRef24
}//end if != null

//smartnote25
if (docRef28 != null) {
  docRef28.get().then(function (doc) {
    if (doc && doc.exists) {
      var row = table.insertRow(1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      var cell6 = row.insertCell(5);
      const myData28 = doc.data();
      album_name25 = myData28.AlbumName;
      artist_name25 = myData28.ArtistName;
      durtion25 = myData28.Duration;
      emotion25 = myData28.Emotion;
      //Debugging statement
      //console.log("rag_status3" + rag_status3)
      if (emotion25.localeCompare("Angry")==0)
      {
        emotion25_value = 4;
        redsCounter = redsCounter + 1;
        //Debugging statement
        console.log("REDS" + redsCounter)
      }
      else if (emotion25.localeCompare("Happy")==0)
      {
        emotion25_value = 1;
        ambersCounter = ambersCounter + 1;
        //Debugging statement
        console.log("AMBERS" + ambersCounter)
      }
      else if (emotion25.localeCompare("Calm")==0)
      {
        emotion25_value = 2;
        greensCounter = greensCounter + 1;
        //Debugging statement
        console.log("GREENS" + greensCounter)
      }
      else if (emotion25.localeCompare("Sad")==0)
      {
        emotion25_value = 3;
        bluesCounter = bluesCounter + 1;
        //Debugging statement
        console.log("BLUES" + bluesCounter)
      }
      genre25 = myData28.Genre;
      if (genre25.localeCompare("Classic")==0)
      {
        genre25_value = 1;
        //Debugging statement
        console.log("Genre Classic" + genre25_value)
      }
      else if (genre25.localeCompare("Rock")==0)
      {
        genre25_value = 2;
        //Debugging statement
        console.log("Genre Rock" + genre25_value)
      }
      else if (genre25.localeCompare("R&B")==0)
      {
        genre25_value = 3;
        //Debugging statement
        console.log("Genre R&B" + genre25_value)
      }
      else if (genre25.localeCompare("Pop")==0)
      {
        genre25_value = 4;
        //Debugging statement
        console.log("Genre Pop" + genre25_value)
      }
      location25 = myData28.Location;
      ranking25 = myData28.Ranking;
      ranking25_parsed = parseInt(ranking25);
      if ( 1<=ranking25_parsed<=10 )
      {
        ranking25_value = 1;
        //Debugging statement
        console.log("Ranking TOP10" + ranking25_value)
      }
      else if (11<=ranking25_parsed<=20 )
      {
        ranking25_value = 2;
        //Debugging statement
        console.log("Ranking TOP20" + ranking25_value)
      }
      else if (21<=ranking25_parsed<=30 )
      {
        ranking25_value = 3;
        //Debugging statement
        console.log("Ranking TOP30" + ranking25_value)
      }

      year25 = myData28.Year;
    }//end if
   }).catch(function (error) {
     console.log("Got and error: ", error);
   })//end catch of docRef25
}//end if != null

//smartnote26
if (docRef29 != null) {
  docRef29.get().then(function (doc) {
    if (doc && doc.exists) {
      var row = table.insertRow(1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      var cell6 = row.insertCell(5);
      const myData29 = doc.data();
      album_name26 = myData29.AlbumName;
      artist_name26 = myData29.ArtistName;
      durtion26 = myData29.Duration;
      emotion26 = myData29.Emotion;
      //Debugging statement
      //console.log("rag_status3" + rag_status3)
      if (emotion26.localeCompare("Angry")==0)
      {
        emotion26_value = 4;
        redsCounter = redsCounter + 1;
        //Debugging statement
        console.log("REDS" + redsCounter)
      }
      else if (emotion26.localeCompare("Happy")==0)
      {
        emotion26_value = 1;
        ambersCounter = ambersCounter + 1;
        //Debugging statement
        console.log("AMBERS" + ambersCounter)
      }
      else if (emotion26.localeCompare("Calm")==0)
      {
        emotion26_value = 2;
        greensCounter = greensCounter + 1;
        //Debugging statement
        console.log("GREENS" + greensCounter)
      }
      else if (emotion26.localeCompare("Sad")==0)
      {
        emotion26_value = 3;
        bluesCounter = bluesCounter + 1;
        //Debugging statement
        console.log("BLUES" + bluesCounter)
      }
      genre26 = myData29.Genre;
      if (genre26.localeCompare("Classic")==0)
      {
        genre26_value = 1;
        //Debugging statement
        console.log("Genre Classic" + genre26_value)
      }
      else if (genre26.localeCompare("Rock")==0)
      {
        genre26_value = 2;
        //Debugging statement
        console.log("Genre Rock" + genre26_value)
      }
      else if (genre26.localeCompare("R&B")==0)
      {
        genre26_value = 3;
        //Debugging statement
        console.log("Genre R&B" + genre26_value)
      }
      else if (genre26.localeCompare("Pop")==0)
      {
        genre26_value = 4;
        //Debugging statement
        console.log("Genre Pop" + genre26_value)
      }
      location26 = myData29.Location;
      ranking26 = myData29.Ranking;
      ranking26_parsed = parseInt(ranking26);
      if ( 1<=ranking26_parsed<=10 )
      {
        ranking26_value = 1;
        //Debugging statement
        console.log("Ranking TOP10" + ranking26_value)
      }
      else if ( 11<=ranking26_parsed<=20)
      {
        ranking26_value = 2;
        //Debugging statement
        console.log("Ranking TOP20" + ranking26_value)
      }
      else if (21<=ranking26_parsed<=30)
      {
        ranking26_value = 3;
        //Debugging statement
        console.log("Ranking TOP30" + ranking26_value)
      }

      year26 = myData29.Year;
    }//end if
   }).catch(function (error) {
     console.log("Got and error: ", error);
   })//end catch of docRef26
}//end if != null


//smartnote27
if (docRef30 != null) {
  docRef30.get().then(function (doc) {
    if (doc && doc.exists) {
      var row = table.insertRow(1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      var cell6 = row.insertCell(5);
      const myData30 = doc.data();
      album_name27 = myData30.AlbumName;
      artist_name27 = myData30.ArtistName;
      durtion27 = myData30.Duration;
      emotion27 = myData30.Emotion;
      //Debugging statement
      //console.log("rag_status3" + rag_status3)
      if (emotion27.localeCompare("Angry")==0)
      {
        emotion27_value = 4;
        redsCounter = redsCounter + 1;
        //Debugging statement
        console.log("REDS" + redsCounter)
      }
      else if (emotion27.localeCompare("Happy")==0)
      {
        emotion27_value = 1;
        ambersCounter = ambersCounter + 1;
        //Debugging statement
        console.log("AMBERS" + ambersCounter)
      }
      else if (emotion27.localeCompare("Calm")==0)
      {
        emotion27_value = 2;
        greensCounter = greensCounter + 1;
        //Debugging statement
        console.log("GREENS" + greensCounter)
      }
      else if (emotion27.localeCompare("Sad")==0)
      {
        emotion27_value = 3;
        bluesCounter = bluesCounter + 1;
        //Debugging statement
        console.log("BLUES" + bluesCounter)
      }
      genre27 = myData30.Genre;
      if (genre27.localeCompare("Classic")==0)
      {
        genre27_value = 1;
        //Debugging statement
        console.log("Genre Classic" + genre27_value)
      }
      else if (genre27.localeCompare("Rock")==0)
      {
        genre27_value = 2;
        //Debugging statement
        console.log("Genre Rock" + genre27_value)
      }
      else if (genre27.localeCompare("R&B")==0)
      {
        genre27_value = 3;
        //Debugging statement
        console.log("Genre R&B" + genre27_value)
      }
      else if (genre27.localeCompare("Pop")==0)
      {
        genre27_value = 4;
        //Debugging statement
        console.log("Genre Pop" + genre27_value)
      }
      location27 = myData30.Location;
      ranking27 = myData30.Ranking;
      ranking27_parsed = parseInt(ranking27);
      if ( 1<=ranking27_parsed<=10 )
      {
        ranking27_value = 1;
        //Debugging statement
        console.log("Ranking TOP10" + ranking27_value)
      }
      else if ( 11<=ranking27_parsed<=20)
      {
        ranking27_value = 2;
        //Debugging statement
        console.log("Ranking TOP20" + ranking27_value)
      }
      else if (21<=ranking27_parsed<=30  )
      {
        ranking27_value = 3;
        //Debugging statement
        console.log("Ranking TOP30" + ranking27_value)
      }

      year27 = myData30.Year;
    }//end if
   }).catch(function (error) {
     console.log("Got and error: ", error);
   })//end catch of docRef27
}//end if != null

//smartnote28
if (docRef31 != null) {
  docRef31.get().then(function (doc) {
    if (doc && doc.exists) {
      var row = table.insertRow(1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      var cell6 = row.insertCell(5);
      const myData31 = doc.data();
      album_name28 = myData31.AlbumName;
      artist_name28 = myData31.ArtistName;
      durtion28 = myData31.Duration;
      emotion28 = myData31.Emotion;
      //Debugging statement
      //console.log("rag_status3" + rag_status3)
      if (emotion28.localeCompare("Angry")==0)
      {
        emotion28_value = 4;
        redsCounter = redsCounter + 1;
        //Debugging statement
        console.log("REDS" + redsCounter)
      }
      else if (emotion28.localeCompare("Happy")==0)
      {
        emotion28_value = 1;
        ambersCounter = ambersCounter + 1;
        //Debugging statement
        console.log("AMBERS" + ambersCounter)
      }
      else if (emotion28.localeCompare("Calm")==0)
      {
        emotion28_value = 2;
        greensCounter = greensCounter + 1;
        //Debugging statement
        console.log("GREENS" + greensCounter)
      }
      else if (emotion28.localeCompare("Sad")==0)
      {
        emotion28_value = 3;
        bluesCounter = bluesCounter + 1;
        //Debugging statement
        console.log("BLUES" + bluesCounter)
      }
      genre28 = myData31.Genre;
      if (genre28.localeCompare("Classic")==0)
      {
        genre28_value = 1;
        //Debugging statement
        console.log("Genre Classic" + genre28_value)
      }
      else if (genre28.localeCompare("Rock")==0)
      {
        genre28_value = 2;
        //Debugging statement
        console.log("Genre Rock" + genre28_value)
      }
      else if (genre28.localeCompare("R&B")==0)
      {
        genre28_value = 3;
        //Debugging statement
        console.log("Genre R&B" + genre28_value)
      }
      else if (genre28.localeCompare("Pop")==0)
      {
        genre28_value = 4;
        //Debugging statement
        console.log("Genre Pop" + genre28_value)
      }
      location28 = myData31.Location;
      ranking28 = myData31.Ranking;
      ranking28_parsed = parseInt(ranking28);
      if ( 1<=ranking28_parsed<=10  )
      {
        ranking28_value = 1;
        //Debugging statement
        console.log("Ranking TOP10" + ranking28_value)
      }
      else if ( 11<=ranking28_parsed<=20 )
      {
        ranking28_value = 2;
        //Debugging statement
        console.log("Ranking TOP20" + ranking28_value)
      }
      else if (21<=ranking28_parsed<=30)
      {
        ranking28_value = 3;
        //Debugging statement
        console.log("Ranking TOP30" + ranking28_value)
      }

      year28 = myData31.Year;
    }//end if
   }).catch(function (error) {
     console.log("Got and error: ", error);
   })//end catch of docRef28
}//end if != null

//smartnote29
if (docRef32 != null) {
  docRef32.get().then(function (doc) {
    if (doc && doc.exists) {
      var row = table.insertRow(1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      var cell6 = row.insertCell(5);
      const myData32 = doc.data();
      album_name29 = myData32.AlbumName;
      artist_name29 = myData32.ArtistName;
      durtion29 = myData32.Duration;
      emotion29 = myData32.Emotion;
      //Debugging statement
      //console.log("rag_status3" + rag_status3)
      if (emotion29.localeCompare("Angry")==0)
      {
        emotion29_value = 4;
        redsCounter = redsCounter + 1;
        //Debugging statement
        console.log("REDS" + redsCounter)
      }
      else if (emotion29.localeCompare("Happy")==0)
      {
        emotion29_value = 1;
        ambersCounter = ambersCounter + 1;
        //Debugging statement
        console.log("AMBERS" + ambersCounter)
      }
      else if (emotion29.localeCompare("Calm")==0)
      {
        emotion29_value = 2;
        greensCounter = greensCounter + 1;
        //Debugging statement
        console.log("GREENS" + greensCounter)
      }
      else if (emotion29.localeCompare("Sad")==0)
      {
        emotion29_value = 3;
        bluesCounter = bluesCounter + 1;
        //Debugging statement
        console.log("BLUES" + bluesCounter)
      }
      genre29 = myData32.Genre;
      if (genre29.localeCompare("Classic")==0)
      {
        genre29_value = 1;
        //Debugging statement
        console.log("Genre Classic" + genre29_value)
      }
      else if (genre29.localeCompare("Rock")==0)
      {
        genre29_value = 2;
        //Debugging statement
        console.log("Genre Rock" + genre29_value)
      }
      else if (genre29.localeCompare("R&B")==0)
      {
        genre29_value = 3;
        //Debugging statement
        console.log("Genre R&B" + genre29_value)
      }
      else if (genre29.localeCompare("Pop")==0)
      {
        genre29_value = 4;
        //Debugging statement
        console.log("Genre Pop" + genre29_value)
      }
      location29 = myData32.Location;
      ranking29 = myData32.Ranking;
      ranking29_parsed = parseInt(ranking29);
      if ( 1<=ranking29_parsed<=10  )
      {
        ranking29_value = 1;
        //Debugging statement
        console.log("Ranking TOP10" + ranking29_value)
      }
      else if ( 11<=ranking29_parsed<=20)
      {
        ranking29_value = 2;
        //Debugging statement
        console.log("Ranking TOP20" + ranking29_value)
      }
      else if (21<=ranking29_parsed<=30 )
      {
        ranking29_value = 3;
        //Debugging statement
        console.log("Ranking TOP30" + ranking29_value)
      }

      year29 = myData32.Year;
    }//end if
   }).catch(function (error) {
     console.log("Got and error: ", error);
   })//end catch of docRef29
}//end if != null

//smartnote30
if (docRef33 != null) {
  docRef33.get().then(function (doc) {
    if (doc && doc.exists) {
      var row = table.insertRow(1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      var cell6 = row.insertCell(5);
      const myData33 = doc.data();
      album_name30 = myData33.AlbumName;
      artist_name30 = myData33.ArtistName;
      durtion30 = myData33.Duration;
      emotion30 = myData33.Emotion;
      //Debugging statement
      //console.log("rag_status3" + rag_status3)
      if (emotion30.localeCompare("Angry")==0)
      {
        emotion30_value = 4;
        redsCounter = redsCounter + 1;
        //Debugging statement
        console.log("REDS" + redsCounter)
      }
      else if (emotion30.localeCompare("Happy")==0)
      {
        emotion30_value = 1;
        ambersCounter = ambersCounter + 1;
        //Debugging statement
        console.log("AMBERS" + ambersCounter)
      }
      else if (emotion30.localeCompare("Calm")==0)
      {
        emotion30_value = 2;
        greensCounter = greensCounter + 1;
        //Debugging statement
        console.log("GREENS" + greensCounter)
      }
      else if (emotion30.localeCompare("Sad")==0)
      {
        emotion30_value = 3;
        bluesCounter = bluesCounter + 1;
        //Debugging statement
        console.log("BLUES" + bluesCounter)
      }
      genre30 = myData33.Genre;
      if (genre30.localeCompare("Classic")==0)
      {
        genre30_value = 1;
        //Debugging statement
        console.log("Genre Classic" + genre30_value)
      }
      else if (genre30.localeCompare("Rock")==0)
      {
        genre30_value = 2;
        //Debugging statement
        console.log("Genre Rock" + genre30_value)
      }
      else if (genre30.localeCompare("R&B")==0)
      {
        genre30_value = 3;
        //Debugging statement
        console.log("Genre R&B" + genre30_value)
      }
      else if (genre30.localeCompare("Pop")==0)
      {
        genre30_value = 4;
        //Debugging statement
        console.log("Genre Pop" + genre30_value)
      }
      location30 = myData33.Location;
      ranking30 = myData33.Ranking;
      ranking30_parsed = parseInt(ranking30);
      if ( 1<=ranking30_parsed<=10  )
      {
        ranking30_value = 1;
        //Debugging statement
        console.log("Ranking TOP10" + ranking30_value)
      }
      else if ( 11<=ranking30_parsed<=20 )
      {
        ranking30_value = 2;
        //Debugging statement
        console.log("Ranking TOP20" + ranking30_value)
      }
      else if (  21<=ranking30_parsed<=30  )
      {
        ranking30_value = 3;
        //Debugging statement
        console.log("Ranking TOP30" + ranking30_value)
      }

      year30 = myData33.Year;
    }//end if
   }).catch(function (error) {
     console.log("Got and error: ", error);
   })//end catch of docRef30
}//end if != null

//smartnote31
if (docRef34 != null) {
  docRef34.get().then(function (doc) {
    if (doc && doc.exists) {
      var row = table.insertRow(1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      var cell6 = row.insertCell(5);
      const myData34 = doc.data();
      album_name31 = myData34.AlbumName;
      artist_name31 = myData34.ArtistName;
      durtion31 = myData34.Duration;
      emotion31 = myData34.Emotion;
      //Debugging statement
      //console.log("rag_status3" + rag_status3)
      if (emotion31.localeCompare("Angry")==0)
      {
        emotion31_value = 4;
        redsCounter = redsCounter + 1;
        //Debugging statement
        console.log("REDS" + redsCounter)
      }
      else if (emotion31.localeCompare("Happy")==0)
      {
        emotion31_value = 1;
        ambersCounter = ambersCounter + 1;
        //Debugging statement
        console.log("AMBERS" + ambersCounter)
      }
      else if (emotion31.localeCompare("Calm")==0)
      {
        emotion31_value = 2;
        greensCounter = greensCounter + 1;
        //Debugging statement
        console.log("GREENS" + greensCounter)
      }
      else if (emotion31.localeCompare("Sad")==0)
      {
        emotion31_value = 3;
        bluesCounter = bluesCounter + 1;
        //Debugging statement
        console.log("BLUES" + bluesCounter)
      }
      genre31 = myData34.Genre;
      if (genre31.localeCompare("Classic")==0)
      {
        genre31_value = 1;
        //Debugging statement
        console.log("Genre Classic" + genre31_value)
      }
      else if (genre31.localeCompare("Rock")==0)
      {
        genre31_value = 2;
        //Debugging statement
        console.log("Genre Rock" + genre31_value)
      }
      else if (genre31.localeCompare("R&B")==0)
      {
        genre31_value = 3;
        //Debugging statement
        console.log("Genre R&B" + genre31_value)
      }
      else if (genre31.localeCompare("Pop")==0)
      {
        genre31_value = 4;
        //Debugging statement
        console.log("Genre Pop" + genre31_value)
      }
      location31 = myData34.Location;
      ranking31 = myData34.Ranking;
      ranking31_parsed = parseInt(ranking31);
      if ( 1<=ranking31_parsed<=10  )
      {
        ranking31_value = 1;
        //Debugging statement
        console.log("Ranking TOP10" + ranking31_value)
      }
      else if ( 11<=ranking31_parsed<=20 )
      {
        ranking31_value = 2;
        //Debugging statement
        console.log("Ranking TOP20" + ranking31_value)
      }
      else if ( 21<=ranking31_parsed<=30  )
     {
        ranking31_value = 3;
        //Debugging statement
        console.log("Ranking TOP30" + ranking31_value)
      }

      year31 = myData34.Year;
    }//end if
   }).catch(function (error) {
     console.log("Got and error: ", error);
   })//end catch of docRef31
}//end if != null

//smartnote32
if (docRef35 != null) {
  docRef35.get().then(function (doc) {
    if (doc && doc.exists) {
      var row = table.insertRow(1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      var cell6 = row.insertCell(5);
      const myData35 = doc.data();
      album_name32 = myData35.AlbumName;
      artist_name32 = myData35.ArtistName;
      durtion32 = myData35.Duration;
      emotion32 = myData35.Emotion;
      //Debugging statement
      //console.log("rag_status3" + rag_status3)
      if (emotion32.localeCompare("Angry")==0)
      {
        emotion32_value = 4;
        redsCounter = redsCounter + 1;
        //Debugging statement
        console.log("REDS" + redsCounter)
      }
      else if (emotion32.localeCompare("Happy")==0)
      {
        emotion32_value = 1;
        ambersCounter = ambersCounter + 1;
        //Debugging statement
        console.log("AMBERS" + ambersCounter)
      }
      else if (emotion32.localeCompare("Calm")==0)
      {
        emotion32_value = 2;
        greensCounter = greensCounter + 1;
        //Debugging statement
        console.log("GREENS" + greensCounter)
      }
      else if (emotion32.localeCompare("Sad")==0)
      {
        emotion32_value = 3;
        bluesCounter = bluesCounter + 1;
        //Debugging statement
        console.log("BLUES" + bluesCounter)
      }
      genre32 = myData35.Genre;
      if (genre32.localeCompare("Classic")==0)
      {
        genre32_value = 1;
        //Debugging statement
        console.log("Genre Classic" + genre32_value)
      }
      else if (genre32.localeCompare("Rock")==0)
      {
        genre32_value = 2;
        //Debugging statement
        console.log("Genre Rock" + genre32_value)
      }
      else if (genre32.localeCompare("R&B")==0)
      {
        genre32_value = 3;
        //Debugging statement
        console.log("Genre R&B" + genre32_value)
      }
      else if (genre32.localeCompare("Pop")==0)
      {
        genre32_value = 4;
        //Debugging statement
        console.log("Genre Pop" + genre32_value)
      }
      location32 = myData35.Location;
      ranking32 = myData35.Ranking;
      ranking32_parsed = parseInt(ranking32);
      if ( 1<=ranking32_parsed<=10  )
      {
        ranking32_value = 1;
        //Debugging statement
        console.log("Ranking TOP10" + ranking32_value)
      }
      else if ( 11<=ranking32_parsed<=20 )
      {
        ranking32_value = 2;
        //Debugging statement
        console.log("Ranking TOP20" + ranking32_value)
      }
      else if ( 21<=ranking32_parsed<=30  )
      {
        ranking32_value = 3;
        //Debugging statement
        console.log("Ranking TOP30" + ranking32_value)
      }

      year32 = myData35.Year;
    }//end if
   }).catch(function (error) {
     console.log("Got and error: ", error);
   })//end catch of docRef32
}//end if != null

//smartnote33
if (docRef36!= null) {
  docRef36.get().then(function (doc) {
    if (doc && doc.exists) {
      var row = table.insertRow(1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      var cell6 = row.insertCell(5);
      const myData36 = doc.data();
      album_name33 = myData36.AlbumName;
      artist_name33 = myData36.ArtistName;
      durtion33 = myData36.Duration;
      emotion33 = myData36.Emotion;
      //Debugging statement
      //console.log("rag_status3" + rag_status3)
      if (emotion33.localeCompare("Angry")==0)
      {
        emotion33_value = 4;
        redsCounter = redsCounter + 1;
        //Debugging statement
        console.log("REDS" + redsCounter)
      }
      else if (emotion33.localeCompare("Happy")==0)
      {
        emotion33_value = 1;
        ambersCounter = ambersCounter + 1;
        //Debugging statement
        console.log("AMBERS" + ambersCounter)
      }
      else if (emotion33.localeCompare("Calm")==0)
      {
        emotion33_value = 2;
        greensCounter = greensCounter + 1;
        //Debugging statement
        console.log("GREENS" + greensCounter)
      }
      else if (emotion33.localeCompare("Sad")==0)
      {
        emotion33_value = 3;
        bluesCounter = bluesCounter + 1;
        //Debugging statement
        console.log("BLUES" + bluesCounter)
      }
      genre33 = myData36.Genre;
      if (genre33.localeCompare("Classic")==0)
      {
        genre33_value = 1;
        //Debugging statement
        console.log("Genre Classic" + genre33_value)
      }
      else if (genre33.localeCompare("Rock")==0)
      {
        genre33_value = 2;
        //Debugging statement
        console.log("Genre Rock" + genre33_value)
      }
      else if (genre33.localeCompare("R&B")==0)
      {
        genre33_value = 3;
        //Debugging statement
        console.log("Genre R&B" + genre33_value)
      }
      else if (genre33.localeCompare("Pop")==0)
      {
        genre33_value = 4;
        //Debugging statement
        console.log("Genre Pop" + genre33_value)
      }
      location33 = myData36.Location;
      ranking33 = myData36.Ranking;
      ranking33_parsed = parseInt(ranking33);
      if ( 1<=ranking33_parsed<=10  )
      {
        ranking33_value = 1;
        //Debugging statement
        console.log("Ranking TOP10" + ranking33_value)
      }
      else if ( 11<=ranking33_parsed<=20  )
      {
        ranking33_value = 2;
        //Debugging statement
        console.log("Ranking TOP20" + ranking33_value)
      }
      else if ( 21<=ranking33_parsed<=30 )
      {
        ranking33_value = 3;
        //Debugging statement
        console.log("Ranking TOP30" + ranking33_value)
      }

      year33 = myData36.Year;
    }//end if
   }).catch(function (error) {
     console.log("Got and error: ", error);
   })//end catch of docRef33
}//end if != null

//smartnote34
if (docRef37 != null) {
  docRef37.get().then(function (doc) {
    if (doc && doc.exists) {
      var row = table.insertRow(1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      var cell6 = row.insertCell(5);
      const myData37 = doc.data();
      album_name34 = myData37.AlbumName;
      artist_name34 = myData37.ArtistName;
      durtion34 = myData37.Duration;
      emotion34 = myData37.Emotion;
      //Debugging statement
      //console.log("rag_status3" + rag_status3)
      if (emotion34.localeCompare("Angry")==0)
      {
        emotion34_value = 4;
        redsCounter = redsCounter + 1;
        //Debugging statement
        console.log("REDS" + redsCounter)
      }
      else if (emotion34.localeCompare("Happy")==0)
      {
        emotion34_value = 1;
        ambersCounter = ambersCounter + 1;
        //Debugging statement
        console.log("AMBERS" + ambersCounter)
      }
      else if (emotion34.localeCompare("Calm")==0)
      {
        emotion34_value = 2;
        greensCounter = greensCounter + 1;
        //Debugging statement
        console.log("GREENS" + greensCounter)
      }
      else if (emotion34.localeCompare("Sad")==0)
      {
        emotion34_value = 3;
        bluesCounter = bluesCounter + 1;
        //Debugging statement
        console.log("BLUES" + bluesCounter)
      }
      genre34 = myData37.Genre;
      if (genre34.localeCompare("Classic")==0)
      {
        genre34_value = 1;
        //Debugging statement
        console.log("Genre Classic" + genre34_value)
      }
      else if (genre34.localeCompare("Rock")==0)
      {
        genre34_value = 2;
        //Debugging statement
        console.log("Genre Rock" + genre34_value)
      }
      else if (genre34.localeCompare("R&B")==0)
      {
        genre34_value = 3;
        //Debugging statement
        console.log("Genre R&B" + genre34_value)
      }
      else if (genre34.localeCompare("Pop")==0)
      {
        genre34_value = 4;
        //Debugging statement
        console.log("Genre Pop" + genre34_value)
      }
      location34 = myData37.Location;
      ranking34 = myData37.Ranking;
      ranking34_parsed = parseInt(ranking34);
      if ( 1<=ranking34_parsed<=10  )
      {
        ranking34_value = 1;
        //Debugging statement
        console.log("Ranking TOP10" + ranking34_value)
      }
      else if (11<=ranking34_parsed<=20 )
      {
        ranking34_value = 2;
        //Debugging statement
        console.log("Ranking TOP20" + ranking34_value)
      }
      else if ( 21<=ranking34_parsed<=30 )
      {
        ranking34_value = 3;
        //Debugging statement
        console.log("Ranking TOP30" + ranking34_value)
      }

      year34 = myData37.Year;
    }//end if
   }).catch(function (error) {
     console.log("Got and error: ", error);
   })//end catch of docRef34
}//end if != null

//smartnote35
if (docRef38 != null) {
  docRef38.get().then(function (doc) {
    if (doc && doc.exists) {
      var row = table.insertRow(1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      var cell6 = row.insertCell(5);
      const myData38 = doc.data();
      album_name35 = myData38.AlbumName;
      artist_name35 = myData38.ArtistName;
      durtion25 = myData38.Duration;
      emotion35 = myData38.Emotion;
      //Debugging statement
      //console.log("rag_status3" + rag_status3)
      if (emotion35.localeCompare("Angry")==0)
      {
        emotion35_value = 4;
        redsCounter = redsCounter + 1;
        //Debugging statement
        console.log("REDS" + redsCounter)
      }
      else if (emotion35.localeCompare("Happy")==0)
      {
        emotion35_value = 1;
        ambersCounter = ambersCounter + 1;
        //Debugging statement
        console.log("AMBERS" + ambersCounter)
      }
      else if (emotion35.localeCompare("Calm")==0)
      {
        emotion35_value = 2;
        greensCounter = greensCounter + 1;
        //Debugging statement
        console.log("GREENS" + greensCounter)
      }
      else if (emotion35.localeCompare("Sad")==0)
      {
        emotion35_value = 3;
        bluesCounter = bluesCounter + 1;
        //Debugging statement
        console.log("BLUES" + bluesCounter)
      }
      genre35 = myData38.Genre;
      if (genre35.localeCompare("Classic")==0)
      {
        genre35_value = 1;
        //Debugging statement
        console.log("Genre Classic" + genre35_value)
      }
      else if (genre35.localeCompare("Rock")==0)
      {
        genre35_value = 2;
        //Debugging statement
        console.log("Genre Rock" + genre35_value)
      }
      else if (genre35.localeCompare("R&B")==0)
      {
        genre35_value = 3;
        //Debugging statement
        console.log("Genre R&B" + genre35_value)
      }
      else if (genre35.localeCompare("Pop")==0)
      {
        genre35_value = 4;
        //Debugging statement
        console.log("Genre Pop" + genre35_value)
      }
      location35 = myData38.Location;
      ranking35 = myData38.Ranking;
      ranking35_parsed = parseInt(ranking35);
      if ( 1<=ranking35_parsed<=10  )
      {
        ranking35_value = 1;
        //Debugging statement
        console.log("Ranking TOP10" + ranking35_value)
      }
      else if ( 11<=ranking35_parsed<=20 )
      {
        ranking35_value = 2;
        //Debugging statement
        console.log("Ranking TOP20" + ranking35_value)
      }
      else if (21<=ranking35_parsed<=30  )
      {
        ranking35_value = 3;
        //Debugging statement
        console.log("Ranking TOP30" + ranking35_value)
      }

      year35 = myData38.Year;
    }//end if
   }).catch(function (error) {
     console.log("Got and error: ", error);
   })//end catch of docRef35
}//end if != null

//smartnote36
if (docRef39 != null) {
  docRef39.get().then(function (doc) {
    if (doc && doc.exists) {
      var row = table.insertRow(1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      var cell6 = row.insertCell(5);
      const myData39 = doc.data();
      album_name36 = myData39.AlbumName;
      artist_name36 = myData39.ArtistName;
      durtion36 = myData39.Duration;
      emotion36 = myData39.Emotion;
      //Debugging statement
      //console.log("rag_status3" + rag_status3)
      if (emotion36.localeCompare("Angry")==0)
      {
        emotion36_value = 4;
        redsCounter = redsCounter + 1;
        //Debugging statement
        console.log("REDS" + redsCounter)
      }
      else if (emotion36.localeCompare("Happy")==0)
      {
        emotion36_value = 1;
        ambersCounter = ambersCounter + 1;
        //Debugging statement
        console.log("AMBERS" + ambersCounter)
      }
      else if (emotion36.localeCompare("Calm")==0)
      {
        emotion36_value = 2;
        greensCounter = greensCounter + 1;
        //Debugging statement
        console.log("GREENS" + greensCounter)
      }
      else if (emotion36.localeCompare("Sad")==0)
      {
        emotion36_value = 3;
        bluesCounter = bluesCounter + 1;
        //Debugging statement
        console.log("BLUES" + bluesCounter)
      }

      genre36 = myData39.Genre;
      if (genre36.localeCompare("Classic")==0)
      {
        genre36_value = 1;
        //Debugging statement
        console.log("Genre Classic" + genre36_value)
      }
      else if (genre36.localeCompare("Rock")==0)
      {
        genre36_value = 2;
        //Debugging statement
        console.log("Genre Rock" + genre36_value)
      }
      else if (genre36.localeCompare("R&B")==0)
      {
        genre36_value = 3;
        //Debugging statement
        console.log("Genre R&B" + genre36_value)
      }
      else if (genre36.localeCompare("Pop")==0)
      {
        genre36_value = 4;
        //Debugging statement
        console.log("Genre Pop" + genre36_value)
      }
      location36 = myData39.Location;
      ranking36 = myData39.Ranking;
      ranking36_parsed = parseInt(ranking36);
      if ( 1<=ranking36_parsed<=10  )
      {
        ranking36_value = 1;
        //Debugging statement
        console.log("Ranking TOP10" + ranking36_value)
      }
      else if (11<=ranking36_parsed<=20 )
      {
        ranking36_value = 2;
        //Debugging statement
        console.log("Ranking TOP20" + ranking36_value)
      }
      else if (21<=ranking36_parsed<=30 )
      {
        ranking36_value = 3;
        //Debugging statement
        console.log("Ranking TOP30" + ranking36_value)
      }

      year36 = myData39.Year;
    }//end if
   }).catch(function (error) {
     console.log("Got and error: ", error);
   })//end catch of docRef39
}//end if != null


//smartnote37
if (docRef40 != null) {
  docRef40.get().then(function (doc) {
    if (doc && doc.exists) {
      var row = table.insertRow(1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      var cell6 = row.insertCell(5);
      const myData40 = doc.data();
      album_name37 = myData40.AlbumName;
      artist_name37 = myData40.ArtistName;
      durtion37 = myData40.Duration;
      emotion37 = myData40.Emotion;
      //Debugging statement
      //console.log("rag_status3" + rag_status3)
      if (emotion37.localeCompare("Angry")==0)
      {
        emotion37_value = 4;
        redsCounter = redsCounter + 1;
        //Debugging statement
        console.log("REDS" + redsCounter)
      }
      else if (emotion37.localeCompare("Happy")==0)
      {
        emotion37_value = 1;
        ambersCounter = ambersCounter + 1;
        //Debugging statement
        console.log("AMBERS" + ambersCounter)
      }
      else if (emotion37.localeCompare("Calm")==0)
      {
        emotion37_value = 2;
        greensCounter = greensCounter + 1;
        //Debugging statement
        console.log("GREENS" + greensCounter)
      }
      else if (emotion37.localeCompare("Sad")==0)
      {
        emotion37_value = 3;
        bluesCounter = bluesCounter + 1;
        //Debugging statement
        console.log("BLUES" + bluesCounter)
      }
      genre37 = myData40.Genre;
      if (genre37.localeCompare("Classic")==0)
      {
        genre37_value = 1;
        //Debugging statement
        console.log("Genre Classic" + genre37_value)
      }
      else if (genre37.localeCompare("Rock")==0)
      {
        genre37_value = 2;
        //Debugging statement
        console.log("Genre Rock" + genre37_value)
      }
      else if (genre37.localeCompare("R&B")==0)
      {
        genre37_value = 3;
        //Debugging statement
        console.log("Genre R&B" + genre37_value)
      }
      else if (genre37.localeCompare("Pop")==0)
      {
        genre37_value = 4;
        //Debugging statement
        console.log("Genre Pop" + genre37_value)
      }
      location37 = myData40.Location;
      ranking37 = myData40.Ranking;
      ranking37_parsed = parseInt(ranking37);
      if ( 1<=ranking37_parsed<=10  )
      {
        ranking37_value = 1;
        //Debugging statement
        console.log("Ranking TOP10" + ranking37_value)
      }
      else if (11<=ranking37_parsed<=20  )
      {
        ranking37_value = 2;
        //Debugging statement
        console.log("Ranking TOP20" + ranking37_value)
      }
      else if (21<=ranking37_parsed<=30  )
      {
        ranking37_value = 3;
        //Debugging statement
        console.log("Ranking TOP30" + ranking37_value)
      }

      year37 = myData40.Year;
    }//end if
   }).catch(function (error) {
     console.log("Got and error: ", error);
   })//end catch of docRef37
}//end if != null

//smartnote38
if (docRef41 != null) {
  docRef41.get().then(function (doc) {
    if (doc && doc.exists) {
      var row = table.insertRow(1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      var cell6 = row.insertCell(5);
      const myData41 = doc.data();
      album_name38 = myData41.AlbumName;
      artist_name38 = myData41.ArtistName;
      durtion38 = myData41.Duration;
      emotion38 = myData41.Emotion;
      //Debugging statement
      //console.log("rag_status3" + rag_status3)
      if (emotion38.localeCompare("Angry")==0)
      {
        emotion38_value = 4;
        redsCounter = redsCounter + 1;
        //Debugging statement
        console.log("REDS" + redsCounter)
      }
      else if (emotion38.localeCompare("Happy")==0)
      {
        emotion38_value = 1;
        ambersCounter = ambersCounter + 1;
        //Debugging statement
        console.log("AMBERS" + ambersCounter)
      }
      else if (emotion38.localeCompare("Calm")==0)
      {
        emotion38_value = 2;
        greensCounter = greensCounter + 1;
        //Debugging statement
        console.log("GREENS" + greensCounter)
      }
      else if (emotion38.localeCompare("Sad")==0)
      {
        emotion38_value = 3;
        bluesCounter = bluesCounter + 1;
        //Debugging statement
        console.log("BLUES" + bluesCounter)
      }
      genre38 = myData41.Genre;
      if (genre38.localeCompare("Classic")==0)
      {
        genre38_value = 1;
        //Debugging statement
        console.log("Genre Classic" + genre38_value)
      }
      else if (genre38.localeCompare("Rock")==0)
      {
        genre38_value = 2;
        //Debugging statement
        console.log("Genre Rock" + genre38_value)
      }
      else if (genre38.localeCompare("R&B")==0)
      {
        genre38_value = 3;
        //Debugging statement
        console.log("Genre R&B" + genre38_value)
      }
      else if (genre38.localeCompare("Pop")==0)
      {
        genre38_value = 4;
        //Debugging statement
        console.log("Genre Pop" + genre38_value)
      }
      location38 = myData41.Location;
      ranking38 = myData41.Ranking;
      ranking38_parsed = parseInt(ranking38);
      if ( 1<=ranking38_parsed<=10  )
      {
        ranking38_value = 1;
        //Debugging statement
        console.log("Ranking TOP10" + ranking38_value)
      }
      else if ( 11<=ranking38_parsed<=20 )
      {
        ranking38_value = 2;
        //Debugging statement
        console.log("Ranking TOP20" + ranking38_value)
      }
      else if ( 21<=ranking38_parsed<=30  )
      {
        ranking38_value = 3;
        //Debugging statement
        console.log("Ranking TOP30" + ranking38_value)
      }

      year38 = myData41.Year;
    }//end if
   }).catch(function (error) {
     console.log("Got and error: ", error);
   })//end catch of docRef28
}//end if != null

//smartnote39
if (docRef42 != null) {
  docRef42.get().then(function (doc) {
    if (doc && doc.exists) {
      var row = table.insertRow(1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      var cell6 = row.insertCell(5);
      const myData42 = doc.data();
      album_name39 = myData42.AlbumName;
      artist_name39 = myData42.ArtistName;
      durtion39 = myData42.Duration;
      emotion39 = myData42.Emotion;
      //Debugging statement
      //console.log("rag_status3" + rag_status3)
      if (emotion39.localeCompare("Angry")==0)
      {
        emotion39_value = 4;
        redsCounter = redsCounter + 1;
        //Debugging statement
        console.log("REDS" + redsCounter)
      }
      else if (emotion39.localeCompare("Happy")==0)
      {
        emotion39_value = 1;
        ambersCounter = ambersCounter + 1;
        //Debugging statement
        console.log("AMBERS" + ambersCounter)
      }
      else if (emotion39.localeCompare("Calm")==0)
      {
        emotion39_value = 2;
        greensCounter = greensCounter + 1;
        //Debugging statement
        console.log("GREENS" + greensCounter)
      }
      else if (emotion39.localeCompare("Sad")==0)
      {
        emotion39_value = 3;
        bluesCounter = bluesCounter + 1;
        //Debugging statement
        console.log("BLUES" + bluesCounter)
      }
      genre39 = myData42.Genre;
      if (genre39.localeCompare("Classic")==0)
      {
        genre39_value = 1;
        //Debugging statement
        console.log("Genre Classic" + genre39_value)
      }
      else if (genre39.localeCompare("Rock")==0)
      {
        genre39_value = 2;
        //Debugging statement
        console.log("Genre Rock" + genre39_value)
      }
      else if (genre39.localeCompare("R&B")==0)
      {
        genre39_value = 3;
        //Debugging statement
        console.log("Genre R&B" + genre39_value)
      }
      else if (genre39.localeCompare("Pop")==0)
      {
        genre39_value = 4;
        //Debugging statement
        console.log("Genre Pop" + genre39_value)
      }
      location39 = myData42.Location;
      ranking39 = myData42.Ranking;
      ranking39_parsed = parseInt(ranking39);
      if ( 1<=ranking39_parsed<=10  )
      {
        ranking39_value = 1;
        //Debugging statement
        console.log("Ranking TOP10" + ranking39_value)
      }
      else if ( 11<=ranking39_parsed<=20  )
      {
        ranking39_value = 2;
        //Debugging statement
        console.log("Ranking TOP20" + ranking39_value)
      }
      else if ( 21<=ranking39_parsed<=30  )
      {
        ranking39_value = 3;
        //Debugging statement
        console.log("Ranking TOP30" + ranking39_value)
      }

      year39 = myData42.Year;
    }//end if
   }).catch(function (error) {
     console.log("Got and error: ", error);
   })//end catch of docRef39
}//end if != null

//smartnote40
if (docRef43 != null) {
  docRef43.get().then(function (doc) {
    if (doc && doc.exists) {
      var row = table.insertRow(1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      var cell6 = row.insertCell(5);
      const myData43 = doc.data();
      album_name40 = myData43.AlbumName;
      artist_name40 = myData43.ArtistName;
      durtion40 = myData43.Duration;
      emotion40 = myData43.Emotion;
      //Debugging statement
      //console.log("rag_status3" + rag_status3)
      if (emotion40.localeCompare("Angry")==0)
      {
        emotion40_value = 4;
        redsCounter = redsCounter + 1;
        //Debugging statement
        console.log("REDS" + redsCounter)
      }
      else if (emotion40.localeCompare("Happy")==0)
      {
        emotion40_value = 1;
        ambersCounter = ambersCounter + 1;
        //Debugging statement
        console.log("AMBERS" + ambersCounter)
      }
      else if (emotion40.localeCompare("Calm")==0)
      {
        emotion40_value = 2;
        greensCounter = greensCounter + 1;
        //Debugging statement
        console.log("GREENS" + greensCounter)
      }
      else if (emotion40.localeCompare("Sad")==0)
      {
        emotion40_value = 3;
        bluesCounter = bluesCounter + 1;
        //Debugging statement
        console.log("BLUES" + bluesCounter)
      }
      genre40 = myData43.Genre;
      if (genre40.localeCompare("Classic")==0)
      {
        genre40_value = 1;
        //Debugging statement
        console.log("Genre Classic" + genre40_value)
      }
      else if (genre40.localeCompare("Rock")==0)
      {
        genre40_value = 2;
        //Debugging statement
        console.log("Genre Rock" + genre40_value)
      }
      else if (genre40.localeCompare("R&B")==0)
      {
        genre40_value = 3;
        //Debugging statement
        console.log("Genre R&B" + genre40_value)
      }
      else if (genre40.localeCompare("Pop")==0)
      {
        genre40_value = 4;
        //Debugging statement
        console.log("Genre Pop" + genre40_value)
      }
      location40 = myData43.Location;
      ranking40 = myData43.Ranking;
      ranking40_parsed = parseInt(ranking40);
      if ( 1<=ranking40_parsed<=10  )
      {
        ranking40_value = 1;
        //Debugging statement
        console.log("Ranking TOP10" + ranking40_value)
      }
      else if ( 11<=ranking40_parsed<=20  )
      {
        ranking40_value = 2;
        //Debugging statement
        console.log("Ranking TOP20" + ranking40_value)
      }
      else if ( 21<=ranking40_parsed<=30  )
      {
        ranking40_value = 3;
        //Debugging statement
        console.log("Ranking TOP30" + ranking40_value)
      }

      year40 = myData43.Year;
    }//end if
   }).catch(function (error) {
     console.log("Got and error: ", error);
   })//end catch of docRef40
}//end if != null

//smartnote41
if (docRef44 != null) {
  docRef44.get().then(function (doc) {
    if (doc && doc.exists) {
      var row = table.insertRow(1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      var cell6 = row.insertCell(5);
      const myData44 = doc.data();
      album_name41 = myData44.AlbumName;
      artist_name41 = myData44.ArtistName;
      durtion41 = myData44.Duration;
      emotion41 = myData44.Emotion;
      //Debugging statement
      //console.log("rag_status3" + rag_status3)
      if (emotion41.localeCompare("Angry")==0)
      {
        emotion41_value = 4;
        redsCounter = redsCounter + 1;
        //Debugging statement
        console.log("REDS" + redsCounter)
      }
      else if (emotion41.localeCompare("Happy")==0)
      {
        emotion41_value = 1;
        ambersCounter = ambersCounter + 1;
        //Debugging statement
        console.log("AMBERS" + ambersCounter)
      }
      else if (emotion41.localeCompare("Calm")==0)
      {
        emotion41_value = 2;
        greensCounter = greensCounter + 1;
        //Debugging statement
        console.log("GREENS" + greensCounter)
      }
      else if (emotion41.localeCompare("Sad")==0)
      {
        emotion41_value = 3;
        bluesCounter = bluesCounter + 1;
        //Debugging statement
        console.log("BLUES" + bluesCounter)
      }
      genre41 = myData44.Genre;
      if (genre41.localeCompare("Classic")==0)
      {
        genre41_value = 1;
        //Debugging statement
        console.log("Genre Classic" + genre41_value)
      }
      else if (genre41.localeCompare("Rock")==0)
      {
        genre41_value = 2;
        //Debugging statement
        console.log("Genre Rock" + genre41_value)
      }
      else if (genre41.localeCompare("R&B")==0)
      {
        genre41_value = 3;
        //Debugging statement
        console.log("Genre R&B" + genre41_value)
      }
      else if (genre41.localeCompare("Pop")==0)
      {
        genre41_value = 4;
        //Debugging statement
        console.log("Genre Pop" + genre41_value)
      }
      location41 = myData44.Location;
      ranking41 = myData44.Ranking;
      ranking41_parsed = parseInt(ranking41);
      if ( 1<=ranking41_parsed<=10  )
      {
        ranking41_value = 1;
        //Debugging statement
        console.log("Ranking TOP10" + ranking41_value)
      }
      else if (  11<=ranking41_parsed<=20 )
      {
        ranking41_value = 2;
        //Debugging statement
        console.log("Ranking TOP20" + ranking41_value)
      }
      else if ( 21<=ranking41_parsed<=30  )
      {
        ranking41_value = 3;
        //Debugging statement
        console.log("Ranking TOP30" + ranking41_value)
      }

      year41 = myData44.Year;
    }//end if
   }).catch(function (error) {
     console.log("Got and error: ", error);
   })//end catch of docRef41
}//end if != null

//smartnote42
if (docRef45 != null) {
  docRef45.get().then(function (doc) {
    if (doc && doc.exists) {
      var row = table.insertRow(1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      var cell6 = row.insertCell(5);
      const myData45 = doc.data();
      album_name42 = myData45.AlbumName;
      artist_name42 = myData45.ArtistName;
      durtion42 = myData45.Duration;
      emotion42 = myData45.Emotion;
      //Debugging statement
      //console.log("rag_status3" + rag_status3)
      if (emotion42.localeCompare("Angry")==0)
      {
        emotion42_value = 4;
        redsCounter = redsCounter + 1;
        //Debugging statement
        console.log("REDS" + redsCounter)
      }
      else if (emotion42.localeCompare("Happy")==0)
      {
        emotion42_value = 1;
        ambersCounter = ambersCounter + 1;
        //Debugging statement
        console.log("AMBERS" + ambersCounter)
      }
      else if (emotion42.localeCompare("Calm")==0)
      {
        emotion42_value = 2;
        greensCounter = greensCounter + 1;
        //Debugging statement
        console.log("GREENS" + greensCounter)
      }
      else if (emotion42.localeCompare("Sad")==0)
      {
        emotion42_value = 3;
        bluesCounter = bluesCounter + 1;
        //Debugging statement
        console.log("BLUES" + bluesCounter)
      }
      genre42 = myData45.Genre;
      if (genre42.localeCompare("Classic")==0)
      {
        genre42_value = 1;
        //Debugging statement
        console.log("Genre Classic" + genre42_value)
      }
      else if (genre42.localeCompare("Rock")==0)
      {
        genre42_value = 2;
        //Debugging statement
        console.log("Genre Rock" + genre42_value)
      }
      else if (genre42.localeCompare("R&B")==0)
      {
        genre42_value = 3;
        //Debugging statement
        console.log("Genre R&B" + genre42_value)
      }
      else if (genre42.localeCompare("Pop")==0)
      {
        genre42_value = 4;
        //Debugging statement
        console.log("Genre Pop" + genre42_value)
      }
      location42 = myData45.Location;
      ranking42 = myData45.Ranking;
      ranking42_parsed = parseInt(ranking42);
      if ( 1<=ranking42_parsed<=10  )
      {
        ranking42_value = 1;
        //Debugging statement
        console.log("Ranking TOP10" + ranking42_value)
      }
      else if ( 11<=ranking42_parsed<=20 )
      {
        ranking42_value = 2;
        //Debugging statement
        console.log("Ranking TOP20" + ranking42_value)
      }
      else if ( 21<=ranking42_parsed<=30  )
      {
        ranking42_value = 3;
        //Debugging statement
        console.log("Ranking TOP30" + ranking42_value)
      }

      year42 = myData45.Year;
    }//end if
   }).catch(function (error) {
     console.log("Got and error: ", error);
   })//end catch of docRef42
}//end if != null

//smartnote43
if (docRef46!= null) {
  docRef46.get().then(function (doc) {
    if (doc && doc.exists) {
      var row = table.insertRow(1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      var cell6 = row.insertCell(5);
      const myData46 = doc.data();
      album_name43 = myData46.AlbumName;
      artist_name43 = myData46.ArtistName;
      durtion43 = myData46.Duration;
      emotion43 = myData46.Emotion;
      //Debugging statement
      //console.log("rag_status3" + rag_status3)
      if (emotion43.localeCompare("Angry")==0)
      {
        emotion43_value = 4;
        redsCounter = redsCounter + 1;
        //Debugging statement
        console.log("REDS" + redsCounter)
      }
      else if (emotion43.localeCompare("Happy")==0)
      {
        emotion43_value = 1;
        ambersCounter = ambersCounter + 1;
        //Debugging statement
        console.log("AMBERS" + ambersCounter)
      }
      else if (emotion43.localeCompare("Calm")==0)
      {
        emotion43_value = 2;
        greensCounter = greensCounter + 1;
        //Debugging statement
        console.log("GREENS" + greensCounter)
      }
      else if (emotion43.localeCompare("Sad")==0)
      {
        emotion43_value = 3;
        bluesCounter = bluesCounter + 1;
        //Debugging statement
        console.log("BLUES" + bluesCounter)
      }
      genre43 = myData46.Genre;
      if (genre43.localeCompare("Classic")==0)
      {
        genre43_value = 1;
        //Debugging statement
        console.log("Genre Classic" + genre43_value)
      }
      else if (genre43.localeCompare("Rock")==0)
      {
        genre43_value = 2;
        //Debugging statement
        console.log("Genre Rock" + genre43_value)
      }
      else if (genre43.localeCompare("R&B")==0)
      {
        genre43_value = 3;
        //Debugging statement
        console.log("Genre R&B" + genre43_value)
      }
      else if (genre43.localeCompare("Pop")==0)
      {
        genre43_value = 4;
        //Debugging statement
        console.log("Genre Pop" + genre43_value)
      }
      location43 = myData46.Location;
      ranking43 = myData46.Ranking;
      ranking43_parsed = parseInt(ranking43);
      if ( 1<=ranking43_parsed<=10  )
      {
        ranking43_value = 1;
        //Debugging statement
        console.log("Ranking TOP10" + ranking43_value)
      }
      else if (11<=ranking43_parsed<=20 )
      {
        ranking43_value = 2;
        //Debugging statement
        console.log("Ranking TOP20" + ranking43_value)
      }
      else if (21<=ranking43_parsed<=30 )
      {
        ranking43_value = 3;
        //Debugging statement
        console.log("Ranking TOP30" + ranking43_value)
      }

      year43 = myData46.Year;
    }//end if
   }).catch(function (error) {
     console.log("Got and error: ", error);
   })//end catch of docRef43
}//end if != null

//smartnote44
if (docRef47 != null) {
  docRef47.get().then(function (doc) {
    if (doc && doc.exists) {
      var row = table.insertRow(1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      var cell6 = row.insertCell(5);
      const myData47 = doc.data();
      album_name44 = myData47.AlbumName;
      artist_name44 = myData47.ArtistName;
      durtion44 = myData47.Duration;
      emotion44 = myData47.Emotion;
      //Debugging statement
      //console.log("rag_status3" + rag_status3)
      if (emotion44.localeCompare("Angry")==0)
      {
        emotion44_value = 4;
        redsCounter = redsCounter + 1;
        //Debugging statement
        console.log("REDS" + redsCounter)
      }
      else if (emotion44.localeCompare("Happy")==0)
      {
        emotion44_value = 1;
        ambersCounter = ambersCounter + 1;
        //Debugging statement
        console.log("AMBERS" + ambersCounter)
      }
      else if (emotion44.localeCompare("Calm")==0)
      {
        emotion44_value = 2;
        greensCounter = greensCounter + 1;
        //Debugging statement
        console.log("GREENS" + greensCounter)
      }
      else if (emotion44.localeCompare("Sad")==0)
      {
        emotion44_value = 3;
        bluesCounter = bluesCounter + 1;
        //Debugging statement
        console.log("BLUES" + bluesCounter)
      }
      genre44 = myData47.Genre;
      if (genre44.localeCompare("Classic")==0)
      {
        genre44_value = 1;
        //Debugging statement
        console.log("Genre Classic" + genre44_value)
      }
      else if (genre44.localeCompare("Rock")==0)
      {
        genre44_value = 2;
        //Debugging statement
        console.log("Genre Rock" + genre44_value)
      }
      else if (genre44.localeCompare("R&B")==0)
      {
        genre44_value = 3;
        //Debugging statement
        console.log("Genre R&B" + genre44_value)
      }
      else if (genre44.localeCompare("Pop")==0)
      {
        genre44_value = 4;
        //Debugging statement
        console.log("Genre Pop" + genre44_value)
      }
      location44 = myData47.Location;
      ranking44 = myData47.Ranking;
      ranking44_parsed = parseInt(ranking44);
      if ( 1<=ranking44_parsed<=10  )
      {
        ranking44_value = 1;
        //Debugging statement
        console.log("Ranking TOP10" + ranking44_value)
      }
      else if ( 11<=ranking44_parsed<=20 )
      {
        ranking44_value = 2;
        //Debugging statement
        console.log("Ranking TOP20" + ranking44_value)
      }
      else if ( 21<=ranking44_parsed<=30  )
      {
        ranking44_value = 3;
        //Debugging statement
        console.log("Ranking TOP30" + ranking44_value)
      }

      year44 = myData47.Year;
    }//end if
   }).catch(function (error) {
     console.log("Got and error: ", error);
   })//end catch of docRef44
}//end if != null

//smartnote45
if (docRef48 != null) {
  docRef48.get().then(function (doc) {
    if (doc && doc.exists) {
      var row = table.insertRow(1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      var cell6 = row.insertCell(5);
      const myData48 = doc.data();
      album_name45 = myData48.AlbumName;
      artist_name45 = myData48.ArtistName;
      durtion45 = myData48.Duration;
      emotion45 = myData48.Emotion;
      //Debugging statement
      //console.log("rag_status3" + rag_status3)
      if (emotion45.localeCompare("Angry")==0)
      {
        emotion45_value = 4;
        redsCounter = redsCounter + 1;
        //Debugging statement
        console.log("REDS" + redsCounter)
      }
      else if (emotion45.localeCompare("Happy")==0)
      {
        emotion45_value = 1;
        ambersCounter = ambersCounter + 1;
        //Debugging statement
        console.log("AMBERS" + ambersCounter)
      }
      else if (emotion45.localeCompare("Calm")==0)
      {
        emotion45_value = 2;
        greensCounter = greensCounter + 1;
        //Debugging statement
        console.log("GREENS" + greensCounter)
      }
      else if (emotion45.localeCompare("Sad")==0)
      {
        emotion45_value = 3;
        bluesCounter = bluesCounter + 1;
        //Debugging statement
        console.log("BLUES" + bluesCounter)
      }
      genre45 = myData48.Genre;
      if (genre45.localeCompare("Classic")==0)
      {
        genre45_value = 1;
        //Debugging statement
        console.log("Genre Classic" + genre45_value)
      }
      else if (genre45.localeCompare("Rock")==0)
      {
        genre45_value = 2;
        //Debugging statement
        console.log("Genre Rock" + genre45_value)
      }
      else if (genre45.localeCompare("R&B")==0)
      {
        genre45_value = 3;
        //Debugging statement
        console.log("Genre R&B" + genre45_value)
      }
      else if (genre45.localeCompare("Pop")==0)
      {
        genre45_value = 4;
        //Debugging statement
        console.log("Genre Pop" + genre45_value)
      }
      location45 = myData48.Location;
      ranking45 = myData48.Ranking;
      ranking45_parsed = parseInt(ranking45);
      if ( 1<=ranking45_parsed<=10  )
      {
        ranking45_value = 1;
        //Debugging statement
        console.log("Ranking TOP10" + ranking45_value)
      }
      else if (11<=ranking45_parsed<=20 )
      {
        ranking45_value = 2;
        //Debugging statement
        console.log("Ranking TOP20" + ranking45_value)
      }
      else if ( 21<=ranking45_parsed<=30 )
      {
        ranking45_value = 3;
        //Debugging statement
        console.log("Ranking TOP30" + ranking45_value)
      }

      year45 = myData48.Year;
    }//end if
   }).catch(function (error) {
     console.log("Got and error: ", error);
   })//end catch of docRef45
}//end if != null

//smartnote46
if (docRef49 != null) {
  docRef49.get().then(function (doc) {
    if (doc && doc.exists) {
      var row = table.insertRow(1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      var cell6 = row.insertCell(5);
      const myData49 = doc.data();
      album_name46 = myData49.AlbumName;
      artist_name46 = myData49.ArtistName;
      durtion46 = myData49.Duration;
      emotion46 = myData49.Emotion;
      //Debugging statement
      //console.log("rag_status3" + rag_status3)
      if (emotion46.localeCompare("Angry")==0)
      {
        emotion46_value = 4;
        redsCounter = redsCounter + 1;
        //Debugging statement
        console.log("REDS" + redsCounter)
      }
      else if (emotion46.localeCompare("Happy")==0)
      {
        emotion46_value = 1;
        ambersCounter = ambersCounter + 1;
        //Debugging statement
        console.log("AMBERS" + ambersCounter)
      }
      else if (emotion46.localeCompare("Calm")==0)
      {
        emotion46_value = 2;
        greensCounter = greensCounter + 1;
        //Debugging statement
        console.log("GREENS" + greensCounter)
      }
      else if (emotion46.localeCompare("Sad")==0)
      {
        emotion46_value = 3;
        bluesCounter = bluesCounter + 1;
        //Debugging statement
        console.log("BLUES" + bluesCounter)
      }
      genre46 = myData49.Genre;
      if (genre46.localeCompare("Classic")==0)
      {
        genre46_value = 1;
        //Debugging statement
        console.log("Genre Classic" + genre46_value)
      }
      else if (genre46.localeCompare("Rock")==0)
      {
        genre46_value = 2;
        //Debugging statement
        console.log("Genre Rock" + genre46_value)
      }
      else if (genre46.localeCompare("R&B")==0)
      {
        genre46_value = 3;
        //Debugging statement
        console.log("Genre R&B" + genre46_value)
      }
      else if (genre46.localeCompare("Pop")==0)
      {
        genre46_value = 4;
        //Debugging statement
        console.log("Genre Pop" + genre46_value)
      }
      location46 = myData49.Location;
      ranking46 = myData49.Ranking;
      ranking46_parsed = parseInt(ranking46);
      if ( 1<=ranking46_parsed<=10  )
      {
        ranking46_value = 1;
        //Debugging statement
        console.log("Ranking TOP10" + ranking46_value)
      }
      else if ( 11<=ranking46_parsed<=20 )
      {
        ranking46_value = 2;
        //Debugging statement
        console.log("Ranking TOP20" + ranking46_value)
      }
      else if (21<=ranking46_parsed<=30  )
      {
        ranking46_value = 3;
        //Debugging statement
        console.log("Ranking TOP30" + ranking46_value)
      }

      year46 = myData49.Year;
    }//end if
   }).catch(function (error) {
     console.log("Got and error: ", error);
   })//end catch of docRef46
}//end if != null


//smartnote47
if (docRef50 != null) {
  docRef50.get().then(function (doc) {
    if (doc && doc.exists) {
      var row = table.insertRow(1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      var cell6 = row.insertCell(5);
      const myData50 = doc.data();
      album_name47 = myData50.AlbumName;
      artist_name47 = myData50.ArtistName;
      durtion47 = myData50.Duration;
      emotion47 = myData50.Emotion;
      //Debugging statement
      //console.log("rag_status3" + rag_status3)
      if (emotion47.localeCompare("Angry")==0)
      {
        emotion47_value = 4;
        redsCounter = redsCounter + 1;
        //Debugging statement
        console.log("REDS" + redsCounter)
      }
      else if (emotion47.localeCompare("Happy")==0)
      {
        emotion47_value = 1;
        ambersCounter = ambersCounter + 1;
        //Debugging statement
        console.log("AMBERS" + ambersCounter)
      }
      else if (emotion47.localeCompare("Calm")==0)
      {
        emotion47_value = 2;
        greensCounter = greensCounter + 1;
        //Debugging statement
        console.log("GREENS" + greensCounter)
      }
      else if (emotion47.localeCompare("Sad")==0)
      {
        emotion47_value = 3;
        bluesCounter = bluesCounter + 1;
        //Debugging statement
        console.log("BLUES" + bluesCounter)
      }
      genre47 = myData50.Genre;
      if (genre47.localeCompare("Classic")==0)
      {
        genre47_value = 1;
        //Debugging statement
        console.log("Genre Classic" + genre47_value)
      }
      else if (genre47.localeCompare("Rock")==0)
      {
        genre47_value = 2;
        //Debugging statement
        console.log("Genre Rock" + genre47_value)
      }
      else if (genre47.localeCompare("R&B")==0)
      {
        genre47_value = 3;
        //Debugging statement
        console.log("Genre R&B" + genre47_value)
      }
      else if (genre47.localeCompare("Pop")==0)
      {
        genre47_value = 4;
        //Debugging statement
        console.log("Genre Pop" + genre47_value)
      }
      location47 = myData50.Location;
      ranking47 = myData50.Ranking;
      ranking47_parsed = parseInt(ranking47);
      if ( 1<=ranking47_parsed<=10  )
      {
        ranking47_value = 1;
        //Debugging statement
        console.log("Ranking TOP10" + ranking47_value)
      }
      else if ( 11<=ranking47_parsed<=20 )
      {
        ranking47_value = 2;
        //Debugging statement
        console.log("Ranking TOP20" + ranking47_value)
      }
      else if (  21<=ranking47_parsed<=30 )
      {
        ranking47_value = 3;
        //Debugging statement
        console.log("Ranking TOP30" + ranking47_value)
      }

      year47 = myData50.Year;
    }//end if
   }).catch(function (error) {
     console.log("Got and error: ", error);
   })//end catch of docRef47
}//end if != null

//smartnote48
if (docRef51 != null) {
  docRef51.get().then(function (doc) {
    if (doc && doc.exists) {
      var row = table.insertRow(1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      var cell6 = row.insertCell(5);
      const myData51 = doc.data();
      album_name48 = myData51.AlbumName;
      artist_name48 = myData51.ArtistName;
      durtion48 = myData51.Duration;
      emotion48 = myData51.Emotion;
      //Debugging statement
      //console.log("rag_status3" + rag_status3)
      if (emotion48.localeCompare("Angry")==0)
      {
        emotion48_value = 4;
        redsCounter = redsCounter + 1;
        //Debugging statement
        console.log("REDS" + redsCounter)
      }
      else if (emotion48.localeCompare("Happy")==0)
      {
        emotion48_value = 1;
        ambersCounter = ambersCounter + 1;
        //Debugging statement
        console.log("AMBERS" + ambersCounter)
      }
      else if (emotion48.localeCompare("Calm")==0)
      {
        emotion48_value = 2;
        greensCounter = greensCounter + 1;
        //Debugging statement
        console.log("GREENS" + greensCounter)
      }
      else if (emotion48.localeCompare("Sad")==0)
      {
        emotion48_value = 3;
        bluesCounter = bluesCounter + 1;
        //Debugging statement
        console.log("BLUES" + bluesCounter)
      }
      genre48 = myData51.Genre;
      if (genre48.localeCompare("Classic")==0)
      {
        genre48_value = 1;
        //Debugging statement
        console.log("Genre Classic" + genre48_value)
      }
      else if (genre48.localeCompare("Rock")==0)
      {
        genre48_value = 2;
        //Debugging statement
        console.log("Genre Rock" + genre48_value)
      }
      else if (genre48.localeCompare("R&B")==0)
      {
        genre48_value = 3;
        //Debugging statement
        console.log("Genre R&B" + genre48_value)
      }
      else if (genre48.localeCompare("Pop")==0)
      {
        genre48_value = 4;
        //Debugging statement
        console.log("Genre Pop" + genre48_value)
      }
      location48 = myData51.Location;
      ranking48 = myData51.Ranking;
      ranking48_parsed = parseInt(ranking48);
      if ( 1<=ranking48_parsed<=10  )
      {
        ranking48_value = 1;
        //Debugging statement
        console.log("Ranking TOP10" + ranking48_value)
      }
      else if ( 11<=ranking48_parsed<=20 )
      {
        ranking48_value = 2;
        //Debugging statement
        console.log("Ranking TOP20" + ranking48_value)
      }
      else if (  21<=ranking48_parsed<=30  )
      {
        ranking48_value = 3;
        //Debugging statement
        console.log("Ranking TOP30" + ranking48_value)
      }

      year48 = myData51.Year;
    }//end if
   }).catch(function (error) {
     console.log("Got and error: ", error);
   })//end catch of docRef48
}//end if != null

//smartnote49
if (docRef52 != null) {
  docRef52.get().then(function (doc) {
    if (doc && doc.exists) {
      var row = table.insertRow(1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      var cell6 = row.insertCell(5);
      const myData52 = doc.data();
      album_name49 = myData52.AlbumName;
      artist_name49 = myData52.ArtistName;
      durtion49 = myData52.Duration;
      emotion49 = myData52.Emotion;
      //Debugging statement
      //console.log("rag_status3" + rag_status3)
      if (emotion49.localeCompare("Angry")==0)
      {
        emotion49_value = 4;
        redsCounter = redsCounter + 1;
        //Debugging statement
        console.log("REDS" + redsCounter)
      }
      else if (emotion49.localeCompare("Happy")==0)
      {
        emotion49_value = 1;
        ambersCounter = ambersCounter + 1;
        //Debugging statement
        console.log("AMBERS" + ambersCounter)
      }
      else if (emotion49.localeCompare("Calm")==0)
      {
        emotion49_value = 2;
        greensCounter = greensCounter + 1;
        //Debugging statement
        console.log("GREENS" + greensCounter)
      }
      else if (emotion49.localeCompare("Sad")==0)
      {
        emotion49_value = 3;
        bluesCounter = bluesCounter + 1;
        //Debugging statement
        console.log("BLUES" + bluesCounter)
      }
      genre49 = myData52.Genre;
      if (genre49.localeCompare("Classic")==0)
      {
        genre49_value = 1;
        //Debugging statement
        console.log("Genre Classic" + genre49_value)
      }
      else if (genre49.localeCompare("Rock")==0)
      {
        genre49_value = 2;
        //Debugging statement
        console.log("Genre Rock" + genre49_value)
      }
      else if (genre49.localeCompare("R&B")==0)
      {
        genre49_value = 3;
        //Debugging statement
        console.log("Genre R&B" + genre49_value)
      }
      else if (genre49.localeCompare("Pop")==0)
      {
        genre49_value = 4;
        //Debugging statement
        console.log("Genre Pop" + genre49_value)
      }
      location49 = myData52.Location;
      ranking49 = myData52.Ranking;
      ranking49_parsed = parseInt(ranking49);
      if ( 1<=ranking49_parsed<=10  )
      {
        ranking49_value = 1;
        //Debugging statement
        console.log("Ranking TOP10" + ranking49_value)
      }
      else if (11<=ranking49_parsed<=20 )
      {
        ranking49_value = 2;
        //Debugging statement
        console.log("Ranking TOP20" + ranking49_value)
      }
      else if ( 21<=ranking49_parsed<=30  )
      {
        ranking49_value = 3;
        //Debugging statement
        console.log("Ranking TOP30" + ranking49_value)
      }

      year49 = myData52.Year;
    }//end if
   }).catch(function (error) {
     console.log("Got and error: ", error);
   })//end catch of docRef49
}//end if != null

//smartnote50
if (docRef53 != null) {
  docRef53.get().then(function (doc) {
    if (doc && doc.exists) {
      var row = table.insertRow(1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      var cell6 = row.insertCell(5);
      const myData53 = doc.data();
      album_name50 = myData53.AlbumName;
      artist_name50 = myData53.ArtistName;
      durtion50 = myData53.Duration;
      emotion50 = myData53.Emotion;
      //Debugging statement
      //console.log("rag_status3" + rag_status3)
      if (emotion50.localeCompare("Angry")==0)
      {
        emotion50_value = 4;
        redsCounter = redsCounter + 1;
        //Debugging statement
        console.log("REDS" + redsCounter)
      }
      else if (emotion50.localeCompare("Happy")==0)
      {
        emotion50_value = 1;
        ambersCounter = ambersCounter + 1;
        //Debugging statement
        console.log("AMBERS" + ambersCounter)
      }
      else if (emotion50.localeCompare("Calm")==0)
      {
        emotion50_value = 2;
        greensCounter = greensCounter + 1;
        //Debugging statement
        console.log("GREENS" + greensCounter)
      }
      else if (emotion50.localeCompare("Sad")==0)
      {
        emotion50_value = 3;
        bluesCounter = bluesCounter + 1;
        //Debugging statement
        console.log("BLUES" + bluesCounter)
      }
      genre50 = myData53.Genre;
      if (genre50.localeCompare("Classic")==0)
      {
        genre50_value = 1;
        //Debugging statement
        console.log("Genre Classic" + genre50_value)
      }
      else if (genre50.localeCompare("Rock")==0)
      {
        genre50_value = 2;
        //Debugging statement
        console.log("Genre Rock" + genre50_value)
      }
      else if (genre50.localeCompare("R&B")==0)
      {
        genre50_value = 3;
        //Debugging statement
        console.log("Genre R&B" + genre50_value)
      }
      else if (genre50.localeCompare("Pop")==0)
      {
        genre50_value = 4;
        //Debugging statement
        console.log("Genre Pop" + genre50_value)
      }
      location50 = myData53.Location;
      ranking50 = myData53.Ranking;
      ranking50_parsed = parseInt(ranking50);
      if ( 1<=ranking50_parsed<=10  )
      {
        ranking50_value = 1;
        //Debugging statement
        console.log("Ranking TOP10" + ranking50_value)
      }
      else if ( 11<=ranking50_parsed<=20 )
      {
        ranking50_value = 2;
        //Debugging statement
        console.log("Ranking TOP20" + ranking50_value)
      }
      else if (21<=ranking50_parsed<=30  )
      {
        ranking50_value = 3;
        //Debugging statement
        console.log("Ranking TOP30" + ranking50_value)
      }

      year50 = myData53.Year;
    }//end if
   }).catch(function (error) {
     console.log("Got and error: ", error);
   })//end catch of docRef50
}//end if != null
//============================================================================//


})//end saveButton2 Add
//----------------------------------------------------------------------------//

// RADIO BUTTONS
// //check if radios are selected
// function to disable radio buttons after two selections

function checkFunc() {
  count = 0;
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].checked === true) {
      count++;
    }
  }
  if (count > 1) {
    for (i = 0; i < inputs.length; i++) {
      if (inputs[i].checked === false) {
        inputs[i].disabled = true;
      }
    }
  } else {
    for (i = 0; i < inputs.length; i++) {
      if (inputs[i].checked === false) {
        inputs[i].disabled = false;
      }
    }
  }
}


//----------------------------------------------------------------------------//

// Function of exportButton.
// It saves the canvasjs chart which is part of the created page canvas in
// a PDF document.
exportButton.addEventListener("click", function() {


//find the user selected values by chekcing for the null selection
  if (document.querySelector('input[type="radio"]:checked') != null)
  {
    // ranking and genre options are selected
    if ((document.querySelector('input[name="radio1"]:checked') != null) && (document.querySelector('input[name="radio2"]:checked') != null) && (document.querySelector('input[name="radio3"]:checked') == null))
    {
      //rankings
      ranking_button = document.querySelector('input[name="radio1"]:checked');
      ranking_button_value = ranking_button.value;
      //genres
      genre_button = document.querySelector('input[name="radio2"]:checked');
      genre_button_value = genre_button.value;

      user_choices.push(ranking_button_value, genre_button_value);
      console.log("Selected options value: " + user_choices)
    }
    // ranking and emotion options are selected
    else if ((document.querySelector('input[name="radio1"]:checked') != null) && (document.querySelector('input[name="radio2"]:checked') == null) && (document.querySelector('input[name="radio3"]:checked') != null))
    {
      //rankings
      ranking_button = document.querySelector('input[name="radio1"]:checked');
      ranking_button_value = ranking_button.value;
      //emotions
      emotion_button = document.querySelector('input[name="radio3"]:checked');
      emotion_button_value = emotion_button.value;

      user_choices.push(ranking_button_value, emotion_button_value);
      console.log("Selected options value: " + user_choices)
    }
    // genre and emotion options are selected
    else if ((document.querySelector('input[name="radio1"]:checked') == null) && (document.querySelector('input[name="radio2"]:checked') != null) && (document.querySelector('input[name="radio3"]:checked') != null))
    {
      //genres
      genre_button = document.querySelector('input[name="radio2"]:checked');
      genre_button_value = genre_button.value;
      //emotions
      emotion_button = document.querySelector('input[name="radio3"]:checked');
      emotion_button_value = emotion_button.value;

      user_choices.push(genre_button_value, emotion_button_value);
      console.log("Selected options value: " + user_choices)
    }
  }


  // CALCULATE EUClIDEAN DISTANCE FOR EACH ALBUM
  score1_ED = getEuclideanDistance(emotion_button_value, ranking_button_value, genre_button_value, emotion1_value, ranking1_value, genre1_value);
  scores_ED.push({"score" :score1_ED,
                  "album": album_name1,
                  "artist": artist_name1,
                  "ranking": ranking1,
                  "genre": genre1,
                  "emotion": emotion1,
                  "image": "imgsrc2a"});

  score2_ED = getEuclideanDistance(emotion_button_value, ranking_button_value, genre_button_value, emotion2_value, ranking2_value, genre2_value);
  scores_ED.push({"score" :score2_ED,
                  "album": album_name2,
                  "artist": artist_name2,
                  "ranking": ranking2,
                  "genre": genre2,
                  "emotion": emotion2,
                  "image": "imgsrc2b"});

  score3_ED = getEuclideanDistance(emotion_button_value, ranking_button_value, genre_button_value, emotion3_value, ranking3_value, genre3_value);
  scores_ED.push({"score" :score3_ED,
                  "album": album_name3,
                  "artist": artist_name3,
                  "ranking": ranking3,
                  "genre": genre3,
                  "emotion": emotion3,
                  "image": "imgsrc2c"});

  score4_ED = getEuclideanDistance(emotion_button_value, ranking_button_value, genre_button_value, emotion4_value, ranking4_value, genre4_value);
  scores_ED.push({"score" :score4_ED,
                  "album": album_name4,
                  "artist": artist_name4,
                  "ranking": ranking4,
                  "genre": genre4,
                  "emotion": emotion4,
                  "image": "imgsrc2d"});

  score5_ED = getEuclideanDistance(emotion_button_value, ranking_button_value, genre_button_value, emotion5_value, ranking5_value, genre5_value);
  scores_ED.push({"score" :score5_ED,
                  "album": album_name5,
                  "artist": artist_name5,
                  "ranking": ranking5,
                  "genre": genre5,
                  "emotion": emotion5,
                  "image": "imgsrc2e"});

  score6_ED = getEuclideanDistance(emotion_button_value, ranking_button_value, genre_button_value, emotion6_value, ranking6_value, genre6_value);
  scores_ED.push({"score" :score6_ED,
                  "album": album_name6,
                  "artist": artist_name6,
                  "ranking": ranking6,
                  "genre": genre6,
                  "emotion": emotion6,
                  "image": "imgsrc2f"});

  score7_ED = getEuclideanDistance(emotion_button_value, ranking_button_value, genre_button_value, emotion7_value, ranking7_value, genre7_value);
  scores_ED.push({"score" :score7_ED,
                  "album": album_name7,
                  "artist": artist_name7,
                  "ranking": ranking7,
                  "genre": genre7,
                  "emotion": emotion7,
                  "image": "imgsrc2g"});

  score8_ED = getEuclideanDistance(emotion_button_value, ranking_button_value, genre_button_value, emotion8_value, ranking8_value, genre8_value);
  scores_ED.push({"score" :score8_ED,
                  "album": album_name8,
                  "artist": artist_name8,
                  "ranking": ranking8,
                  "genre": genre8,
                  "emotion": emotion8,
                  "image": "imgsrc2h"});


  score9_ED = getEuclideanDistance(emotion_button_value, ranking_button_value, genre_button_value, emotion9_value, ranking9_value, genre9_value);
  scores_ED.push({"score" :score9_ED,
                  "album": album_name9,
                  "artist": artist_name9,
                  "ranking": ranking9,
                  "genre": genre9,
                  "emotion": emotion9,
                  "image": "imgsrc2i"});

  score10_ED = getEuclideanDistance(emotion_button_value, ranking_button_value, genre_button_value, emotion10_value, ranking10_value, genre10_value);
  scores_ED.push({"score" :score10_ED,
                  "album": album_name10,
                  "artist": artist_name10,
                  "ranking": ranking10,
                  "genre": genre10,
                  "emotion": emotion10,
                  "image": "imgsrc2j"});

  score11_ED = getEuclideanDistance(emotion_button_value, ranking_button_value, genre_button_value, emotion11_value, ranking11_value, genre11_value);
  scores_ED.push({"score" :score11_ED,
                  "album": album_name11,
                  "artist": artist_name11,
                  "ranking": ranking11,
                  "genre": genre11,
                  "emotion": emotion11,
                  "image": "imgsrc2k"});

  score12_ED = getEuclideanDistance(emotion_button_value, ranking_button_value, genre_button_value, emotion12_value, ranking12_value, genre12_value);
  scores_ED.push({"score" :score12_ED,
                  "album": album_name12,
                  "artist": artist_name12,
                  "ranking": ranking12,
                  "genre": genre12,
                  "emotion": emotion12,
                  "image": "imgsrc2l"});

  score13_ED = getEuclideanDistance(emotion_button_value, ranking_button_value, genre_button_value, emotion13_value, ranking13_value, genre13_value);
  scores_ED.push({"score" :score13_ED,
                  "album": album_name13,
                  "artist": artist_name13,
                  "ranking": ranking13,
                  "genre": genre13,
                  "emotion": emotion13,
                  "image": "imgsrc2m"});

  score14_ED = getEuclideanDistance(emotion_button_value, ranking_button_value, genre_button_value, emotion14_value, ranking14_value, genre14_value);
  scores_ED.push({"score" :score14_ED,
                  "album": album_name14,
                  "artist": artist_name14,
                  "ranking": ranking14,
                  "genre": genre14,
                  "emotion": emotion14,
                  "image": "imgsrc2n"});

  score15_ED = getEuclideanDistance(emotion_button_value, ranking_button_value, genre_button_value, emotion15_value, ranking15_value, genre15_value);
  scores_ED.push({"score" :score15_ED,
                  "album": album_name15,
                  "artist": artist_name15,
                  "ranking": ranking15,
                  "genre": genre15,
                  "emotion": emotion15,
                  "image": "imgsrc2o"});

  score16_ED = getEuclideanDistance(emotion_button_value, ranking_button_value, genre_button_value, emotion16_value, ranking16_value, genre16_value);
  scores_ED.push({"score" :score16_ED,
                  "album": album_name16,
                  "artist": artist_name16,
                  "ranking": ranking16,
                  "genre": genre16,
                  "emotion": emotion16,
                  "image": "imgsrc2p"});

  score17_ED = getEuclideanDistance(emotion_button_value, ranking_button_value, genre_button_value, emotion17_value, ranking17_value, genre17_value);
  scores_ED.push({"score" :score17_ED,
                  "album": album_name17,
                  "artist": artist_name17,
                  "ranking": ranking17,
                  "genre": genre17,
                  "emotion": emotion17,
                  "image": "imgsrc2q"});

  score18_ED = getEuclideanDistance(emotion_button_value, ranking_button_value, genre_button_value, emotion18_value, ranking18_value, genre18_value);
  scores_ED.push({"score" :score18_ED,
                  "album": album_name18,
                  "artist": artist_name18,
                  "ranking": ranking18,
                  "genre": genre18,
                  "emotion": emotion18,
                  "image": "imgsrc2r"});

  score19_ED = getEuclideanDistance(emotion_button_value, ranking_button_value, genre_button_value, emotion19_value, ranking19_value, genre19_value);
  scores_ED.push({"score" :score19_ED,
                  "album": album_name19,
                  "artist": artist_name19,
                  "ranking": ranking19,
                  "genre": genre19,
                  "emotion": emotion19,
                  "image": "imgsrc2s"});

  score20_ED = getEuclideanDistance(emotion_button_value, ranking_button_value, genre_button_value, emotion20_value, ranking20_value, genre20_value);
  scores_ED.push({"score" :score20_ED,
                  "album": album_name20,
                  "artist": artist_name20,
                  "ranking": ranking20,
                  "genre": genre20,
                  "emotion": emotion20,
                  "image": "imgsrc2t"});

  score21_ED = getEuclideanDistance(emotion_button_value, ranking_button_value, genre_button_value, emotion21_value, ranking21_value, genre21_value);
  scores_ED.push({"score" :score21_ED,
                  "album": album_name21,
                  "artist": artist_name21,
                  "ranking": ranking21,
                  "genre": genre21,
                  "emotion": emotion21,
                  "image": "imgsrc2u"});

  score22_ED = getEuclideanDistance(emotion_button_value, ranking_button_value, genre_button_value, emotion22_value, ranking22_value, genre22_value);
  scores_ED.push({"score" :score22_ED,
                  "album": album_name22,
                  "artist": artist_name22,
                  "ranking": ranking22,
                  "genre": genre22,
                  "emotion": emotion22,
                  "image": "imgsrc2v"});

  score23_ED = getEuclideanDistance(emotion_button_value, ranking_button_value, genre_button_value, emotion23_value, ranking23_value, genre23_value);
  scores_ED.push({"score" :score23_ED,
                  "album": album_name23,
                  "artist": artist_name23,
                  "ranking": ranking23,
                  "genre": genre23,
                  "emotion": emotion23,
                  "image": "imgsrc2w"});

  score24_ED = getEuclideanDistance(emotion_button_value, ranking_button_value, genre_button_value, emotion24_value, ranking24_value, genre24_value);
  scores_ED.push({"score" :score24_ED,
                  "album": album_name24,
                  "artist": artist_name24,
                  "ranking": ranking24,
                  "genre": genre24,
                  "emotion": emotion24,
                  "image": "imgsrc2x"});

  score25_ED = getEuclideanDistance(emotion_button_value, ranking_button_value, genre_button_value, emotion25_value, ranking25_value, genre25_value);
  scores_ED.push({"score" :score25_ED,
                  "album": album_name25,
                  "artist": artist_name25,
                  "ranking": ranking25,
                  "genre": genre25,
                  "emotion": emotion25,
                  "image": "imgsrc2y"});

  score26_ED = getEuclideanDistance(emotion_button_value, ranking_button_value, genre_button_value, emotion26_value, ranking26_value, genre26_value);
    scores_ED.push({"score" :score26_ED,
                  "album": album_name26,
                  "artist": artist_name26,
                  "ranking": ranking26,
                  "genre": genre26,
                  "emotion": emotion26,
                  "image": "imgsrc2z"});

  score27_ED = getEuclideanDistance(emotion_button_value, ranking_button_value, genre_button_value, emotion27_value, ranking27_value, genre27_value);
  scores_ED.push({"score" :score27_ED,
                  "album": album_name27,
                  "artist": artist_name27,
                  "ranking": ranking27,
                  "genre": genre27,
                  "emotion": emotion27,
                  "image": "imgsrc2aa"});

  score28_ED = getEuclideanDistance(emotion_button_value, ranking_button_value, genre_button_value, emotion28_value, ranking28_value, genre28_value);
  scores_ED.push({"score" :score28_ED,
                  "album": album_name28,
                  "artist": artist_name28,
                  "ranking": ranking28,
                  "genre": genre28,
                  "emotion": emotion28,
                  "image": "imgsrc2bb"});

  score29_ED = getEuclideanDistance(emotion_button_value, ranking_button_value, genre_button_value, emotion29_value, ranking29_value, genre29_value);
  scores_ED.push({"score" :score29_ED,
                  "album": album_name29,
                  "artist": artist_name29,
                  "ranking": ranking29,
                  "genre": genre29,
                  "emotion": emotion29,
                  "image": "imgsrc2cc"});

  score30_ED = getEuclideanDistance(emotion_button_value, ranking_button_value, genre_button_value, emotion30_value, ranking30_value, genre30_value);
  scores_ED.push({"score" :score30_ED,
                  "album": album_name30,
                  "artist": artist_name30,
                  "ranking": ranking30,
                  "genre": genre30,
                  "emotion": emotion30,
                  "image": "imgsrc2dd"});

  score31_ED = getEuclideanDistance(emotion_button_value, ranking_button_value, genre_button_value, emotion31_value, ranking31_value, genre31_value);
  scores_ED.push({"score" :score31_ED,
                  "album": album_name31,
                  "artist": artist_name31,
                  "ranking": ranking31,
                  "genre": genre31,
                  "emotion": emotion31,
                  "image": "imgsrc2ee"});

  score32_ED = getEuclideanDistance(emotion_button_value, ranking_button_value, genre_button_value, emotion32_value, ranking32_value, genre32_value);
  scores_ED.push({"score" :score32_ED,
                  "album": album_name32,
                  "artist": artist_name32,
                  "ranking": ranking32,
                  "genre": genre32,
                  "emotion": emotion32,
                  "image": "imgsrc2ff"});

  score33_ED = getEuclideanDistance(emotion_button_value, ranking_button_value, genre_button_value, emotion33_value, ranking33_value, genre33_value);
  scores_ED.push({"score" :score33_ED,
                  "album": album_name33,
                  "artist": artist_name33,
                  "ranking": ranking33,
                  "genre": genre33,
                  "emotion": emotion33,
                  "image": "imgsrc2gg"});

  score34_ED = getEuclideanDistance(emotion_button_value, ranking_button_value, genre_button_value, emotion34_value, ranking34_value, genre34_value);
  scores_ED.push({"score" :score34_ED,
                  "album": album_name34,
                  "artist": artist_name34,
                  "ranking": ranking34,
                  "genre": genre34,
                  "emotion": emotion34,
                  "image": "imgsrc2hh"});

  score35_ED = getEuclideanDistance(emotion_button_value, ranking_button_value, genre_button_value, emotion35_value, ranking35_value, genre35_value);
  scores_ED.push({"score" :score35_ED,
                  "album": album_name35,
                  "artist": artist_name35,
                  "ranking": ranking35,
                  "genre": genre35,
                  "emotion": emotion35,
                  "image": "imgsrc2ii"});

  score36_ED = getEuclideanDistance(emotion_button_value, ranking_button_value, genre_button_value, emotion36_value, ranking36_value, genre36_value);
  scores_ED.push({"score" :score36_ED,
                  "album": album_name36,
                  "artist": artist_name36,
                  "ranking": ranking36,
                  "genre": genre36,
                  "emotion": emotion36,
                  "image": "imgsrc2jj"});

  score37_ED = getEuclideanDistance(emotion_button_value, ranking_button_value, genre_button_value, emotion37_value, ranking37_value, genre37_value);
  scores_ED.push({"score" :score37_ED,
                  "album": album_name37,
                  "artist": artist_name37,
                  "ranking": ranking37,
                  "genre": genre37,
                  "emotion": emotion37,
                  "image": "imgsrc2kk"});

  score38_ED = getEuclideanDistance(emotion_button_value, ranking_button_value, genre_button_value, emotion38_value, ranking38_value, genre38_value);
  scores_ED.push({"score" :score38_ED,
                  "album": album_name38,
                  "artist": artist_name38,
                  "ranking": ranking38,
                  "genre": genre38,
                  "emotion": emotion38,
                  "image": "imgsrc2ll"});

  score39_ED = getEuclideanDistance(emotion_button_value, ranking_button_value, genre_button_value, emotion39_value, ranking39_value, genre39_value);
  scores_ED.push({"score" :score39_ED,
                  "album": album_name39,
                  "artist": artist_name39,
                  "ranking": ranking39,
                  "genre": genre39,
                  "emotion": emotion39,
                  "image": "imgsrc2mm"});

  score40_ED = getEuclideanDistance(emotion_button_value, ranking_button_value, genre_button_value, emotion40_value, ranking40_value, genre40_value);
  scores_ED.push({"score" :score40_ED,
                  "album": album_name40,
                  "artist": artist_name40,
                  "ranking": ranking40,
                  "genre": genre40,
                  "emotion": emotion40,
                  "image": "imgsrc2nn"});

  score41_ED = getEuclideanDistance(emotion_button_value, ranking_button_value, genre_button_value, emotion41_value, ranking41_value, genre41_value);
  scores_ED.push({"score" :score41_ED,
                  "album": album_name41,
                  "artist": artist_name41,
                  "ranking": ranking41,
                  "genre": genre41,
                  "emotion": emotion41,
                  "image": "imgsrc2oo"});

  score42_ED = getEuclideanDistance(emotion_button_value, ranking_button_value, genre_button_value, emotion42_value, ranking42_value, genre42_value);
  scores_ED.push({"score" :score42_ED,
                  "album": album_name42,
                  "artist": artist_name42,
                  "ranking": ranking42,
                  "genre": genre42,
                  "emotion": emotion42,
                  "image": "imgsrc2pp"});

  score43_ED = getEuclideanDistance(emotion_button_value, ranking_button_value, genre_button_value, emotion43_value, ranking43_value, genre43_value);
  scores_ED.push({"score" :score43_ED,
                  "album": album_name43,
                  "artist": artist_name43,
                  "ranking": ranking43,
                  "genre": genre43,
                  "emotion": emotion43,
                  "image": "imgsrc2qq"});

  score44_ED = getEuclideanDistance(emotion_button_value, ranking_button_value, genre_button_value, emotion44_value, ranking44_value, genre44_value);
  scores_ED.push({"score" :score44_ED,
                  "album": album_name44,
                  "artist": artist_name44,
                  "ranking": ranking44,
                  "genre": genre44,
                  "emotion": emotion44,
                  "image": "imgsrc2rr"});

  score45_ED = getEuclideanDistance(emotion_button_value, ranking_button_value, genre_button_value, emotion45_value, ranking45_value, genre45_value);
  scores_ED.push({"score" :score45_ED,
                  "album": album_name45,
                  "artist": artist_name45,
                  "ranking": ranking45,
                  "genre": genre45,
                  "emotion": emotion45,
                  "image": "imgsrc2ss"});

  score46_ED = getEuclideanDistance(emotion_button_value, ranking_button_value, genre_button_value, emotion46_value, ranking46_value, genre46_value);
  scores_ED.push({"score" :score46_ED,
                  "album": album_name46,
                  "artist": artist_name46,
                  "ranking": ranking46,
                  "genre": genre46,
                  "emotion": emotion46,
                  "image": "imgsrc2tt"});

  score47_ED = getEuclideanDistance(emotion_button_value, ranking_button_value, genre_button_value, emotion47_value, ranking47_value, genre47_value);
  scores_ED.push({"score" :score47_ED,
                  "album": album_name47,
                  "artist": artist_name47,
                  "ranking": ranking47,
                  "genre": genre47,
                  "emotion": emotion47,
                  "image": "imgsrc2uu"});

  score48_ED = getEuclideanDistance(emotion_button_value, ranking_button_value, genre_button_value, emotion48_value, ranking48_value, genre48_value);
  scores_ED.push({"score" :score48_ED,
                  "album": album_name48,
                  "artist": artist_name48,
                  "ranking": ranking48,
                  "genre": genre48,
                  "emotion": emotion48,
                  "image": "imgsrc2vv"});

  score49_ED = getEuclideanDistance(emotion_button_value, ranking_button_value, genre_button_value, emotion49_value, ranking49_value, genre49_value);
  scores_ED.push({"score" :score49_ED,
                  "album": album_name49,
                  "artist": artist_name49,
                  "ranking": ranking49,
                  "genre": genre49,
                  "emotion": emotion49,
                  "image": "imgsrc2ww"});

  score50_ED = getEuclideanDistance(emotion_button_value, ranking_button_value, genre_button_value, emotion50_value, ranking50_value, genre50_value);
  scores_ED.push({"score" :score50_ED,
                  "album": album_name50,
                  "artist": artist_name50,
                  "ranking": ranking50,
                  "genre": genre50,
                  "emotion": emotion50,
                  "image": "imgsrc2xx"});

//------------------------------------------------------------------------------

  // CALCULATE MANHATTAN DISTANCE FOR EACH ALBUM
  score1_MD = getManhattanDistance(emotion_button_value, ranking_button_value, genre_button_value, emotion1_value, ranking1_value, genre1_value);
  scores_MD.push({"score" :score1_MD,
                  "album": album_name1,
                  "artist": artist_name1,
                  "ranking": ranking1,
                  "genre": genre1,
                  "emotion": emotion1,
                  "image": "imgsrc2a"});

  score2_MD = getManhattanDistance(emotion_button_value, ranking_button_value, genre_button_value, emotion2_value, ranking2_value, genre2_value);
  scores_MD.push({"score" :score2_MD,
                  "album": album_name2,
                  "artist": artist_name2,
                  "ranking": ranking2,
                  "genre": genre2,
                  "emotion": emotion2,
                  "image": "imgsrc2b"});

  score3_MD = getManhattanDistance(emotion_button_value, ranking_button_value, genre_button_value, emotion3_value, ranking3_value, genre3_value);
  scores_MD.push({"score" :score3_MD,
                  "album": album_name3,
                  "artist": artist_name3,
                  "ranking": ranking3,
                  "genre": genre3,
                  "emotion": emotion3,
                  "image": "imgsrc2c"});

  score4_MD = getManhattanDistance(emotion_button_value, ranking_button_value, genre_button_value, emotion4_value, ranking4_value, genre4_value);
  scores_MD.push({"score" :score4_MD,
                  "album": album_name4,
                  "artist": artist_name4,
                  "ranking": ranking4,
                  "genre": genre4,
                  "emotion": emotion4,
                  "image": "imgsrc2d"});

  score5_MD = getManhattanDistance(emotion_button_value, ranking_button_value, genre_button_value, emotion5_value, ranking5_value, genre5_value);
  scores_MD.push({"score" :score5_MD,
                  "album": album_name5,
                  "artist": artist_name5,
                  "ranking": ranking5,
                  "genre": genre5,
                  "emotion": emotion5,
                  "image": "imgsrc2e"});

  score6_MD = getManhattanDistance(emotion_button_value, ranking_button_value, genre_button_value, emotion6_value, ranking6_value, genre6_value);
  scores_MD.push({"score" :score6_MD,
                  "album": album_name6,
                  "artist": artist_name6,
                  "ranking": ranking6,
                  "genre": genre6,
                  "emotion": emotion6,
                  "image": "imgsrc2f"});

  score7_MD = getManhattanDistance(emotion_button_value, ranking_button_value, genre_button_value, emotion7_value, ranking7_value, genre7_value);
  scores_MD.push({"score" :score7_MD,
                  "album": album_name7,
                  "artist": artist_name7,
                  "ranking": ranking7,
                  "genre": genre7,
                  "emotion": emotion7,
                  "image": "imgsrc2g"});

  score8_MD = getManhattanDistance(emotion_button_value, ranking_button_value, genre_button_value, emotion8_value, ranking8_value, genre8_value);
  scores_MD.push({"score" :score8_MD,
                  "album": album_name8,
                  "artist": artist_name8,
                  "ranking": ranking8,
                  "genre": genre8,
                  "emotion": emotion8,
                  "image": "imgsrc2h"});


  score9_MD = getManhattanDistance(emotion_button_value, ranking_button_value, genre_button_value, emotion9_value, ranking9_value, genre9_value);
  scores_MD.push({"score" :score9_MD,
                  "album": album_name9,
                  "artist": artist_name9,
                  "ranking": ranking9,
                  "genre": genre9,
                  "emotion": emotion9,
                  "image": "imgsrc2i"});

  score10_MD = getManhattanDistance(emotion_button_value, ranking_button_value, genre_button_value, emotion10_value, ranking10_value, genre10_value);
  scores_MD.push({"score" :score10_MD,
                  "album": album_name10,
                  "artist": artist_name10,
                  "ranking": ranking10,
                  "genre": genre10,
                  "emotion": emotion10,
                  "image": "imgsrc2j"});

  score11_MD = getManhattanDistance(emotion_button_value, ranking_button_value, genre_button_value, emotion11_value, ranking11_value, genre11_value);
  scores_MD.push({"score" :score11_MD,
                  "album": album_name11,
                  "artist": artist_name11,
                  "ranking": ranking11,
                  "genre": genre11,
                  "emotion": emotion11,
                  "image": "imgsrc2k"});

  score12_MD = getManhattanDistance(emotion_button_value, ranking_button_value, genre_button_value, emotion12_value, ranking12_value, genre12_value);
  scores_MD.push({"score" :score12_MD,
                  "album": album_name12,
                  "artist": artist_name12,
                  "ranking": ranking12,
                  "genre": genre12,
                  "emotion": emotion12,
                  "image": "imgsrc2l"});

  score13_MD = getManhattanDistance(emotion_button_value, ranking_button_value, genre_button_value, emotion13_value, ranking13_value, genre13_value);
  scores_MD.push({"score" :score13_MD,
                  "album": album_name13,
                  "artist": artist_name13,
                  "ranking": ranking13,
                  "genre": genre13,
                  "emotion": emotion13,
                  "image": "imgsrc2m"});

  score14_MD = getManhattanDistance(emotion_button_value, ranking_button_value, genre_button_value, emotion14_value, ranking14_value, genre14_value);
  scores_MD.push({"score" :score14_MD,
                  "album": album_name14,
                  "artist": artist_name14,
                  "ranking": ranking14,
                  "genre": genre14,
                  "emotion": emotion14,
                  "image": "imgsrc2n"});

  score15_MD = getManhattanDistance(emotion_button_value, ranking_button_value, genre_button_value, emotion15_value, ranking15_value, genre15_value);
  scores_MD.push({"score" :score15_MD,
                  "album": album_name15,
                  "artist": artist_name15,
                  "ranking": ranking15,
                  "genre": genre15,
                  "emotion": emotion15,
                  "image": "imgsrc2o"});

  score16_MD = getManhattanDistance(emotion_button_value, ranking_button_value, genre_button_value, emotion16_value, ranking16_value, genre16_value);
  scores_MD.push({"score" :score16_MD,
                  "album": album_name16,
                  "artist": artist_name16,
                  "ranking": ranking16,
                  "genre": genre16,
                  "emotion": emotion16,
                  "image": "imgsrc2p"});

  score17_MD = getManhattanDistance(emotion_button_value, ranking_button_value, genre_button_value, emotion17_value, ranking17_value, genre17_value);
  scores_MD.push({"score" :score17_MD,
                  "album": album_name17,
                  "artist": artist_name17,
                  "ranking": ranking17,
                  "genre": genre17,
                  "emotion": emotion17,
                  "image": "imgsrc2q"});

  score18_MD = getManhattanDistance(emotion_button_value, ranking_button_value, genre_button_value, emotion18_value, ranking18_value, genre18_value);
  scores_MD.push({"score" :score18_MD,
                  "album": album_name18,
                  "artist": artist_name18,
                  "ranking": ranking18,
                  "genre": genre18,
                  "emotion": emotion18,
                  "image": "imgsrc2r"});

  score19_MD = getManhattanDistance(emotion_button_value, ranking_button_value, genre_button_value, emotion19_value, ranking19_value, genre19_value);
  scores_MD.push({"score" :score19_MD,
                  "album": album_name19,
                  "artist": artist_name19,
                  "ranking": ranking19,
                  "genre": genre19,
                  "emotion": emotion19,
                  "image": "imgsrc2s"});

  score20_MD = getManhattanDistance(emotion_button_value, ranking_button_value, genre_button_value, emotion20_value, ranking20_value, genre20_value);
  scores_MD.push({"score" :score20_MD,
                  "album": album_name20,
                  "artist": artist_name20,
                  "ranking": ranking20,
                  "genre": genre20,
                  "emotion": emotion20,
                  "image": "imgsrc2t"});

  score21_MD = getManhattanDistance(emotion_button_value, ranking_button_value, genre_button_value, emotion21_value, ranking21_value, genre21_value);
  scores_MD.push({"score" :score21_MD,
                  "album": album_name21,
                  "artist": artist_name21,
                  "ranking": ranking21,
                  "genre": genre21,
                  "emotion": emotion21,
                  "image": "imgsrc2u"});

  score22_MD = getManhattanDistance(emotion_button_value, ranking_button_value, genre_button_value, emotion22_value, ranking22_value, genre22_value);
  scores_MD.push({"score" :score22_MD,
                  "album": album_name22,
                  "artist": artist_name22,
                  "ranking": ranking22,
                  "genre": genre22,
                  "emotion": emotion22,
                  "image": "imgsrc2v"});

  score23_MD = getManhattanDistance(emotion_button_value, ranking_button_value, genre_button_value, emotion23_value, ranking23_value, genre23_value);
  scores_MD.push({"score" :score23_MD,
                  "album": album_name23,
                  "artist": artist_name23,
                  "ranking": ranking23,
                  "genre": genre23,
                  "emotion": emotion23,
                  "image": "imgsrc2w"});

  score24_MD = getManhattanDistance(emotion_button_value, ranking_button_value, genre_button_value, emotion24_value, ranking24_value, genre24_value);
  scores_MD.push({"score" :score24_MD,
                  "album": album_name24,
                  "artist": artist_name24,
                  "ranking": ranking24,
                  "genre": genre24,
                  "emotion": emotion24,
                  "image": "imgsrc2x"});

  score25_MD = getManhattanDistance(emotion_button_value, ranking_button_value, genre_button_value, emotion25_value, ranking25_value, genre25_value);
  scores_MD.push({"score" :score25_MD,
                  "album": album_name25,
                  "artist": artist_name25,
                  "ranking": ranking25,
                  "genre": genre25,
                  "emotion": emotion25,
                  "image": "imgsrc2y"});

  score26_MD = getManhattanDistance(emotion_button_value, ranking_button_value, genre_button_value, emotion26_value, ranking26_value, genre26_value);
    scores_MD.push({"score" :score26_MD,
                  "album": album_name26,
                  "artist": artist_name26,
                  "ranking": ranking26,
                  "genre": genre26,
                  "emotion": emotion26,
                  "image": "imgsrc2z"});

  score27_MD = getManhattanDistance(emotion_button_value, ranking_button_value, genre_button_value, emotion27_value, ranking27_value, genre27_value);
  scores_MD.push({"score" :score27_MD,
                  "album": album_name27,
                  "artist": artist_name27,
                  "ranking": ranking27,
                  "genre": genre27,
                  "emotion": emotion27,
                  "image": "imgsrc2aa"});

  score28_MD = getManhattanDistance(emotion_button_value, ranking_button_value, genre_button_value, emotion28_value, ranking28_value, genre28_value);
  scores_MD.push({"score" :score28_MD,
                  "album": album_name28,
                  "artist": artist_name28,
                  "ranking": ranking28,
                  "genre": genre28,
                  "emotion": emotion28,
                  "image": "imgsrc2bb"});

  score29_MD = getManhattanDistance(emotion_button_value, ranking_button_value, genre_button_value, emotion29_value, ranking29_value, genre29_value);
  scores_MD.push({"score" :score29_MD,
                  "album": album_name29,
                  "artist": artist_name29,
                  "ranking": ranking29,
                  "genre": genre29,
                  "emotion": emotion29,
                  "image": "imgsrc2cc"});

  score30_MD = getManhattanDistance(emotion_button_value, ranking_button_value, genre_button_value, emotion30_value, ranking30_value, genre30_value);
  scores_MD.push({"score" :score30_MD,
                  "album": album_name30,
                  "artist": artist_name30,
                  "ranking": ranking30,
                  "genre": genre30,
                  "emotion": emotion30,
                  "image": "imgsrc2dd"});

  score31_MD = getManhattanDistance(emotion_button_value, ranking_button_value, genre_button_value, emotion31_value, ranking31_value, genre31_value);
  scores_MD.push({"score" :score31_MD,
                  "album": album_name31,
                  "artist": artist_name31,
                  "ranking": ranking31,
                  "genre": genre31,
                  "emotion": emotion31,
                  "image": "imgsrc2ee"});

  score32_MD = getManhattanDistance(emotion_button_value, ranking_button_value, genre_button_value, emotion32_value, ranking32_value, genre32_value);
  scores_MD.push({"score" :score32_MD,
                  "album": album_name32,
                  "artist": artist_name32,
                  "ranking": ranking32,
                  "genre": genre32,
                  "emotion": emotion32,
                  "image": "imgsrc2ff"});

  score33_MD = getManhattanDistance(emotion_button_value, ranking_button_value, genre_button_value, emotion33_value, ranking33_value, genre33_value);
  scores_MD.push({"score" :score33_MD,
                  "album": album_name33,
                  "artist": artist_name33,
                  "ranking": ranking33,
                  "genre": genre33,
                  "emotion": emotion33,
                  "image": "imgsrc2gg"});

  score34_MD = getManhattanDistance(emotion_button_value, ranking_button_value, genre_button_value, emotion34_value, ranking34_value, genre34_value);
  scores_MD.push({"score" :score34_MD,
                  "album": album_name34,
                  "artist": artist_name34,
                  "ranking": ranking34,
                  "genre": genre34,
                  "emotion": emotion34,
                  "image": "imgsrc2hh"});

  score35_MD = getManhattanDistance(emotion_button_value, ranking_button_value, genre_button_value, emotion35_value, ranking35_value, genre35_value);
  scores_MD.push({"score" :score35_MD,
                  "album": album_name35,
                  "artist": artist_name35,
                  "ranking": ranking35,
                  "genre": genre35,
                  "emotion": emotion35,
                  "image": "imgsrc2ii"});

  score36_MD = getManhattanDistance(emotion_button_value, ranking_button_value, genre_button_value, emotion36_value, ranking36_value, genre36_value);
  scores_MD.push({"score" :score36_MD,
                  "album": album_name36,
                  "artist": artist_name36,
                  "ranking": ranking36,
                  "genre": genre36,
                  "emotion": emotion36,
                  "image": "imgsrc2jj"});

  score37_MD = getManhattanDistance(emotion_button_value, ranking_button_value, genre_button_value, emotion37_value, ranking37_value, genre37_value);
  scores_MD.push({"score" :score37_MD,
                  "album": album_name37,
                  "artist": artist_name37,
                  "ranking": ranking37,
                  "genre": genre37,
                  "emotion": emotion37,
                  "image": "imgsrc2kk"});

  score38_MD = getManhattanDistance(emotion_button_value, ranking_button_value, genre_button_value, emotion38_value, ranking38_value, genre38_value);
  scores_MD.push({"score" :score38_MD,
                  "album": album_name38,
                  "artist": artist_name38,
                  "ranking": ranking38,
                  "genre": genre38,
                  "emotion": emotion38,
                  "image": "imgsrc2ll"});

  score39_MD = getManhattanDistance(emotion_button_value, ranking_button_value, genre_button_value, emotion39_value, ranking39_value, genre39_value);
  scores_MD.push({"score" :score39_MD,
                  "album": album_name39,
                  "artist": artist_name39,
                  "ranking": ranking39,
                  "genre": genre39,
                  "emotion": emotion39,
                  "image": "imgsrc2mm"});

  score40_MD = getManhattanDistance(emotion_button_value, ranking_button_value, genre_button_value, emotion40_value, ranking40_value, genre40_value);
  scores_MD.push({"score" :score40_MD,
                  "album": album_name40,
                  "artist": artist_name40,
                  "ranking": ranking40,
                  "genre": genre40,
                  "emotion": emotion40,
                  "image": "imgsrc2nn"});

  score41_MD = getManhattanDistance(emotion_button_value, ranking_button_value, genre_button_value, emotion41_value, ranking41_value, genre41_value);
  scores_MD.push({"score" :score41_MD,
                  "album": album_name41,
                  "artist": artist_name41,
                  "ranking": ranking41,
                  "genre": genre41,
                  "emotion": emotion41,
                  "image": "imgsrc2oo"});

  score42_MD = getManhattanDistance(emotion_button_value, ranking_button_value, genre_button_value, emotion42_value, ranking42_value, genre42_value);
  scores_MD.push({"score" :score42_MD,
                  "album": album_name42,
                  "artist": artist_name42,
                  "ranking": ranking42,
                  "genre": genre42,
                  "emotion": emotion42,
                  "image": "imgsrc2pp"});

  score43_MD = getManhattanDistance(emotion_button_value, ranking_button_value, genre_button_value, emotion43_value, ranking43_value, genre43_value);
  scores_MD.push({"score" :score43_MD,
                  "album": album_name43,
                  "artist": artist_name43,
                  "ranking": ranking43,
                  "genre": genre43,
                  "emotion": emotion43,
                  "image": "imgsrc2qq"});

  score44_MD = getManhattanDistance(emotion_button_value, ranking_button_value, genre_button_value, emotion44_value, ranking44_value, genre44_value);
  scores_MD.push({"score" :score44_MD,
                  "album": album_name44,
                  "artist": artist_name44,
                  "ranking": ranking44,
                  "genre": genre44,
                  "emotion": emotion44,
                  "image": "imgsrc2rr"});

  score45_MD = getManhattanDistance(emotion_button_value, ranking_button_value, genre_button_value, emotion45_value, ranking45_value, genre45_value);
  scores_MD.push({"score" :score45_MD,
                  "album": album_name45,
                  "artist": artist_name45,
                  "ranking": ranking45,
                  "genre": genre45,
                  "emotion": emotion45,
                  "image": "imgsrc2ss"});

  score46_MD = getManhattanDistance(emotion_button_value, ranking_button_value, genre_button_value, emotion46_value, ranking46_value, genre46_value);
  scores_MD.push({"score" :score46_MD,
                  "album": album_name46,
                  "artist": artist_name46,
                  "ranking": ranking46,
                  "genre": genre46,
                  "emotion": emotion46,
                  "image": "imgsrc2tt"});

  score47_MD = getManhattanDistance(emotion_button_value, ranking_button_value, genre_button_value, emotion47_value, ranking47_value, genre47_value);
  scores_MD.push({"score" :score47_MD,
                  "album": album_name47,
                  "artist": artist_name47,
                  "ranking": ranking47,
                  "genre": genre47,
                  "emotion": emotion47,
                  "image": "imgsrc2uu"});

  score48_MD = getManhattanDistance(emotion_button_value, ranking_button_value, genre_button_value, emotion48_value, ranking48_value, genre48_value);
  scores_MD.push({"score" :score48_MD,
                  "album": album_name48,
                  "artist": artist_name48,
                  "ranking": ranking48,
                  "genre": genre48,
                  "emotion": emotion48,
                  "image": "imgsrc2vv"});

  score49_MD = getManhattanDistance(emotion_button_value, ranking_button_value, genre_button_value, emotion49_value, ranking49_value, genre49_value);
  scores_MD.push({"score" :score49_MD,
                  "album": album_name49,
                  "artist": artist_name49,
                  "ranking": ranking49,
                  "genre": genre49,
                  "emotion": emotion49,
                  "image": "imgsrc2ww"});

  score50_MD = getManhattanDistance(emotion_button_value, ranking_button_value, genre_button_value, emotion50_value, ranking50_value, genre50_value);
  scores_MD.push({"score" :score50_MD,
                  "album": album_name50,
                  "artist": artist_name50,
                  "ranking": ranking50,
                  "genre": genre50,
                  "emotion": emotion50,
                  "image": "imgsrc2xx"});

//------------------------------------------------------------------------------


//------------------------------------------------------------------------------

// fill arrays with values from 50 albums
// Function to find mean.

function findmean(x0_emotion, y0_ranking, z0_genre, xn_emotion, yn_ranking, zn_genre)
{
  var meanX = 0;
  var meanY = 0;

  if (z0_genre == null) // if genre is not selected
  {
    meanX = (parseInt(x0_emotion) + xn_emotion)/2;
    meanY = (parseInt(y0_ranking) + yn_ranking)/2;

    return [meanX, meanY];
  }
  else if (y0_ranking == null)  // if ranking is not selected
  {
    meanX = (parseInt(x0_emotion) + xn_emotion)/2;
    meanY =  (parseInt(z0_genre) + zn_genre)/2;

    return [meanX, meanY];
  }
  else if (x0_emotion == null)  // if emotion is not selected
  {
    meanX = (parseInt(z0_genre) + zn_genre)/2;
    meanY = (parseInt(y0_ranking) + yn_ranking)/2;

    return [meanX, meanY];
  }
} // end findmean function

// find mean for 50 albums by declaring the values to variables
for (var i = 0; i < num_smartNotes; i++) {
  eval( "var " + "mean" + (i+1) + ' = ' + "findmean" + '(' + emotion_button_value + ', ' + ranking_button_value + ', ' + genre_button_value + ', ' + "emotion" + (i+1) + "_value, " +"ranking" + (i+1) + "_value," + "genre" + (i+1) + "_value" + ')')
}

// display mean in console for debugging purposes
for (var i = 0; i < num_smartNotes; i++) {
  eval("console.log" + '(' + "mean" + (i+1) + ')')
}
//--------------------------------------------------------------------------------

// function to find coVariance using the mean calculated
function findcoVariance(x0_emotion, y0_ranking, z0_genre, xn_emotion, yn_ranking, zn_genre, meanX, meanY)
{
    var coVariance = 0;

    if (z0_genre == null)
    {
      coVariance = (( ((parseInt(x0_emotion) - meanX) * (parseInt(y0_ranking)-meanY)) + ((xn_emotion-meanX)*(yn_ranking-meanY)) )/2);
    }
    else if (y0_ranking == null)
    {
      coVariance = (( ((parseInt(x0_emotion)-meanX) * (parseInt(z0_genre) - meanY)) + ((xn_emotion-meanX)*(zn_genre-meanY)) )/2);
    }
    else if (x0_emotion == null)
    {
      coVariance = (( ((parseInt(z0_genre)-meanX) * (parseInt(y0_ranking) - meanY)) + ((zn_genre-meanX)*(yn_ranking-meanY)) )/2);
    }
    if (coVariance == 1)
    {
      return coVariance = 0.99;
    }
    else if (coVariance == 0)
    {
      return coVariance = 0.01;
    }
    else if (0<coVariance && coVariance<1)
    {
      return coVariance;
    }
} // end findcoVariance function


// find covariance for 50 albums by declaring the values to variables

for (var i = 0; i < num_smartNotes; i++)
{
  eval("var " + "coVariance" + (i+1) + ' = ' + "findcoVariance" + '(' + emotion_button_value + ', ' + ranking_button_value + ', ' + genre_button_value + ', ' + "emotion" + (i+1) + "_value, " +"ranking" + (i+1) + "_value, " + "genre" + (i+1) + "_value, " + "(mean" + (i+1) + '[0]' + '),' + " (mean" + (i+1) +'[1]' + ')' +')' + ';')
}

// display mean in console for debugging purposes
for (var i = 0; i < num_smartNotes; i++) {
  eval("console.log" + '(' + "coVariance" + (i+1) + ')')
}

//------------------------------------------------------------------------------

//------------------------------------------------------------------------------

// GET RBF DISTANCE FOR EACH ALBUM

  score1_RBF = getRBF(emotion_button_value, ranking_button_value, genre_button_value, emotion1_value, ranking1_value, genre1_value, coVariance1);
  scores_RBF.push({"score" :score1_RBF,
                  "album": album_name1,
                  "artist": artist_name1,
                  "ranking": ranking1,
                  "genre": genre1,
                  "emotion": emotion1,
                  "image": "imgsrc2a"});


  score2_RBF = getRBF(emotion_button_value, ranking_button_value, genre_button_value, emotion2_value, ranking2_value, genre2_value, coVariance2);
  scores_RBF.push({"score" :score2_RBF,
                  "album": album_name2,
                  "artist": artist_name2,
                  "ranking": ranking2,
                  "genre": genre2,
                  "emotion": emotion2,
                  "image": "imgsrc2b"});

  score3_RBF = getRBF(emotion_button_value, ranking_button_value, genre_button_value, emotion3_value, ranking3_value, genre3_value, coVariance3);
  scores_RBF.push({"score" :score3_RBF,
                  "album": album_name3,
                  "artist": artist_name3,
                  "ranking": ranking3,
                  "genre": genre3,
                  "emotion": emotion3,
                  "image": "imgsrc2c"});

  score4_RBF = getRBF(emotion_button_value, ranking_button_value, genre_button_value, emotion4_value, ranking4_value, genre4_value, coVariance4);
  scores_RBF.push({"score" :score4_RBF,
                  "album": album_name4,
                  "artist": artist_name4,
                  "ranking": ranking4,
                  "genre": genre4,
                  "emotion": emotion4,
                  "image": "imgsrc2d"});

  score5_RBF = getRBF(emotion_button_value, ranking_button_value, genre_button_value, emotion5_value, ranking5_value, genre5_value, coVariance5);
  scores_RBF.push({"score" :score5_RBF,
                  "album": album_name5,
                  "artist": artist_name5,
                  "ranking": ranking5,
                  "genre": genre5,
                  "emotion": emotion5,
                  "image": "imgsrc2e"});

  score6_RBF = getRBF(emotion_button_value, ranking_button_value, genre_button_value, emotion6_value, ranking6_value, genre6_value, coVariance6);
  scores_RBF.push({"score" :score6_RBF,
                  "album": album_name6,
                  "artist": artist_name6,
                  "ranking": ranking6,
                  "genre": genre6,
                  "emotion": emotion6,
                  "image": "imgsrc2f"});

  score7_RBF = getRBF(emotion_button_value, ranking_button_value, genre_button_value, emotion7_value, ranking7_value, genre7_value, coVariance7);
  scores_RBF.push({"score" :score7_RBF,
                  "album": album_name7,
                  "artist": artist_name7,
                  "ranking": ranking7,
                  "genre": genre7,
                  "emotion": emotion7,
                  "image": "imgsrc2g"});

  score8_RBF = getRBF(emotion_button_value, ranking_button_value, genre_button_value, emotion8_value, ranking8_value, genre8_value, coVariance8);
  scores_RBF.push({"score" :score8_RBF,
                  "album": album_name8,
                  "artist": artist_name8,
                  "ranking": ranking8,
                  "genre": genre8,
                  "emotion": emotion8,
                  "image": "imgsrc2h"});


  score9_RBF = getRBF(emotion_button_value, ranking_button_value, genre_button_value, emotion9_value, ranking9_value, genre9_value, coVariance9);
  scores_RBF.push({"score" :score9_RBF,
                  "album": album_name9,
                  "artist": artist_name9,
                  "ranking": ranking9,
                  "genre": genre9,
                  "emotion": emotion9,
                  "image": "imgsrc2i"});

  score10_RBF = getRBF(emotion_button_value, ranking_button_value, genre_button_value, emotion10_value, ranking10_value, genre10_value, coVariance10);
  scores_RBF.push({"score" :score10_RBF,
                  "album": album_name10,
                  "artist": artist_name10,
                  "ranking": ranking10,
                  "genre": genre10,
                  "emotion": emotion10,
                  "image": "imgsrc2j"});

  score11_RBF = getRBF(emotion_button_value, ranking_button_value, genre_button_value, emotion11_value, ranking11_value, genre11_value, coVariance11);
  scores_RBF.push({"score" :score11_RBF,
                  "album": album_name11,
                  "artist": artist_name11,
                  "ranking": ranking11,
                  "genre": genre11,
                  "emotion": emotion11,
                  "image": "imgsrc2k"});

  score12_RBF = getRBF(emotion_button_value, ranking_button_value, genre_button_value, emotion12_value, ranking12_value, genre12_value, coVariance12);
  scores_RBF.push({"score" :score12_RBF,
                  "album": album_name12,
                  "artist": artist_name12,
                  "ranking": ranking12,
                  "genre": genre12,
                  "emotion": emotion12,
                  "image": "imgsrc2l"});

  score13_RBF = getRBF(emotion_button_value, ranking_button_value, genre_button_value, emotion13_value, ranking13_value, genre13_value, coVariance13);
  scores_RBF.push({"score" :score13_RBF,
                  "album": album_name13,
                  "artist": artist_name13,
                  "ranking": ranking13,
                  "genre": genre13,
                  "emotion": emotion13,
                  "image": "imgsrc2m"});

  score14_RBF = getRBF(emotion_button_value, ranking_button_value, genre_button_value, emotion14_value, ranking14_value, genre14_value, coVariance14);
  scores_RBF.push({"score" :score14_RBF,
                  "album": album_name14,
                  "artist": artist_name14,
                  "ranking": ranking14,
                  "genre": genre14,
                  "emotion": emotion14,
                  "image": "imgsrc2n"});

  score15_RBF = getRBF(emotion_button_value, ranking_button_value, genre_button_value, emotion15_value, ranking15_value, genre15_value, coVariance15);
  scores_RBF.push({"score" :score15_RBF,
                  "album": album_name15,
                  "artist": artist_name15,
                  "ranking": ranking15,
                  "genre": genre15,
                  "emotion": emotion15,
                  "image": "imgsrc2o"});

  score16_RBF = getRBF(emotion_button_value, ranking_button_value, genre_button_value, emotion16_value, ranking16_value, genre16_value, coVariance16);
  scores_RBF.push({"score" :score16_RBF,
                  "album": album_name16,
                  "artist": artist_name16,
                  "ranking": ranking16,
                  "genre": genre16,
                  "emotion": emotion16,
                  "image": "imgsrc2p"});

  score17_RBF = getRBF(emotion_button_value, ranking_button_value, genre_button_value, emotion17_value, ranking17_value, genre17_value, coVariance17);
  scores_RBF.push({"score" :score17_RBF,
                  "album": album_name17,
                  "artist": artist_name17,
                  "ranking": ranking17,
                  "genre": genre17,
                  "emotion": emotion17,
                  "image": "imgsrc2q"});

  score18_RBF = getRBF(emotion_button_value, ranking_button_value, genre_button_value, emotion18_value, ranking18_value, genre18_value, coVariance18);
  scores_RBF.push({"score" :score18_RBF,
                  "album": album_name18,
                  "artist": artist_name18,
                  "ranking": ranking18,
                  "genre": genre18,
                  "emotion": emotion18,
                  "image": "imgsrc2r"});

  score19_RBF = getRBF(emotion_button_value, ranking_button_value, genre_button_value, emotion19_value, ranking19_value, genre19_value, coVariance19);
  scores_RBF.push({"score" :score19_RBF,
                  "album": album_name19,
                  "artist": artist_name19,
                  "ranking": ranking19,
                  "genre": genre19,
                  "emotion": emotion19,
                  "image": "imgsrc2s"});

  score20_RBF = getRBF(emotion_button_value, ranking_button_value, genre_button_value, emotion20_value, ranking20_value, genre20_value, coVariance20);
  scores_RBF.push({"score" :score20_RBF,
                  "album": album_name20,
                  "artist": artist_name20,
                  "ranking": ranking20,
                  "genre": genre20,
                  "emotion": emotion20,
                  "image": "imgsrc2t"});

  score21_RBF = getRBF(emotion_button_value, ranking_button_value, genre_button_value, emotion21_value, ranking21_value, genre21_value, coVariance21);
  scores_RBF.push({"score" :score21_RBF,
                  "album": album_name21,
                  "artist": artist_name21,
                  "ranking": ranking21,
                  "genre": genre21,
                  "emotion": emotion21,
                  "image": "imgsrc2u"});

  score22_RBF = getRBF(emotion_button_value, ranking_button_value, genre_button_value, emotion22_value, ranking22_value, genre22_value, coVariance22);
  scores_RBF.push({"score" :score22_RBF,
                  "album": album_name22,
                  "artist": artist_name22,
                  "ranking": ranking22,
                  "genre": genre22,
                  "emotion": emotion22,
                  "image": "imgsrc2v"});

  score23_RBF = getRBF(emotion_button_value, ranking_button_value, genre_button_value, emotion23_value, ranking23_value, genre23_value, coVariance23);
  scores_RBF.push({"score" :score23_RBF,
                  "album": album_name23,
                  "artist": artist_name23,
                  "ranking": ranking23,
                  "genre": genre23,
                  "emotion": emotion23,
                  "image": "imgsrc2w"});

  score24_RBF = getRBF(emotion_button_value, ranking_button_value, genre_button_value, emotion24_value, ranking24_value, genre24_value, coVariance24);
  scores_RBF.push({"score" :score24_RBF,
                  "album": album_name24,
                  "artist": artist_name24,
                  "ranking": ranking24,
                  "genre": genre24,
                  "emotion": emotion24,
                  "image": "imgsrc2x"});

  score25_RBF = getRBF(emotion_button_value, ranking_button_value, genre_button_value, emotion25_value, ranking25_value, genre25_value, coVariance25);
  scores_RBF.push({"score" :score25_RBF,
                  "album": album_name25,
                  "artist": artist_name25,
                  "ranking": ranking25,
                  "genre": genre25,
                  "emotion": emotion25,
                  "image": "imgsrc2y"});

  score26_RBF = getRBF(emotion_button_value, ranking_button_value, genre_button_value, emotion26_value, ranking26_value, genre26_value, coVariance26);
    scores_RBF.push({"score" :score26_RBF,
                  "album": album_name26,
                  "artist": artist_name26,
                  "ranking": ranking26,
                  "genre": genre26,
                  "emotion": emotion26,
                  "image": "imgsrc2z"});

  score27_RBF = getRBF(emotion_button_value, ranking_button_value, genre_button_value, emotion27_value, ranking27_value, genre27_value, coVariance27);
  scores_RBF.push({"score" :score27_RBF,
                  "album": album_name27,
                  "artist": artist_name27,
                  "ranking": ranking27,
                  "genre": genre27,
                  "emotion": emotion27,
                  "image": "imgsrc2aa"});

  score28_RBF = getRBF(emotion_button_value, ranking_button_value, genre_button_value, emotion28_value, ranking28_value, genre28_value, coVariance28);
  scores_RBF.push({"score" :score28_RBF,
                  "album": album_name28,
                  "artist": artist_name28,
                  "ranking": ranking28,
                  "genre": genre28,
                  "emotion": emotion28,
                  "image": "imgsrc2bb"});

  score29_RBF = getRBF(emotion_button_value, ranking_button_value, genre_button_value, emotion29_value, ranking29_value, genre29_value, coVariance29);
  scores_RBF.push({"score" :score29_RBF,
                  "album": album_name29,
                  "artist": artist_name29,
                  "ranking": ranking29,
                  "genre": genre29,
                  "emotion": emotion29,
                  "image": "imgsrc2cc"});

  score30_RBF = getRBF(emotion_button_value, ranking_button_value, genre_button_value, emotion30_value, ranking30_value, genre30_value, coVariance30);
  scores_RBF.push({"score" :score30_RBF,
                  "album": album_name30,
                  "artist": artist_name30,
                  "ranking": ranking30,
                  "genre": genre30,
                  "emotion": emotion30,
                  "image": "imgsrc2dd"});

  score31_RBF = getRBF(emotion_button_value, ranking_button_value, genre_button_value, emotion31_value, ranking31_value, genre31_value, coVariance31);
  scores_RBF.push({"score" :score31_RBF,
                  "album": album_name31,
                  "artist": artist_name31,
                  "ranking": ranking31,
                  "genre": genre31,
                  "emotion": emotion31,
                  "image": "imgsrc2ee"});

  score32_RBF = getRBF(emotion_button_value, ranking_button_value, genre_button_value, emotion32_value, ranking32_value, genre32_value, coVariance32);
  scores_RBF.push({"score" :score32_RBF,
                  "album": album_name32,
                  "artist": artist_name32,
                  "ranking": ranking32,
                  "genre": genre32,
                  "emotion": emotion32,
                  "image": "imgsrc2ff"});

  score33_RBF = getRBF(emotion_button_value, ranking_button_value, genre_button_value, emotion33_value, ranking33_value, genre33_value, coVariance33);
  scores_RBF.push({"score" :score33_RBF,
                  "album": album_name33,
                  "artist": artist_name33,
                  "ranking": ranking33,
                  "genre": genre33,
                  "emotion": emotion33,
                  "image": "imgsrc2gg"});

  score34_RBF = getRBF(emotion_button_value, ranking_button_value, genre_button_value, emotion34_value, ranking34_value, genre34_value, coVariance34);
  scores_RBF.push({"score" :score34_RBF,
                  "album": album_name34,
                  "artist": artist_name34,
                  "ranking": ranking34,
                  "genre": genre34,
                  "emotion": emotion34,
                  "image": "imgsrc2hh"});

  score35_RBF = getRBF(emotion_button_value, ranking_button_value, genre_button_value, emotion35_value, ranking35_value, genre35_value, coVariance35);
  scores_RBF.push({"score" :score35_RBF,
                  "album": album_name35,
                  "artist": artist_name35,
                  "ranking": ranking35,
                  "genre": genre35,
                  "emotion": emotion35,
                  "image": "imgsrc2ii"});

  score36_RBF = getRBF(emotion_button_value, ranking_button_value, genre_button_value, emotion36_value, ranking36_value, genre36_value, coVariance36);
  scores_RBF.push({"score" :score36_RBF,
                  "album": album_name36,
                  "artist": artist_name36,
                  "ranking": ranking36,
                  "genre": genre36,
                  "emotion": emotion36,
                  "image": "imgsrc2jj"});

  score37_RBF = getRBF(emotion_button_value, ranking_button_value, genre_button_value, emotion37_value, ranking37_value, genre37_value, coVariance37);
  scores_RBF.push({"score" :score37_RBF,
                  "album": album_name37,
                  "artist": artist_name37,
                  "ranking": ranking37,
                  "genre": genre37,
                  "emotion": emotion37,
                  "image": "imgsrc2kk"});

  score38_RBF = getRBF(emotion_button_value, ranking_button_value, genre_button_value, emotion38_value, ranking38_value, genre38_value, coVariance38);
  scores_RBF.push({"score" :score38_RBF,
                  "album": album_name38,
                  "artist": artist_name38,
                  "ranking": ranking38,
                  "genre": genre38,
                  "emotion": emotion38,
                  "image": "imgsrc2ll"});

  score39_RBF = getRBF(emotion_button_value, ranking_button_value, genre_button_value, emotion39_value, ranking39_value, genre39_value, coVariance39);
  scores_RBF.push({"score" :score39_RBF,
                  "album": album_name39,
                  "artist": artist_name39,
                  "ranking": ranking39,
                  "genre": genre39,
                  "emotion": emotion39,
                  "image": "imgsrc2mm"});

  score40_RBF = getRBF(emotion_button_value, ranking_button_value, genre_button_value, emotion40_value, ranking40_value, genre40_value, coVariance40);
  scores_RBF.push({"score" :score40_RBF,
                  "album": album_name40,
                  "artist": artist_name40,
                  "ranking": ranking40,
                  "genre": genre40,
                  "emotion": emotion40,
                  "image": "imgsrc2nn"});

  score41_RBF = getRBF(emotion_button_value, ranking_button_value, genre_button_value, emotion41_value, ranking41_value, genre41_value, coVariance41);
  scores_RBF.push({"score" :score41_RBF,
                  "album": album_name41,
                  "artist": artist_name41,
                  "ranking": ranking41,
                  "genre": genre41,
                  "emotion": emotion41,
                  "image": "imgsrc2oo"});

  score42_RBF = getRBF(emotion_button_value, ranking_button_value, genre_button_value, emotion42_value, ranking42_value, genre42_value, coVariance42);
  scores_RBF.push({"score" :score42_RBF,
                  "album": album_name42,
                  "artist": artist_name42,
                  "ranking": ranking42,
                  "genre": genre42,
                  "emotion": emotion42,
                  "image": "imgsrc2pp"});

  score43_RBF = getRBF(emotion_button_value, ranking_button_value, genre_button_value, emotion43_value, ranking43_value, genre43_value, coVariance43);
  scores_RBF.push({"score" :score43_RBF,
                  "album": album_name43,
                  "artist": artist_name43,
                  "ranking": ranking43,
                  "genre": genre43,
                  "emotion": emotion43,
                  "image": "imgsrc2qq"});

  score44_RBF = getRBF(emotion_button_value, ranking_button_value, genre_button_value, emotion44_value, ranking44_value, genre44_value, coVariance44);
  scores_RBF.push({"score" :score44_RBF,
                  "album": album_name44,
                  "artist": artist_name44,
                  "ranking": ranking44,
                  "genre": genre44,
                  "emotion": emotion44,
                  "image": "imgsrc2rr"});

  score45_RBF = getRBF(emotion_button_value, ranking_button_value, genre_button_value, emotion45_value, ranking45_value, genre45_value, coVariance45);
  scores_RBF.push({"score" :score45_RBF,
                  "album": album_name45,
                  "artist": artist_name45,
                  "ranking": ranking45,
                  "genre": genre45,
                  "emotion": emotion45,
                  "image": "imgsrc2ss"});

  score46_RBF = getRBF(emotion_button_value, ranking_button_value, genre_button_value, emotion46_value, ranking46_value, genre46_value, coVariance46);
  scores_RBF.push({"score" :score46_RBF,
                  "album": album_name46,
                  "artist": artist_name46,
                  "ranking": ranking46,
                  "genre": genre46,
                  "emotion": emotion46,
                  "image": "imgsrc2tt"});

  score47_RBF = getRBF(emotion_button_value, ranking_button_value, genre_button_value, emotion47_value, ranking47_value, genre47_value, coVariance47);
  scores_RBF.push({"score" :score47_RBF,
                  "album": album_name47,
                  "artist": artist_name47,
                  "ranking": ranking47,
                  "genre": genre47,
                  "emotion": emotion47,
                  "image": "imgsrc2uu"});

  score48_RBF = getRBF(emotion_button_value, ranking_button_value, genre_button_value, emotion48_value, ranking48_value, genre48_value, coVariance48);
  scores_RBF.push({"score" :score48_RBF,
                  "album": album_name48,
                  "artist": artist_name48,
                  "ranking": ranking48,
                  "genre": genre48,
                  "emotion": emotion48,
                  "image": "imgsrc2vv"});

  score49_RBF = getRBF(emotion_button_value, ranking_button_value, genre_button_value, emotion49_value, ranking49_value, genre49_value, coVariance49);
  scores_RBF.push({"score" :score49_RBF,
                  "album": album_name49,
                  "artist": artist_name49,
                  "ranking": ranking49,
                  "genre": genre49,
                  "emotion": emotion49,
                  "image": "imgsrc2ww"});

  score50_RBF = getRBF(emotion_button_value, ranking_button_value, genre_button_value, emotion50_value, ranking50_value, genre50_value, coVariance50);
  scores_RBF.push({"score" :score50_RBF,
                  "album": album_name50,
                  "artist": artist_name50,
                  "ranking": ranking50,
                  "genre": genre50,
                  "emotion": emotion50,
                  "image": "imgsrc2xx"});

//------------------------------------------------------------------------------
//------------------------------------------------------------------------------


  //----------------------TOP3 ED recommendations sliced----------------------//
  console.log(scores_ED);

  scores_ED_sorted = scores_ED.sort(function(a,b) {
    return parseFloat(a.score) - parseFloat(b.score)
  });

  //Debugging statement
  console.log(scores_ED_sorted);

  // sclicing the top 3
  scores_ED_TOP3 = scores_ED_sorted.slice(0, 3);
  console.log(scores_ED_TOP3);


//-----------------------TOP3 MD recommendations sliced-----------------------//
  console.log(scores_MD);

  scores_MD_sorted = scores_MD.sort(function(a,b) {
    return parseFloat(a.score) - parseFloat(b.score)
  });

  //Debugging statement
  console.log(scores_MD_sorted);

  // sclicing the top 3
  scores_MD_TOP3 = scores_MD_sorted.slice(0, 3);
  console.log(scores_MD_TOP3);



  //-----------------------TOP3 RBF recommendations sliced-----------------------//
    console.log(scores_RBF);

    scores_RBF_sorted = scores_RBF.sort(function(a,b) {
      return parseFloat(b.score) - parseFloat(a.score)
    });

    //Debugging statement
    console.log(scores_RBF_sorted);

    // sclicing the top 3
    scores_RBF_TOP3 = scores_RBF_sorted.slice(0, 3);
    console.log(scores_RBF_TOP3);

//------------------------------------------------------------------------------

//============================================================================//

  //DATA ANALYTICS ALGORITHMS HERE
  // calculating the 4 categories of emotion from all albums in the database

  var numEmotionsCats = (redsCounter+greensCounter+ambersCounter+bluesCounter);
  var percentageGreen = (greensCounter*100)/numEmotionsCats;
  var percentageRed = (redsCounter*100)/numEmotionsCats;
  var percentageAmber = (ambersCounter*100)/numEmotionsCats;
  var percentageBlue = (bluesCounter*100)/numEmotionsCats;
  var emotionCatsResults = [percentageGreen, percentageRed, percentageAmber, percentageBlue];
  var green = emotionCatsResults[0];
  var red = emotionCatsResults[1];
  var amber = emotionCatsResults[2];
  var blue = emotionCatsResults[3];
  //----------------------------------------------------------------------------//

  // Plot 4 different types of emotions from database using CanvasJS
  var chart = new CanvasJS.Chart("colChartContainer", {
    theme: "theme2",
    title: {
      text: "Emotion Colour Results"
    },
    data: [{
      type: "column",
      dataPoints: [{
        color: "red",
        label: "RED",
        y: red
      }, {
        color: "green",
        label: "GREEN",
        y: green
      }, {
        color: "yellow",
        label: "AMBER",
        y: amber
      }, {
        color: "blue",
        label: "BLUE",
        y: blue
      }]
    }]
  });//end chart
  chart.render();

  //canvasjs chart
  canvas = $("#colChartContainer .canvasjs-chart-canvas").get(0);
  //logo
  canvas2 = $("#myCanvas2").get(0);

  canvas2a = $("#myCanvas2a").get(0);//smartnote1
  canvas2b = $("#myCanvas2b").get(0);//smartnote2
  canvas2c = $("#myCanvas2c").get(0);//smartnote3
  canvas2d = $("#myCanvas2d").get(0);//smartnote4
  canvas2e = $("#myCanvas2e").get(0);//smartnote5
  canvas2f = $("#myCanvas2f").get(0);//smartnote6
  canvas2g = $("#myCanvas2g").get(0);//smartnote7
  canvas2h = $("#myCanvas2h").get(0);//smartnote8
  canvas2i = $("#myCanvas2i").get(0);//smartnote9
  canvas2j = $("#myCanvas2j").get(0);//smartnote10
  canvas2k = $("#myCanvas2k").get(0);//smartnote11
  canvas2l = $("#myCanvas2l").get(0);//smartnote12
  canvas2m = $("#myCanvas2m").get(0);//smartnote13
  canvas2n = $("#myCanvas2n").get(0);//smartnote14
  canvas2o = $("#myCanvas2o").get(0);//smartnote15
  canvas2p = $("#myCanvas2p").get(0);//smartnote16
  canvas2q = $("#myCanvas2q").get(0);//smartnote17
  canvas2r = $("#myCanvas2r").get(0);//smartnote18
  canvas2s = $("#myCanvas2s").get(0);//smartnote19
  canvas2t = $("#myCanvas2t").get(0);//smartnote20
  canvas2u = $("#myCanvas2u").get(0);//smartnote21
  canvas2v = $("#myCanvas2v").get(0);//smartnote22
  canvas2w = $("#myCanvas2w").get(0);//smartnote23
  canvas2x = $("#myCanvas2x").get(0);//smartnote24
  canvas2y = $("#myCanvas2y").get(0);//smartnote25
  canvas2z = $("#myCanvas2z").get(0);//smartnote26
  canvas2aa = $("#myCanvas2aa").get(0);//smartnote27
  canvas2bb = $("#myCanvas2bb").get(0);//smartnote28
  canvas2cc = $("#myCanvas2cc").get(0);//smartnote29
  canvas2dd = $("#myCanvas2dd").get(0);//smartnote30
  canvas2ee = $("#myCanvas2ee").get(0);//smartnote31
  canvas2ff = $("#myCanvas2ff").get(0);//smartnote32
  canvas2gg = $("#myCanvas2gg").get(0);//smartnote33
  canvas2hh = $("#myCanvas2hh").get(0);//smartnote34
  canvas2ii = $("#myCanvas2ii").get(0);//smartnote35
  canvas2jj = $("#myCanvas2jj").get(0);//smartnote36
  canvas2kk = $("#myCanvas2kk").get(0);//smartnote37
  canvas2ll = $("#myCanvas2ll").get(0);//smartnote38
  canvas2mm = $("#myCanvas2mm").get(0);//smartnote39
  canvas2nn = $("#myCanvas2nn").get(0);//smartnote40
  canvas2oo = $("#myCanvas2oo").get(0);//smartnote41
  canvas2pp = $("#myCanvas2pp").get(0);//smartnote42
  canvas2qq = $("#myCanvas2qq").get(0);//smartnote43
  canvas2rr = $("#myCanvas2rr").get(0);//smartnote44
  canvas2ss = $("#myCanvas2ss").get(0);//smartnote45
  canvas2tt = $("#myCanvas2tt").get(0);//smartnote46
  canvas2uu = $("#myCanvas2uu").get(0);//smartnote47
  canvas2vv = $("#myCanvas2vv").get(0);//smartnote48
  canvas2ww = $("#myCanvas2ww").get(0);//smartnote49
  canvas2xx = $("#myCanvas2xx").get(0);//smartnote50

  //convert canvasjs chart into an image format
  //for rendering it into a PDF
  var plotCanvasJS = canvas.toDataURL();
  var width = 78; //pdf.pageSize.getWidth();
  var height = 50; //pdf.pageSize.getHeight();
  //save into PDF report
  pdf.addImage(plotCanvasJS, 'JPEG', 10, 50,width,height);

  //convert logo into an image format
  //for rendering it into a PDF
  var imgCanvas2 = canvas2.toDataURL();

  //convert smartnote images  into an image
  //format for rendering it into a PDF
  var imgCanvas2a = canvas2a.toDataURL();//smartnote1
  var imgCanvas2b = canvas2b.toDataURL();//smartnote2
  var imgCanvas2c = canvas2c.toDataURL();//smartnote3
  var imgCanvas2d = canvas2d.toDataURL();//smartnote4
  var imgCanvas2e = canvas2e.toDataURL();//smartnote5
  var imgCanvas2f = canvas2f.toDataURL();//smartnote6
  var imgCanvas2g = canvas2g.toDataURL();//smartnote7
  var imgCanvas2h = canvas2h.toDataURL();//smartnote8
  var imgCanvas2i = canvas2i.toDataURL();//smartnote9
  var imgCanvas2j = canvas2j.toDataURL();//smartnote10
  var imgCanvas2k = canvas2k.toDataURL();//smartnote11
  var imgCanvas2l = canvas2l.toDataURL();//smartnote12
  var imgCanvas2m = canvas2m.toDataURL();//smartnote13
  var imgCanvas2n = canvas2n.toDataURL();//smartnote14
  var imgCanvas2o = canvas2o.toDataURL();//smartnote15
  var imgCanvas2p = canvas2p.toDataURL();//smartnote16
  var imgCanvas2q = canvas2q.toDataURL();//smartnote17
  var imgCanvas2r = canvas2r.toDataURL();//smartnote18
  var imgCanvas2s = canvas2s.toDataURL();//smartnote19
  var imgCanvas2t = canvas2t.toDataURL();//smartnote20
  var imgCanvas2u = canvas2u.toDataURL();//smartnote21
  var imgCanvas2v = canvas2v.toDataURL();//smartnote22
  var imgCanvas2w = canvas2w.toDataURL();//smartnote23
  var imgCanvas2x = canvas2x.toDataURL();//smartnote24
  var imgCanvas2y = canvas2y.toDataURL();//smartnote25
  var imgCanvas2z = canvas2z.toDataURL();//smartnote26
  var imgCanvas2aa = canvas2aa.toDataURL();//smartnote27
  var imgCanvas2bb = canvas2bb.toDataURL();//smartnote28
  var imgCanvas2cc = canvas2cc.toDataURL();//smartnote29
  var imgCanvas2dd = canvas2dd.toDataURL();//smartnote30
  var imgCanvas2ee = canvas2ee.toDataURL();//smartnote31
  var imgCanvas2ff = canvas2ff.toDataURL();//smartnote32
  var imgCanvas2gg = canvas2gg.toDataURL();//smartnote33
  var imgCanvas2hh = canvas2hh.toDataURL();//smartnote34
  var imgCanvas2ii = canvas2ii.toDataURL();//smartnote35
  var imgCanvas2jj = canvas2jj.toDataURL();//smartnote36
  var imgCanvas2kk = canvas2kk.toDataURL();//smartnote37
  var imgCanvas2ll = canvas2ll.toDataURL();//smartnote38
  var imgCanvas2mm = canvas2mm.toDataURL();//smartnote39
  var imgCanvas2nn = canvas2nn.toDataURL();//smartnote40
  var imgCanvas2oo = canvas2oo.toDataURL();//smartnote41
  var imgCanvas2pp = canvas2pp.toDataURL();//smartnote42
  var imgCanvas2qq = canvas2qq.toDataURL();//smartnote43
  var imgCanvas2rr = canvas2rr.toDataURL();//smartnote44
  var imgCanvas2ss = canvas2ss.toDataURL();//smartnote45
  var imgCanvas2tt = canvas2tt.toDataURL();//smartnote46
  var imgCanvas2uu = canvas2uu.toDataURL();//smartnote47
  var imgCanvas2vv = canvas2vv.toDataURL();//smartnote48
  var imgCanvas2ww = canvas2ww.toDataURL();//smartnote49
  var imgCanvas2xx = canvas2xx.toDataURL();//smartnote50

  var imgsrc = new Image();
  var imgsrc2a = new Image();//smartnote1
  var imgsrc2b = new Image();//smartnote2
  var imgsrc2c = new Image();//smartnote3
  var imgsrc2d = new Image();//smartnote4
  var imgsrc2e = new Image();//smartnote5
  var imgsrc2f = new Image();//smartnote6
  var imgsrc2g = new Image();//smartnote7
  var imgsrc2h = new Image();//smartnote8
  var imgsrc2i = new Image();//smartnote9
  var imgsrc2j = new Image();//smartnote10
  var imgsrc2k = new Image();//smartnote11
  var imgsrc2l = new Image();//smartnote12
  var imgsrc2m = new Image();//smartnote13
  var imgsrc2n = new Image();//smartnote14
  var imgsrc2o = new Image();//smartnote15
  var imgsrc2p = new Image();//smartnote16
  var imgsrc2q = new Image();//smartnote17
  var imgsrc2r = new Image();//smartnote18
  var imgsrc2s = new Image();//smartnote19
  var imgsrc2t = new Image();//smartnote20
  var imgsrc2u = new Image();//smartnote21
  var imgsrc2v = new Image();//smartnote22
  var imgsrc2w = new Image();//smartnote23
  var imgsrc2x = new Image();//smartnote24
  var imgsrc2y = new Image();//smartnote25
  var imgsrc2z = new Image();//smartnote26
  var imgsrc2aa = new Image();//smartnote27
  var imgsrc2bb = new Image();//smartnote28
  var imgsrc2cc = new Image();//smartnote29
  var imgsrc2dd = new Image();//smartnote30
  var imgsrc2ee = new Image();//smartnote31
  var imgsrc2ff = new Image();//smartnote32
  var imgsrc2gg = new Image();//smartnote33
  var imgsrc2hh = new Image();//smartnote34
  var imgsrc2ii = new Image();//smartnote35
  var imgsrc2jj = new Image();//smartnote36
  var imgsrc2kk = new Image();//smartnote37
  var imgsrc2ll = new Image();//smartnote38
  var imgsrc2mm = new Image();//smartnote39
  var imgsrc2nn = new Image();//smartnote40
  var imgsrc2oo = new Image();//smartnote41
  var imgsrc2pp = new Image();//smartnote42
  var imgsrc2qq = new Image();//smartnote43
  var imgsrc2rr = new Image();//smartnote44
  var imgsrc2ss = new Image();//smartnote45
  var imgsrc2tt = new Image();//smartnote46
  var imgsrc2uu = new Image();//smartnote47
  var imgsrc2vv = new Image();//smartnote48
  var imgsrc2ww = new Image();//smartnote49
  var imgsrc2xx = new Image();//smartnote50

  imgsrc.src=imgCanvas2;
  imgsrc2a.src=imgCanvas2a;//smartnote1
  imgsrc2b.src=imgCanvas2b;//smartnote2
  imgsrc2c.src=imgCanvas2c;//smartnote3
  imgsrc2d.src=imgCanvas2d;//smartnote4
  imgsrc2e.src=imgCanvas2e;//smartnote5
  imgsrc2f.src=imgCanvas2f;//smartnote6
  imgsrc2g.src=imgCanvas2g;//smartnote7
  imgsrc2h.src=imgCanvas2h;//smartnote8
  imgsrc2i.src=imgCanvas2i;//smartnote9
  imgsrc2j.src=imgCanvas2j;//smartnote10
  imgsrc2k.src=imgCanvas2k;//smartnote11
  imgsrc2l.src=imgCanvas2l;//smartnote12
  imgsrc2m.src=imgCanvas2m;//smartnote13
  imgsrc2n.src=imgCanvas2n;//smartnote14
  imgsrc2o.src=imgCanvas2o;//smartnote15
  imgsrc2p.src=imgCanvas2p;//smartnote16
  imgsrc2q.src=imgCanvas2q;//smartnote17
  imgsrc2r.src=imgCanvas2r;//smartnote18
  imgsrc2s.src=imgCanvas2s;//smartnote19
  imgsrc2t.src=imgCanvas2t;//smartnote20
  imgsrc2u.src=imgCanvas2u;//smartnote21
  imgsrc2v.src=imgCanvas2v;//smartnote22
  imgsrc2w.src=imgCanvas2w;//smartnote23
  imgsrc2x.src=imgCanvas2x;//smartnote24
  imgsrc2y.src=imgCanvas2y;//smartnote25
  imgsrc2z.src=imgCanvas2z;//smartnote26
  imgsrc2aa.src=imgCanvas2aa;//smartnote27
  imgsrc2bb.src=imgCanvas2bb;//smartnote28
  imgsrc2cc.src=imgCanvas2cc;//smartnote29
  imgsrc2dd.src=imgCanvas2dd;//smartnote30
  imgsrc2ee.src=imgCanvas2ee;//smartnote31
  imgsrc2ff.src=imgCanvas2ff;//smartnote32
  imgsrc2gg.src=imgCanvas2gg;//smartnote33
  imgsrc2hh.src=imgCanvas2hh;//smartnote34
  imgsrc2ii.src=imgCanvas2ii;//smartnote35
  imgsrc2jj.src=imgCanvas2jj;//smartnote36
  imgsrc2kk.src=imgCanvas2kk;//smartnote37
  imgsrc2ll.src=imgCanvas2ll;//smartnote38
  imgsrc2mm.src=imgCanvas2mm;//smartnote39
  imgsrc2nn.src=imgCanvas2nn;//smartnote40
  imgsrc2oo.src=imgCanvas2oo;//smartnote41
  imgsrc2pp.src=imgCanvas2pp;//smartnote42
  imgsrc2qq.src=imgCanvas2qq;//smartnote43
  imgsrc2rr.src=imgCanvas2rr;//smartnote44
  imgsrc2ss.src=imgCanvas2ss;//smartnote45
  imgsrc2tt.src=imgCanvas2tt;//smartnote46
  imgsrc2uu.src=imgCanvas2uu;//smartnote47
  imgsrc2vv.src=imgCanvas2vv;//smartnote48
  imgsrc2ww.src=imgCanvas2ww;//smartnote49
  imgsrc2xx.src=imgCanvas2xx;//smartnote50

//============================================================================//

//----------------------------------------------------------------------------//

// push top3 ED recommendations into pdf table
score_inTOP3ED = scores_ED_TOP3.map(({score}) => score);
album_inTOP3ED = scores_ED_TOP3.map(({album}) => album);
artist_inTOP3ED = scores_ED_TOP3.map(({artist}) => artist);
ranking_inTOP3ED = scores_ED_TOP3.map(({ranking}) => ranking);
genre_inTOP3ED = scores_ED_TOP3.map(({genre}) => genre);
emotion_inTOP3ED = scores_ED_TOP3.map(({emotion}) => emotion);
image_inTOP3ED = scores_ED_TOP3.map(({image}) => image);

for (var i = 0; i < score_inTOP3ED.length; i++) {
  eval("score_ED_TOP" + (i+1) + '= ' + score_inTOP3ED[i] + ';');
}
for (var i = 0; i < album_inTOP3ED.length; i++) {
  eval("album_ED_TOP" + (i+1) + '= ' + "album_inTOP3ED[i]" + ';');
}
for (var i = 0; i < artist_inTOP3ED.length; i++) {
  eval("artist_ED_TOP" + (i+1) + '= ' + "artist_inTOP3ED[i]" + ';');
}
for (var i = 0; i < ranking_inTOP3ED.length; i++) {
  eval("ranking_ED_TOP" + (i+1) + '= ' + ranking_inTOP3ED[i] + ';');
}
for (var i = 0; i < genre_inTOP3ED.length; i++) {
  eval("genre_ED_TOP" + (i+1) + '= ' + "genre_inTOP3ED[i]" + ';');
}
for (var i = 0; i < emotion_inTOP3ED.length; i++) {
  eval("emotion_ED_TOP" + (i+1) + '= ' + "emotion_inTOP3ED[i]" + ';');
}
for (var i = 0; i < image_inTOP3ED.length; i++) {
  eval("image_ED_TOP" + (i+1) + '= ' + image_inTOP3ED[i] + '.src' + ';');
}

console.log("TOP3 Euclidean distance recommendation albums generated")

//------------------------------------------------------------------------------

//push top3 MD recommendations into pdf table
score_inTOP3MD = scores_MD_TOP3.map(({score}) => score);
album_inTOP3MD = scores_MD_TOP3.map(({album}) => album);
artist_inTOP3MD = scores_MD_TOP3.map(({artist}) => artist);
ranking_inTOP3MD = scores_MD_TOP3.map(({ranking}) => ranking);
genre_inTOP3MD = scores_MD_TOP3.map(({genre}) => genre);
emotion_inTOP3MD = scores_MD_TOP3.map(({emotion}) => emotion);
image_inTOP3MD = scores_MD_TOP3.map(({image}) => image);

for (var i = 0; i < score_inTOP3MD.length; i++) {
  eval("score_MD_TOP" + (i+1) + '= ' + score_inTOP3MD[i] + ';');
}
for (var i = 0; i < album_inTOP3MD.length; i++) {
  eval("album_MD_TOP" + (i+1) + '= ' + "album_inTOP3MD[i]" + ';');
}
for (var i = 0; i < artist_inTOP3MD.length; i++) {
  eval("artist_MD_TOP" + (i+1) + '= ' + "artist_inTOP3MD[i]" + ';');
}
for (var i = 0; i < ranking_inTOP3MD.length; i++) {
  eval("ranking_MD_TOP" + (i+1) + '= ' + ranking_inTOP3MD[i] + ';');
}
for (var i = 0; i < genre_inTOP3MD.length; i++) {
  eval("genre_MD_TOP" + (i+1) + '= ' + "genre_inTOP3MD[i]" + ';');
}
for (var i = 0; i < emotion_inTOP3MD.length; i++) {
  eval("emotion_MD_TOP" + (i+1) + '= ' + "emotion_inTOP3MD[i]" + ';');
}
for (var i = 0; i < image_inTOP3MD.length; i++) {
  eval("image_MD_TOP" + (i+1) + '= ' + image_inTOP3MD[i] + '.src' + ';');
}

console.log("TOP3 Manhattan distance recommendation albums generated")

//------------------------------------------------------------------------------

//push top3 RBF recommendations into pdf table
score_inTOP3RBF = scores_RBF_TOP3.map(({score}) => score);
album_inTOP3RBF = scores_RBF_TOP3.map(({album}) => album);
artist_inTOP3RBF = scores_RBF_TOP3.map(({artist}) => artist);
ranking_inTOP3RBF = scores_RBF_TOP3.map(({ranking}) => ranking);
genre_inTOP3RBF = scores_RBF_TOP3.map(({genre}) => genre);
emotion_inTOP3RBF = scores_RBF_TOP3.map(({emotion}) => emotion);
image_inTOP3RBF = scores_RBF_TOP3.map(({image}) => image);

for (var i = 0; i < score_inTOP3RBF.length; i++) {
  eval("score_RBF_TOP" + (i+1) + '= ' + score_inTOP3RBF[i] + ';');
}
for (var i = 0; i < album_inTOP3RBF.length; i++) {
  eval("album_RBF_TOP" + (i+1) + '= ' + "album_inTOP3RBF[i]" + ';');
}
for (var i = 0; i < artist_inTOP3RBF.length; i++) {
  eval("artist_RBF_TOP" + (i+1) + '= ' + "artist_inTOP3RBF[i]" + ';');
}
for (var i = 0; i < ranking_inTOP3RBF.length; i++) {
  eval("ranking_RBF_TOP" + (i+1) + '= ' + ranking_inTOP3RBF[i] + ';');
}
for (var i = 0; i < genre_inTOP3RBF.length; i++) {
  eval("genre_RBF_TOP" + (i+1) + '= ' + "genre_inTOP3RBF[i]" + ';');
}
for (var i = 0; i < emotion_inTOP3RBF.length; i++) {
  eval("emotion_RBF_TOP" + (i+1) + '= ' + "emotion_inTOP3RBF[i]" + ';');
}
for (var i = 0; i < image_inTOP3RBF.length; i++) {
  eval("image_RBF_TOP" + (i+1) + '= ' + image_inTOP3RBF[i] + '.src' + ';');
}

score_RBF_TOP1 = score_RBF_TOP1.toFixed(6)
score_RBF_TOP2 = score_RBF_TOP2.toFixed(6)
score_RBF_TOP3 = score_RBF_TOP3.toFixed(6)

console.log("TOP3 RBF recommendation albums generated")


//------------------------------------------------------------------------------

//============================================================================//


  pdf.autoTable({

    html: '#myTable',
    bodyStyles: {minCellHeight: 15, minCellWidth: 20},
    startY: 110,
    columnStyles: {3: { halign: "left"}, 5: { halign: "center"}},
    tableWidth: 'auto',
    cellWidth: 'auto',
    tableLineWidth: 'auto',
    margin: {
      right: 13,
      bottom: 20
    },
    styles: {
        font: 'helvetica',
        fontSize: 8,
    },

      didDrawCell: function(data) {
           //----------------------------------------------------------------------------------//
           // column 5: image thumbnails
           // smartnote1
           if (data.row.index === 0 && data.column.index === 5 && data.cell.section === 'body') {
             var dim1 = data.cell.height - data.cell.padding('vertical');
             var textPos1 = data.cell;
             pdf.addImage(imgsrc2a.src, textPos1.x-5,  textPos1.y, 1.5*dim1, 1.5*dim1);
           }
           //smartnote2
           if (data.row.index === 1 && data.column.index === 5 && data.cell.section === 'body') {
             var dim2 = data.cell.height - data.cell.padding('vertical');
             var textPos2 = data.cell;
             pdf.addImage(imgsrc2b.src, textPos2.x-5,  textPos2.y, 1.5*dim2, 1.5*dim2);
           }
           //smartnote3
           if (data.row.index === 2 && data.column.index === 5 && data.cell.section === 'body') {
             var dim3 = data.cell.height - data.cell.padding('vertical');
             var textPos3 = data.cell;
             pdf.addImage(imgsrc2c.src, textPos3.x-5,  textPos3.y, 1.5*dim3, 1.5*dim3);
           }
           //smartnote4
           if (data.row.index === 3 && data.column.index === 5 && data.cell.section === 'body') {
             var dim4 = data.cell.height - data.cell.padding('vertical');
             var textPos4 = data.cell;
             pdf.addImage(imgsrc2d.src, textPos4.x-5,  textPos4.y, 1.5*dim4, 1.5*dim4);
           }
           //smartnote5
           if (data.row.index === 4 && data.column.index === 5 && data.cell.section === 'body') {
             var dim5 = data.cell.height - data.cell.padding('vertical');
             var textPos5 = data.cell;
             pdf.addImage(imgsrc2e.src, textPos5.x-5,  textPos5.y, 1.5*dim5, 1.5*dim5);
           }
           //smartnote6
           if (data.row.index === 5 && data.column.index === 5 && data.cell.section === 'body') {
             var dim6 = data.cell.height - data.cell.padding('vertical');
             var textPos6 = data.cell;
             pdf.addImage(imgsrc2f.src, textPos6.x-5,  textPos6.y, 1.5*dim6, 1.5*dim6);
           }
           //smartnote7
           if (data.row.index === 6 && data.column.index === 5 && data.cell.section === 'body') {
             var dim7 = data.cell.height - data.cell.padding('vertical');
             var textPos7 = data.cell;
             pdf.addImage(imgsrc2g.src, textPos7.x-5,  textPos7.y, 1.5*dim7, 1.5*dim7);
           }
           //smartnote8
           if (data.row.index === 7 && data.column.index === 5 && data.cell.section === 'body') {
             var dim8 = data.cell.height - data.cell.padding('vertical');
             var textPos8 = data.cell;
             pdf.addImage(imgsrc2h.src, textPos8.x-5,  textPos8.y, 1.5*dim8, 1.5*dim8);
           }
           //smartnote9
           if (data.row.index === 8 && data.column.index === 5 && data.cell.section === 'body') {
             var dim9 = data.cell.height - data.cell.padding('vertical');
             var textPos9 = data.cell;
             pdf.addImage(imgsrc2i.src, textPos9.x-5,  textPos9.y, 1.5*dim9, 1.5*dim9);
           }
           //smartnote10
           if (data.row.index === 9 && data.column.index === 5 && data.cell.section === 'body') {
             var dim10 = data.cell.height - data.cell.padding('vertical');
             var textPos10 = data.cell;
             pdf.addImage(imgsrc2j.src, textPos10.x-5,  textPos10.y, 1.5*dim10, 1.5*dim10);
           }
           //smartnote11
           if (data.row.index === 10 && data.column.index === 5 && data.cell.section === 'body') {
             var dim11 = data.cell.height - data.cell.padding('vertical');
             var textPos11 = data.cell;
             pdf.addImage(imgsrc2k.src, textPos11.x-5,  textPos11.y, 1.5*dim11, 1.5*dim11);
           }
           //smartnote12
           if (data.row.index === 11 && data.column.index === 5 && data.cell.section === 'body') {
             var dim12 = data.cell.height - data.cell.padding('vertical');
             var textPos12 = data.cell;
             pdf.addImage(imgsrc2l.src, textPos12.x-5,  textPos12.y, 1.5*dim12, 1.5*dim12);
           }
           //smartnote13
           if (data.row.index === 12 && data.column.index === 5 && data.cell.section === 'body') {
             var dim13 = data.cell.height - data.cell.padding('vertical');
             var textPos13 = data.cell;
             pdf.addImage(imgsrc2m.src, textPos13.x-5,  textPos13.y, 1.5*dim13, 1.5*dim13);
           }
           //smartnote14
           if (data.row.index === 13 && data.column.index === 5 && data.cell.section === 'body') {
             var dim14 = data.cell.height - data.cell.padding('vertical');
             var textPos14 = data.cell;
             pdf.addImage(imgsrc2n.src, textPos14.x-5,  textPos14.y, 1.5*dim14, 1.5*dim14);
           }
           //smartnote15
           if (data.row.index === 14 && data.column.index === 5 && data.cell.section === 'body') {
             var dim15 = data.cell.height - data.cell.padding('vertical');
             var textPos15 = data.cell;
             pdf.addImage(imgsrc2o.src, textPos15.x-5,  textPos15.y, 1.5*dim15, 1.5*dim15);
           }
           //smartnote16
           if (data.row.index === 15 && data.column.index === 5 && data.cell.section === 'body') {
             var dim16 = data.cell.height - data.cell.padding('vertical');
             var textPos16 = data.cell;
             pdf.addImage(imgsrc2p.src, textPos16.x-5,  textPos16.y, 1.5*dim16, 1.5*dim16);
           }
           //smartnote17
           if (data.row.index === 16 && data.column.index === 5 && data.cell.section === 'body') {
             var dim17 = data.cell.height - data.cell.padding('vertical');
             var textPos17 = data.cell;
             pdf.addImage(imgsrc2q.src, textPos17.x-5,  textPos17.y, 1.5*dim17, 1.5*dim17);
           }
           //smartnote18
           if (data.row.index === 17 && data.column.index === 5 && data.cell.section === 'body') {
             var dim18 = data.cell.height - data.cell.padding('vertical');
             var textPos18 = data.cell;
             pdf.addImage(imgsrc2r.src, textPos18.x-5,  textPos18.y, 1.5*dim18, 1.5*dim18);
           }
           //smartnote19
           if (data.row.index === 18 && data.column.index === 5 && data.cell.section === 'body') {
             var dim19 = data.cell.height - data.cell.padding('vertical');
             var textPos19 = data.cell;
             pdf.addImage(imgsrc2s.src, textPos19.x-5,  textPos19.y, 1.5*dim19, 1.5*dim19);
           }
           //smartnote20
           if (data.row.index === 19 && data.column.index === 5 && data.cell.section === 'body') {
             var dim20 = data.cell.height - data.cell.padding('vertical');
             var textPos20 = data.cell;
             pdf.addImage(imgsrc2t.src, textPos20.x-5,  textPos20.y, 1.5*dim20, 1.5*dim20);
           }
           // smartnote21
           if (data.row.index === 20 && data.column.index === 5 && data.cell.section === 'body') {
             var dim21 = data.cell.height - data.cell.padding('vertical');
             var textPos21 = data.cell;
             pdf.addImage(imgsrc2u.src, textPos21.x-5,  textPos21.y, 1.5*dim21, 1.5*dim21);
           }
           //smartnote22
           if (data.row.index === 21 && data.column.index === 5 && data.cell.section === 'body') {
             var dim22 = data.cell.height - data.cell.padding('vertical');
             var textPos22 = data.cell;
             pdf.addImage(imgsrc2v.src, textPos22.x-5,  textPos22.y, 1.5*dim22, 1.5*dim22);
           }
           //smartNote23
           if (data.row.index === 22 && data.column.index === 5 && data.cell.section === 'body') {
             var dim23 = data.cell.height - data.cell.padding('vertical');
             var textPos23 = data.cell;
             pdf.addImage(imgsrc2w.src, textPos23.x-5,  textPos23.y, 1.5*dim23, 1.5*dim23);
           }
           //smartnote24
           if (data.row.index === 23 && data.column.index === 5 && data.cell.section === 'body') {
             var dim24 = data.cell.height - data.cell.padding('vertical');
             var textPos24 = data.cell;
             pdf.addImage(imgsrc2x.src, textPos24.x-5,  textPos24.y, 1.5*dim24, 1.5*dim24);
           }
           //smartnote25
           if (data.row.index === 24 && data.column.index === 5 && data.cell.section === 'body') {
             var dim25 = data.cell.height - data.cell.padding('vertical');
             var textPos25 = data.cell;
             pdf.addImage(imgsrc2y.src, textPos25.x-5,  textPos25.y, 1.5*dim25, 1.5*dim25);
           }
           //smartnote26
           if (data.row.index === 25 && data.column.index === 5 && data.cell.section === 'body') {
             var dim26 = data.cell.height - data.cell.padding('vertical');
             var textPos26 = data.cell;
             pdf.addImage(imgsrc2z.src, textPos26.x-5,  textPos26.y, 1.5*dim26, 1.5*dim26);
           }
           //smartnote27
           if (data.row.index === 26 && data.column.index === 5 && data.cell.section === 'body') {
             var dim27 = data.cell.height - data.cell.padding('vertical');
             var textPos27 = data.cell;
             pdf.addImage(imgsrc2aa.src, textPos27.x-5,  textPos27.y, 1.5*dim27, 1.5*dim27);
           }
           //smartnote28
           if (data.row.index === 27 && data.column.index === 5 && data.cell.section === 'body') {
             var dim28 = data.cell.height - data.cell.padding('vertical');
             var textPos28 = data.cell;
             pdf.addImage(imgsrc2bb.src, textPos28.x-5,  textPos28.y, 1.5*dim28, 1.5*dim28);
           }
           //smartnote29
           if (data.row.index === 28 && data.column.index === 5 && data.cell.section === 'body') {
             var dim29 = data.cell.height - data.cell.padding('vertical');
             var textPos29 = data.cell;
             pdf.addImage(imgsrc2cc.src, textPos29.x-5,  textPos29.y, 1.5*dim29, 1.5*dim29);
           }
           //smartnote30
           if (data.row.index === 29 && data.column.index === 5 && data.cell.section === 'body') {
             var dim30 = data.cell.height - data.cell.padding('vertical');
             var textPos30 = data.cell;
             pdf.addImage(imgsrc2dd.src, textPos30.x-5,  textPos30.y, 1.5*dim30, 1.5*dim30);
           }
           // smartnote31
           if (data.row.index === 30 && data.column.index === 5 && data.cell.section === 'body') {
             var dim31 = data.cell.height - data.cell.padding('vertical');
             var textPos31 = data.cell;
             pdf.addImage(imgsrc2ee.src, textPos31.x-5,  textPos31.y, 1.5*dim31, 1.5*dim31);
           }
           //smartnote32
           if (data.row.index === 31 && data.column.index === 5 && data.cell.section === 'body') {
             var dim32 = data.cell.height - data.cell.padding('vertical');
             var textPos32 = data.cell;
             pdf.addImage(imgsrc2ff.src, textPos32.x-5,  textPos32.y, 1.5*dim32, 1.5*dim32);
           }
           //smartnote33
           if (data.row.index === 32 && data.column.index === 5 && data.cell.section === 'body') {
             var dim33 = data.cell.height - data.cell.padding('vertical');
             var textPos33 = data.cell;
             pdf.addImage(imgsrc2gg.src, textPos33.x-5,  textPos33.y, 1.5*dim33, 1.5*dim33);
           }
           //smartnote34
           if (data.row.index === 33 && data.column.index === 5 && data.cell.section === 'body') {
             var dim34 = data.cell.height - data.cell.padding('vertical');
             var textPos34 = data.cell;
             pdf.addImage(imgsrc2hh.src, textPos34.x-5,  textPos34.y, 1.5*dim34, 1.5*dim34);
           }
           //smartnote35
           if (data.row.index === 34 && data.column.index === 5 && data.cell.section === 'body') {
             var dim35 = data.cell.height - data.cell.padding('vertical');
             var textPos35 = data.cell;
             pdf.addImage(imgsrc2ii.src, textPos35.x-5,  textPos35.y, 1.5*dim35, 1.5*dim35);
           }
           //smartnote36
           if (data.row.index === 35 && data.column.index === 5 && data.cell.section === 'body') {
             var dim36 = data.cell.height - data.cell.padding('vertical');
             var textPos36 = data.cell;
             pdf.addImage(imgsrc2jj.src, textPos36.x-5,  textPos36.y, 1.5*dim36, 1.5*dim36);
           }
           //smartnote37
           if (data.row.index === 36 && data.column.index === 5 && data.cell.section === 'body') {
             var dim37 = data.cell.height - data.cell.padding('vertical');
             var textPos37 = data.cell;
             pdf.addImage(imgsrc2kk.src, textPos37.x-5,  textPos37.y, 1.5*dim37, 1.5*dim37);
           }
           //smartnote38
           if (data.row.index === 37 && data.column.index === 5 && data.cell.section === 'body') {
             var dim38 = data.cell.height - data.cell.padding('vertical');
             var textPos38 = data.cell;
             pdf.addImage(imgsrc2ll.src, textPos38.x-5,  textPos38.y, 1.5*dim38, 1.5*dim38);
           }
           //smartnote39
           if (data.row.index === 38 && data.column.index === 5 && data.cell.section === 'body') {
             var dim39 = data.cell.height - data.cell.padding('vertical');
             var textPos39 = data.cell;
             pdf.addImage(imgsrc2mm.src, textPos39.x-5,  textPos39.y, 1.5*dim39, 1.5*dim39);
           }
           //smartnote40
           if (data.row.index === 39 && data.column.index === 5 && data.cell.section === 'body') {
             var dim40 = data.cell.height - data.cell.padding('vertical');
             var textPos40 = data.cell;
             pdf.addImage(imgsrc2nn.src, textPos40.x-5,  textPos40.y, 1.5*dim40, 1.5*dim40);
           }
           // smartnote41
           if (data.row.index === 40 && data.column.index === 5 && data.cell.section === 'body') {
             var dim41 = data.cell.height - data.cell.padding('vertical');
             var textPos41 = data.cell;
             pdf.addImage(imgsrc2oo.src, textPos41.x-5,  textPos41.y, 1.5*dim41, 1.5*dim41);
           }
           //smartnote42
           if (data.row.index === 41 && data.column.index === 5 && data.cell.section === 'body') {
             var dim42 = data.cell.height - data.cell.padding('vertical');
             var textPos42 = data.cell;
             pdf.addImage(imgsrc2pp.src, textPos42.x-5,  textPos42.y, 1.5*dim42, 1.5*dim42);
           }
           //smartnote43
           if (data.row.index === 42 && data.column.index === 5 && data.cell.section === 'body') {
             var dim43 = data.cell.height - data.cell.padding('vertical');
             var textPos43 = data.cell;
             pdf.addImage(imgsrc2qq.src, textPos43.x-5,  textPos43.y, 1.5*dim43, 1.5*dim43);
           }
           //smartnote44
           if (data.row.index === 43 && data.column.index === 5 && data.cell.section === 'body') {
             var dim44 = data.cell.height - data.cell.padding('vertical');
             var textPos44 = data.cell;
             pdf.addImage(imgsrc2rr.src, textPos44.x-5,  textPos44.y, 1.5*dim44, 1.5*dim44);
           }
           //smartnote45
           if (data.row.index === 44 && data.column.index === 5 && data.cell.section === 'body') {
             var dim45 = data.cell.height - data.cell.padding('vertical');
             var textPos45 = data.cell;
             pdf.addImage(imgsrc2ss.src, textPos45.x-5,  textPos45.y, 1.5*dim45, 1.5*dim45);
           }
           //smartnote46
           if (data.row.index === 45 && data.column.index === 5 && data.cell.section === 'body') {
             var dim46 = data.cell.height - data.cell.padding('vertical');
             var textPos46 = data.cell;
             pdf.addImage(imgsrc2tt.src, textPos46.x-5,  textPos46.y, 1.5*dim46, 1.5*dim46);
           }
           //smartnote47
           if (data.row.index === 46 && data.column.index === 5 && data.cell.section === 'body') {
             var dim47 = data.cell.height - data.cell.padding('vertical');
             var textPos47 = data.cell;
             pdf.addImage(imgsrc2uu.src, textPos47.x-5,  textPos47.y, 1.5*dim47, 1.5*dim47);
           }
           //smartnote48
           if (data.row.index === 47 && data.column.index === 5 && data.cell.section === 'body') {
             var dim48 = data.cell.height - data.cell.padding('vertical');
             var textPos48 = data.cell;
             pdf.addImage(imgsrc2vv.src, textPos48.x-5,  textPos48.y, 1.5*dim48, 1.5*dim48);
           }
           //smartnote49
           if (data.row.index === 48 && data.column.index === 5 && data.cell.section === 'body') {
             var dim49 = data.cell.height - data.cell.padding('vertical');
             var textPos49 = data.cell;
             pdf.addImage(imgsrc2ww.src, textPos49.x-5,  textPos49.y, 1.5*dim49, 1.5*dim49);
           }
           //smartnote50
           if (data.row.index === 49 && data.column.index === 5 && data.cell.section === 'body') {
             var dim50 = data.cell.height - data.cell.padding('vertical');
             var textPos50 = data.cell;
             pdf.addImage(imgsrc2xx.src, textPos50.x-5,  textPos50.y, 1.5*dim50, 1.5*dim50);
           }
           //-----------------------------------------------------------------------------------//

           //----------------------------------------------------------------------------------//
           // column 0: Album name
           //smartnote1
           if (data.row.index === 0 && data.column.index === 0 && data.cell.section === 'body') {
             var textPos1 = data.cell;
             pdf.text(album_name1.toString(), textPos1.x,  textPos1.y+5);
           }
           //smartnote2
           if (data.row.index === 1 && data.column.index === 0 && data.cell.section === 'body') {
             var textPos2 = data.cell;
             pdf.text(album_name2.toString(), textPos2.x,  textPos2.y+5);
           }
           //smartnote3
           if (data.row.index === 2 && data.column.index === 0 && data.cell.section === 'body') {
             var textPos3 = data.cell;
             pdf.text(album_name3.toString(), textPos3.x,  textPos3.y+5);
           }
           //smartnote4
           if (data.row.index === 3 && data.column.index === 0 && data.cell.section === 'body') {
             var textPos4 = data.cell;
             pdf.text(album_name4.toString(), textPos4.x,  textPos4.y+5);
           }
           //smartnote5
           if (data.row.index === 4 && data.column.index === 0 && data.cell.section === 'body') {
             var textPos5 = data.cell;
             pdf.text(album_name5.toString(), textPos5.x,  textPos5.y+5);
           }
           //smartnote6
           if (data.row.index === 5 && data.column.index === 0 && data.cell.section === 'body') {
             var textPos6 = data.cell;
             pdf.text(album_name6.toString(), textPos6.x,  textPos6.y+5);
           }
           //smartnote7
           if (data.row.index === 6 && data.column.index === 0 && data.cell.section === 'body') {
             var textPos7 = data.cell;
             pdf.text(album_name7.toString(), textPos7.x,  textPos7.y+5);
           }
           //smartnote8
           if (data.row.index === 7 && data.column.index === 0 && data.cell.section === 'body') {
             var textPos8 = data.cell;
             pdf.text(album_name8.toString(), textPos8.x,  textPos8.y+5);
           }
           //smartnote9
           if (data.row.index === 8 && data.column.index === 0 && data.cell.section === 'body') {
             var textPos9 = data.cell;
             pdf.text(album_name9.toString(), textPos9.x,  textPos9.y+5);
           }
           //smartnote10
           if (data.row.index === 9 && data.column.index === 0 && data.cell.section === 'body') {
             var textPos10 = data.cell;
             pdf.text(album_name10.toString(), textPos10.x,  textPos10.y+5);
           }
           //smartnote11
           if (data.row.index === 10 && data.column.index === 0 && data.cell.section === 'body') {
             var textPos11 = data.cell;
             pdf.text(album_name11.toString(), textPos11.x,  textPos11.y+5);
           }
           //smartnote12
           if (data.row.index === 11 && data.column.index === 0 && data.cell.section === 'body') {
             var textPos12 = data.cell;
             pdf.text(album_name12.toString(), textPos12.x,  textPos12.y+5);
           }
           //smartnote13
           if (data.row.index === 12 && data.column.index === 0 && data.cell.section === 'body') {
             var textPos13 = data.cell;
             pdf.text(album_name13.toString(), textPos13.x,  textPos13.y+5);
           }
           //smartnote14
           if (data.row.index === 13 && data.column.index === 0 && data.cell.section === 'body') {
             var textPos14 = data.cell;
             pdf.text(album_name14.toString(), textPos14.x,  textPos14.y+5);
           }
           //Smartnotes15
           if (data.row.index === 14 && data.column.index === 0 && data.cell.section === 'body') {
             var textPos15 = data.cell;
             pdf.text(album_name15.toString(), textPos15.x,  textPos15.y+5);
           }
           //smartnote16
           if (data.row.index === 15 && data.column.index === 0 && data.cell.section === 'body') {
             var textPos16 = data.cell;
             pdf.text(album_name16.toString(), textPos16.x,  textPos16.y+5);
           }
           //smartnote17
           if (data.row.index === 16 && data.column.index === 0 && data.cell.section === 'body') {
             var textPos17 = data.cell;
             pdf.text(album_name17.toString(), textPos17.x,  textPos17.y+5);
           }
           //smartnote18
           if (data.row.index === 17 && data.column.index === 0 && data.cell.section === 'body') {
             var textPos18 = data.cell;
             pdf.text(album_name18.toString(), textPos18.x,  textPos18.y+5);
           }
           //smartnote19
           if (data.row.index === 18 && data.column.index === 0 && data.cell.section === 'body') {
             var textPos19 = data.cell;
             pdf.text(album_name19.toString(), textPos19.x,  textPos19.y+5);
           }
           //smartnote20
           if (data.row.index === 19 && data.column.index === 0 && data.cell.section === 'body') {
             var textPos20 = data.cell;
             pdf.text(album_name20.toString(), textPos20.x,  textPos20.y+5);
           }
           //smartnote21
           if (data.row.index === 20 && data.column.index === 0 && data.cell.section === 'body') {
             var textPos21 = data.cell;
             pdf.text(album_name21.toString(), textPos21.x,  textPos21.y+5);
           }
           //smartnote22
           if (data.row.index === 21 && data.column.index === 0 && data.cell.section === 'body') {
             var textPos22 = data.cell;
             pdf.text(album_name22.toString(), textPos22.x,  textPos22.y+5);
           }
           //smartnote23
           if (data.row.index === 22 && data.column.index === 0 && data.cell.section === 'body') {
             var textPos23 = data.cell;
             pdf.text(album_name23.toString(), textPos23.x,  textPos23.y+5);
           }
           //smartnote24
           if (data.row.index === 23 && data.column.index === 0 && data.cell.section === 'body') {
             var textPos24 = data.cell;
             pdf.text(album_name24.toString(), textPos24.x,  textPos24.y+5);
           }
           //Smartnotes25
           if (data.row.index === 24 && data.column.index === 0 && data.cell.section === 'body') {
             var textPos25 = data.cell;
             pdf.text(album_name25.toString(), textPos25.x,  textPos25.y+5);
           }
           //smartnote26
           if (data.row.index === 25 && data.column.index === 0 && data.cell.section === 'body') {
             var textPos26 = data.cell;
             pdf.text(album_name26.toString(), textPos26.x,  textPos26.y+5);
           }
           //smartnote27
           if (data.row.index === 26 && data.column.index === 0 && data.cell.section === 'body') {
             var textPos27 = data.cell;
             pdf.text(album_name27.toString(), textPos27.x,  textPos27.y+5);
           }
           //smartnote28
           if (data.row.index === 27 && data.column.index === 0 && data.cell.section === 'body') {
             var textPos28 = data.cell;
             pdf.text(album_name28.toString(), textPos28.x,  textPos28.y+5);
           }
           //smartnote29
           if (data.row.index === 28 && data.column.index === 0 && data.cell.section === 'body') {
             var textPos29 = data.cell;
             pdf.text(album_name29.toString(), textPos29.x,  textPos29.y+5);
           }
           //smartnote30
           if (data.row.index === 29 && data.column.index === 0 && data.cell.section === 'body') {
             var textPos30 = data.cell;
             pdf.text(album_name30.toString(), textPos30.x,  textPos30.y+5);
           }
           //smartnote31
           if (data.row.index === 30 && data.column.index === 0 && data.cell.section === 'body') {
             var textPos31 = data.cell;
             pdf.text(album_name31.toString(), textPos31.x,  textPos31.y+5);
           }
           //smartnote32
           if (data.row.index === 31 && data.column.index === 0 && data.cell.section === 'body') {
             var textPos32 = data.cell;
             pdf.text(album_name32.toString(), textPos32.x,  textPos32.y+5);
           }
           //smartnote33
           if (data.row.index === 32 && data.column.index === 0 && data.cell.section === 'body') {
             var textPos33 = data.cell;
             pdf.text(album_name33.toString(), textPos33.x,  textPos33.y+5);
           }
           //smartnote34
           if (data.row.index === 33 && data.column.index === 0 && data.cell.section === 'body') {
             var textPos34 = data.cell;
             pdf.text(album_name34.toString(), textPos34.x,  textPos34.y+5);
           }
           //smartnote35
           if (data.row.index === 34 && data.column.index === 0 && data.cell.section === 'body') {
             var textPos35 = data.cell;
             pdf.text(album_name35.toString(), textPos35.x,  textPos35.y+5);
           }
           //smartnote36
           if (data.row.index === 35 && data.column.index === 0 && data.cell.section === 'body') {
             var textPos36 = data.cell;
             pdf.text(album_name36.toString(), textPos36.x,  textPos36.y+5);
           }
           //smartnote37
           if (data.row.index === 36 && data.column.index === 0 && data.cell.section === 'body') {
             var textPos7 = data.cell;
             pdf.text(album_name7.toString(), textPos7.x,  textPos7.y+5);
           }
           //smartnote8
           if (data.row.index === 37 && data.column.index === 0 && data.cell.section === 'body') {
             var textPos38 = data.cell;
             pdf.text(album_name38.toString(), textPos38.x,  textPos38.y+5);
           }
           //smartnote39
           if (data.row.index === 38 && data.column.index === 0 && data.cell.section === 'body') {
             var textPos39 = data.cell;
             pdf.text(album_name39.toString(), textPos39.x,  textPos39.y+5);
           }
           //smartnote40
           if (data.row.index === 39 && data.column.index === 0 && data.cell.section === 'body') {
             var textPos40 = data.cell;
             pdf.text(album_name40.toString(), textPos40.x,  textPos40.y+5);
           }
             //smartnote41
             if (data.row.index === 40 && data.column.index === 0 && data.cell.section === 'body') {
               var textPos41 = data.cell;
               pdf.text(album_name41.toString(), textPos41.x,  textPos41.y+5);
             }
             //smartnote42
             if (data.row.index === 41 && data.column.index === 0 && data.cell.section === 'body') {
               var textPos42 = data.cell;
               pdf.text(album_name42.toString(), textPos42.x,  textPos42.y+5);
             }
             //smartnote43
             if (data.row.index === 42 && data.column.index === 0 && data.cell.section === 'body') {
               var textPos43 = data.cell;
               pdf.text(album_name43.toString(), textPos43.x,  textPos43.y+5);
             }
             //smartnote44
             if (data.row.index === 43 && data.column.index === 0 && data.cell.section === 'body') {
               var textPos44 = data.cell;
               pdf.text(album_name44.toString(), textPos44.x,  textPos44.y+5);
             }
             //smartnote45
             if (data.row.index === 44 && data.column.index === 0 && data.cell.section === 'body') {
               var textPos45 = data.cell;
               pdf.text(album_name45.toString(), textPos45.x,  textPos45.y+5);
             }
             //smartnote6
             if (data.row.index === 45 && data.column.index === 0 && data.cell.section === 'body') {
               var textPos46 = data.cell;
               pdf.text(album_name46.toString(), textPos46.x,  textPos46.y+5);
             }
             //smartnote7
             if (data.row.index === 46 && data.column.index === 0 && data.cell.section === 'body') {
               var textPos47 = data.cell;
               pdf.text(album_name47.toString(), textPos47.x,  textPos47.y+5);
             }
             //smartnote48
             if (data.row.index === 47 && data.column.index === 0 && data.cell.section === 'body') {
               var textPos48 = data.cell;
               pdf.text(album_name48.toString(), textPos48.x,  textPos48.y+5);
             }
             //smartnote49
             if (data.row.index === 48 && data.column.index === 0 && data.cell.section === 'body') {
               var textPos49 = data.cell;
               pdf.text(album_name49.toString(), textPos49.x,  textPos49.y+5);
             }
             //smartnote50
             if (data.row.index === 49 && data.column.index === 0 && data.cell.section === 'body') {
               var textPos50 = data.cell;
               pdf.text(album_name50.toString(), textPos50.x,  textPos50.y+5);
             }

           //----------------------------------------------------------------------------------//

           //----------------------------------------------------------------------------------//
           // column 1: year
           // smartnote1
           if (data.row.index === 0 && data.column.index === 1 && data.cell.section === 'body') {
             var textPos1 = data.cell;
             pdf.text(year1, textPos1.x,  textPos1.y+5);
           }
           //smartnote2
           if (data.row.index === 1 && data.column.index === 1 && data.cell.section === 'body') {
             var textPos2 = data.cell;
             pdf.text(year2, textPos2.x,  textPos2.y+5);
           }
           //smartnote3
           if (data.row.index === 2 && data.column.index === 1 && data.cell.section === 'body') {
             var textPos3 = data.cell;
             pdf.text(year3, textPos3.x,  textPos3.y+5);
           }
           //smartnote4
           if (data.row.index === 3 && data.column.index === 1 && data.cell.section === 'body') {
             var textPos4 = data.cell;
             pdf.text(year4, textPos4.x,  textPos4.y+5);
           }
           //smartnote5
           if (data.row.index === 4 && data.column.index === 1 && data.cell.section === 'body') {
             var textPos5 = data.cell;
             pdf.text(year5, textPos5.x,  textPos5.y+5);
           }
           //smartnote6
           if (data.row.index === 5 && data.column.index === 1 && data.cell.section === 'body') {
             var textPos6 = data.cell;
             pdf.text(year6, textPos6.x,  textPos6.y+5);
           }
           //smartnote7
           if (data.row.index === 6 && data.column.index === 1 && data.cell.section === 'body') {
             var textPos7 = data.cell;
             pdf.text(year7, textPos7.x,  textPos7.y+5);
            }
            //smartnote8
            if (data.row.index == 7 && data.column.index === 1 && data.cell.section === 'body') {
              var textPos8 = data.cell;
              pdf.text(year8, textPos8.x,  textPos8.y+5);
            }
            //smartnote9
            if (data.row.index == 8 && data.column.index === 1 && data.cell.section === 'body') {
              var textPos9 = data.cell;
              pdf.text(year9, textPos9.x,  textPos9.y+5);
            }
            //smartnote10
            if (data.row.index == 9 && data.column.index === 1 && data.cell.section === 'body') {
              var textPos10 = data.cell;
              pdf.text(year10, textPos10.x,  textPos10.y+5);
            }
            //smartnote11
            if (data.row.index == 10 && data.column.index === 1 && data.cell.section === 'body') {
              var textPos11 = data.cell;
              pdf.text(year11, textPos11.x,  textPos11.y+5);
            }
            //smartnote12
            if (data.row.index == 11 && data.column.index === 1 && data.cell.section === 'body') {
              var textPos12 = data.cell;
              pdf.text(year12, textPos12.x,  textPos12.y+5);
            }
            //smartnote13
            if (data.row.index == 12 && data.column.index === 1 && data.cell.section === 'body') {
              var textPos13 = data.cell;
              pdf.text(year13, textPos13.x,  textPos13.y+5);
            }
            //smartnote14
            if (data.row.index == 13 && data.column.index === 1 && data.cell.section === 'body') {
              var textPos14 = data.cell;
              pdf.text(year14, textPos14.x,  textPos14.y+5);
            }
            //smartnote15
            if (data.row.index == 14 && data.column.index === 1 && data.cell.section === 'body') {
              var textPos15 = data.cell;
              pdf.text(year15, textPos15.x,  textPos15.y+5);
            }
            //smartnote16
            if (data.row.index == 15 && data.column.index === 1 && data.cell.section === 'body') {
              var textPos16 = data.cell;
              pdf.text(year16, textPos16.x,  textPos16.y+5);
            }
            //smartnote17
            if (data.row.index === 16 && data.column.index === 1 && data.cell.section === 'body') {
              var textPos17 = data.cell;
              pdf.text(year17, textPos17.x,  textPos17.y+5);
             }
             //smartnote18
             if (data.row.index == 17 && data.column.index === 1 && data.cell.section === 'body') {
               var textPos18 = data.cell;
               pdf.text(year18, textPos18.x,  textPos18.y+5);
             }
             //smartnote9
             if (data.row.index == 18 && data.column.index === 1 && data.cell.section === 'body') {
               var textPos19 = data.cell;
               pdf.text(year19, textPos19.x,  textPos19.y+5);
             }
             //smartnote20
             if (data.row.index == 19 && data.column.index === 1 && data.cell.section === 'body') {
               var textPos20 = data.cell;
               pdf.text(year20, textPos20.x,  textPos20.y+5);
             }
             // smartnote21
             if (data.row.index === 20 && data.column.index === 1 && data.cell.section === 'body') {
               var textPos21 = data.cell;
               pdf.text(year21, textPos21.x,  textPos21.y+5);
             }
             //smartnote22
             if (data.row.index === 21 && data.column.index === 1 && data.cell.section === 'body') {
               var textPos22 = data.cell;
               pdf.text(year22, textPos22.x,  textPos22.y+5);
             }
             //smartnote23
             if (data.row.index === 22 && data.column.index === 1 && data.cell.section === 'body') {
               var textPos23 = data.cell;
               pdf.text(year23, textPos23.x,  textPos23.y+5);
             }
             //smartnote24
             if (data.row.index === 23 && data.column.index === 1 && data.cell.section === 'body') {
               var textPos24 = data.cell;
               pdf.text(year24, textPos24.x,  textPos24.y+5);
             }
             //smartnote25
             if (data.row.index === 24 && data.column.index === 1 && data.cell.section === 'body') {
               var textPos25 = data.cell;
               pdf.text(year25, textPos25.x,  textPos25.y+5);
             }
             //smartnote26
             if (data.row.index === 25 && data.column.index === 1 && data.cell.section === 'body') {
               var textPos26 = data.cell;
               pdf.text(year26, textPos26.x,  textPos26.y+5);
             }
             //smartnote27
             if (data.row.index === 26 && data.column.index === 1 && data.cell.section === 'body') {
               var textPos27 = data.cell;
               pdf.text(year27, textPos27.x,  textPos27.y+5);
              }
              //smartnote28
              if (data.row.index == 27 && data.column.index === 1 && data.cell.section === 'body') {
                var textPos28 = data.cell;
                pdf.text(year28, textPos28.x,  textPos28.y+5);
              }
              //smartnote29
              if (data.row.index == 28 && data.column.index === 1 && data.cell.section === 'body') {
                var textPos29 = data.cell;
                pdf.text(year29, textPos29.x,  textPos29.y+5);
              }
              //smartnote30
              if (data.row.index == 29 && data.column.index === 1 && data.cell.section === 'body') {
                var textPos30 = data.cell;
                pdf.text(year30, textPos30.x,  textPos30.y+5);
              }
              // smartnote31
              if (data.row.index === 30 && data.column.index === 1 && data.cell.section === 'body') {
                var textPos31 = data.cell;
                pdf.text(year31, textPos31.x,  textPos31.y+5);
              }
              //smartnote32
              if (data.row.index === 31 && data.column.index === 1 && data.cell.section === 'body') {
                var textPos32 = data.cell;
                pdf.text(year32, textPos32.x,  textPos32.y+5);
              }
              //smartnote33
              if (data.row.index === 32 && data.column.index === 1 && data.cell.section === 'body') {
                var textPos33 = data.cell;
                pdf.text(year33, textPos33.x,  textPos33.y+5);
              }
              //smartnote34
              if (data.row.index === 33 && data.column.index === 1 && data.cell.section === 'body') {
                var textPos34 = data.cell;
                pdf.text(year34, textPos34.x,  textPos34.y+5);
              }
              //smartnote35
              if (data.row.index === 34 && data.column.index === 1 && data.cell.section === 'body') {
                var textPos35 = data.cell;
                pdf.text(year35, textPos35.x,  textPos35.y+5);
              }
              //smartnote36
              if (data.row.index === 35 && data.column.index === 1 && data.cell.section === 'body') {
                var textPos36 = data.cell;
                pdf.text(year36, textPos36.x,  textPos36.y+5);
              }
              //smartnote37
              if (data.row.index === 36 && data.column.index === 1 && data.cell.section === 'body') {
                var textPos37 = data.cell;
                pdf.text(year37, textPos37.x,  textPos37.y+5);
               }
               //smartnote38
               if (data.row.index == 37 && data.column.index === 1 && data.cell.section === 'body') {
                 var textPos38 = data.cell;
                 pdf.text(year38, textPos38.x,  textPos38.y+5);
               }
               //smartnote39
               if (data.row.index == 8 && data.column.index === 1 && data.cell.section === 'body') {
                 var textPos39 = data.cell;
                 pdf.text(year39, textPos39.x,  textPos39.y+5);
               }
               //smartnote40
               if (data.row.index == 39 && data.column.index === 1 && data.cell.section === 'body') {
                 var textPos40 = data.cell;
                 pdf.text(year40, textPos40.x,  textPos40.y+5);
               }
               // smartnote41
               if (data.row.index === 40 && data.column.index === 1 && data.cell.section === 'body') {
                 var textPos41 = data.cell;
                 pdf.text(year41, textPos41.x,  textPos41.y+5);
               }
               //smartnote42
               if (data.row.index === 41 && data.column.index === 1 && data.cell.section === 'body') {
                 var textPos42 = data.cell;
                 pdf.text(year42, textPos42.x,  textPos42.y+5);
               }
               //smartnote43
               if (data.row.index === 42 && data.column.index === 1 && data.cell.section === 'body') {
                 var textPos43 = data.cell;
                 pdf.text(year43, textPos43.x,  textPos43.y+5);
               }
               //smartnote44
               if (data.row.index === 43 && data.column.index === 1 && data.cell.section === 'body') {
                 var textPos44 = data.cell;
                 pdf.text(year44, textPos44.x,  textPos44.y+5);
               }
               //smartnote45
               if (data.row.index === 44 && data.column.index === 1 && data.cell.section === 'body') {
                 var textPos45 = data.cell;
                 pdf.text(year45, textPos45.x,  textPos45.y+5);
               }
               //smartnote46
               if (data.row.index === 45 && data.column.index === 1 && data.cell.section === 'body') {
                 var textPos46 = data.cell;
                 pdf.text(year46, textPos46.x,  textPos46.y+5);
               }
               //smartnote47
               if (data.row.index === 46 && data.column.index === 1 && data.cell.section === 'body') {
                 var textPos47 = data.cell;
                 pdf.text(year47, textPos47.x,  textPos47.y+5);
                }
                //smartnote48
                if (data.row.index == 47 && data.column.index === 1 && data.cell.section === 'body') {
                  var textPos48 = data.cell;
                  pdf.text(year48, textPos48.x,  textPos48.y+5);
                }
                //smartnote49
                if (data.row.index == 48 && data.column.index === 1 && data.cell.section === 'body') {
                  var textPos49 = data.cell;
                  pdf.text(year49, textPos49.x,  textPos49.y+5);
                }
                //smartnote50
                if (data.row.index == 49 && data.column.index === 1 && data.cell.section === 'body') {
                  var textPos50 = data.cell;
                  pdf.text(year50, textPos50.x,  textPos50.y+5);
                }
            //---------------------------------------------------------------------------------//

            //---------------------------------------------------------------------------------//
            // column 2: Artist name
            //smartnote1
            if (data.row.index === 0 && data.column.index === 2 && data.cell.section === 'body') {
                var textPos1 = data.cell;
                pdf.text(artist_name1, textPos1.x,  textPos1.y+5);
            }
            //smartnote2
            if (data.row.index == 1 && data.column.index === 2 && data.cell.section === 'body') {
                var textPos2 = data.cell;
                pdf.text(artist_name2, textPos2.x,  textPos2.y+5);
            }
            //smartnote3
            if (data.row.index == 2 && data.column.index === 2 && data.cell.section === 'body') {
              var textPos3 = data.cell;
              pdf.text(artist_name3, textPos3.x,  textPos3.y+5);
            }
            //smartnote4
            if (data.row.index == 3 && data.column.index === 2 && data.cell.section === 'body') {
              var textPos4 = data.cell;
              pdf.text(artist_name4, textPos4.x,  textPos4.y+5);
            }
            //smartnote5
            if (data.row.index == 4 && data.column.index === 2 && data.cell.section === 'body') {
              var textPos5 = data.cell;
              pdf.text(artist_name5, textPos5.x,  textPos5.y+5);
            }
            //smartnote6
            if (data.row.index == 5 && data.column.index === 2 && data.cell.section === 'body') {
              var textPos6 = data.cell;
              pdf.text(artist_name6, textPos6.x,  textPos6.y+5);
            }
            //smartnote7
            if (data.row.index == 6 && data.column.index === 2 && data.cell.section === 'body') {
              var textPos7 = data.cell;
              pdf.text(artist_name7, textPos7.x,  textPos7.y+5);
            }
            //smartnote8
            if (data.row.index == 7 && data.column.index === 2 && data.cell.section === 'body') {
              var textPos8 = data.cell;
              pdf.text(artist_name8, textPos8.x,  textPos8.y+5);
            }
            //smartnote9
            if (data.row.index == 8 && data.column.index === 2 && data.cell.section === 'body') {
              var textPos9 = data.cell;
              pdf.text(artist_name9, textPos9.x,  textPos9.y+5);
            }
            //smartnote10
            if (data.row.index == 9 && data.column.index === 2 && data.cell.section === 'body') {
              var textPos10 = data.cell;
              pdf.text(artist_name10, textPos10.x,  textPos10.y+5);
            }
            //smartnote11
            if (data.row.index == 10 && data.column.index === 2 && data.cell.section === 'body') {
              var textPos11 = data.cell;
              pdf.text(artist_name11, textPos11.x,  textPos11.y+5);
            }
            //smartnote12
            if (data.row.index == 11 && data.column.index === 2 && data.cell.section === 'body') {
              var textPos12 = data.cell;
              pdf.text(artist_name12, textPos12.x,  textPos12.y+5);
            }
            //smartnote13
            if (data.row.index == 12 && data.column.index === 2 && data.cell.section === 'body') {
              var textPos13 = data.cell;
              pdf.text(artist_name13, textPos13.x,  textPos13.y+5);
            }
            //smartnote14
            if (data.row.index == 13 && data.column.index === 2 && data.cell.section === 'body') {
              var textPos14 = data.cell;
              pdf.text(artist_name14, textPos14.x,  textPos14.y+5);
            }
            //smartnote15
            if (data.row.index == 14 && data.column.index === 2 && data.cell.section === 'body') {
              var textPos15 = data.cell;
              pdf.text(artist_name15, textPos15.x,  textPos15.y+5);
            }
            //smartnote16
            if (data.row.index == 15 && data.column.index === 2 && data.cell.section === 'body') {
              var textPos16 = data.cell;
              pdf.text(artist_name16, textPos16.x,  textPos16.y+5);
            }
            //smartnote17
            if (data.row.index == 16 && data.column.index === 2 && data.cell.section === 'body') {
              var textPos17 = data.cell;
              pdf.text(artist_name17, textPos17.x,  textPos17.y+5);
            }
            //smartnote18
            if (data.row.index == 17 && data.column.index === 2 && data.cell.section === 'body') {
              var textPos18 = data.cell;
              pdf.text(artist_name18, textPos18.x,  textPos18.y+5);
            }
            //smartnote19
            if (data.row.index == 18 && data.column.index === 2 && data.cell.section === 'body') {
              var textPos19 = data.cell;
              pdf.text(artist_name19, textPos19.x,  textPos19.y+5);
            }
            //smartnote20
            if (data.row.index == 19 && data.column.index === 2 && data.cell.section === 'body') {
              var textPos20 = data.cell;
              pdf.text(artist_name20, textPos20.x,  textPos20.y+5);
            }
            //smartnote21
            if (data.row.index === 20 && data.column.index === 2 && data.cell.section === 'body') {
                var textPos21 = data.cell;
                pdf.text(artist_name21, textPos21.x,  textPos21.y+5);
            }
            //smartnote22
            if (data.row.index == 21 && data.column.index === 2 && data.cell.section === 'body') {
                var textPos22 = data.cell;
                pdf.text(artist_name22, textPos22.x,  textPos22.y+5);
            }
            //smartnote23
            if (data.row.index == 22 && data.column.index === 2 && data.cell.section === 'body') {
              var textPos23 = data.cell;
              pdf.text(artist_name23, textPos23.x,  textPos23.y+5);
            }
            //smartnote24
            if (data.row.index == 23 && data.column.index === 2 && data.cell.section === 'body') {
              var textPos24 = data.cell;
              pdf.text(artist_name24, textPos24.x,  textPos24.y+5);
            }
            //smartnote25
            if (data.row.index == 24 && data.column.index === 2 && data.cell.section === 'body') {
              var textPos25 = data.cell;
              pdf.text(artist_name25, textPos25.x,  textPos25.y+5);
            }
            //smartnote26
            if (data.row.index == 25 && data.column.index === 2 && data.cell.section === 'body') {
              var textPos26 = data.cell;
              pdf.text(artist_name26, textPos26.x,  textPos26.y+5);
            }
            //smartnote27
            if (data.row.index == 26 && data.column.index === 2 && data.cell.section === 'body') {
              var textPos27 = data.cell;
              pdf.text(artist_name27, textPos27.x,  textPos27.y+5);
            }
            //smartnote28
            if (data.row.index == 27 && data.column.index === 2 && data.cell.section === 'body') {
              var textPos28 = data.cell;
              pdf.text(artist_name28, textPos28.x,  textPos28.y+5);
            }
            //smartnote29
            if (data.row.index == 28 && data.column.index === 2 && data.cell.section === 'body') {
              var textPos29 = data.cell;
              pdf.text(artist_name29, textPos29.x,  textPos29.y+5);
            }
            //smartnote30
            if (data.row.index == 29 && data.column.index === 2 && data.cell.section === 'body') {
              var textPos30 = data.cell;
              pdf.text(artist_name30, textPos30.x,  textPos30.y+5);
            }
            //smartnote31
            if (data.row.index == 30 && data.column.index === 2 && data.cell.section === 'body') {
                var textPos31 = data.cell;
                pdf.text(artist_name31, textPos31.x,  textPos31.y+5);
            }
            //smartnote32
            if (data.row.index == 31 && data.column.index === 2 && data.cell.section === 'body') {
                var textPos32 = data.cell;
                pdf.text(artist_name32, textPos32.x,  textPos32.y+5);
            }
            //smartnote33
            if (data.row.index == 32 && data.column.index === 2 && data.cell.section === 'body') {
              var textPos33 = data.cell;
              pdf.text(artist_name33, textPos33.x,  textPos33.y+5);
            }
            //smartnote34
            if (data.row.index == 33 && data.column.index === 2 && data.cell.section === 'body') {
              var textPos34 = data.cell;
              pdf.text(artist_name34, textPos34.x,  textPos34.y+5);
            }
            //smartnote35
            if (data.row.index == 34 && data.column.index === 2 && data.cell.section === 'body') {
              var textPos35 = data.cell;
              pdf.text(artist_name35, textPos35.x,  textPos35.y+5);
            }
            //smartnote36
            if (data.row.index == 35 && data.column.index === 2 && data.cell.section === 'body') {
              var textPos36 = data.cell;
              pdf.text(artist_name36, textPos36.x,  textPos36.y+5);
            }
            //smartnote37
            if (data.row.index == 36 && data.column.index === 2 && data.cell.section === 'body') {
              var textPos37 = data.cell;
              pdf.text(artist_name37, textPos37.x,  textPos37.y+5);
            }
            //smartnote38
            if (data.row.index == 37 && data.column.index === 2 && data.cell.section === 'body') {
              var textPos38 = data.cell;
              pdf.text(artist_name38, textPos38.x,  textPos38.y+5);
            }
            //smartnote39
            if (data.row.index == 38 && data.column.index === 2 && data.cell.section === 'body') {
              var textPos39 = data.cell;
              pdf.text(artist_name39, textPos39.x,  textPos39.y+5);
            }
            //smartnote40
            if (data.row.index == 39 && data.column.index === 2 && data.cell.section === 'body') {
              var textPos40 = data.cell;
              pdf.text(artist_name40, textPos40.x,  textPos40.y+5);
            }
            //smartnote41
            if (data.row.index === 40 && data.column.index === 2 && data.cell.section === 'body') {
                var textPos41 = data.cell;
                pdf.text(artist_name41, textPos41.x,  textPos41.y+5);
            }
            //smartnote42
            if (data.row.index == 41 && data.column.index === 2 && data.cell.section === 'body') {
                var textPos42 = data.cell;
                pdf.text(artist_name42, textPos42.x,  textPos42.y+5);
            }
            //smartnote43
            if (data.row.index == 42 && data.column.index === 2 && data.cell.section === 'body') {
              var textPos43 = data.cell;
              pdf.text(artist_name43, textPos43.x,  textPos43.y+5);
            }
            //smartnote44
            if (data.row.index == 43 && data.column.index === 2 && data.cell.section === 'body') {
              var textPos44 = data.cell;
              pdf.text(artist_name44, textPos44.x,  textPos44.y+5);
            }
            //smartnote5
            if (data.row.index == 44 && data.column.index === 2 && data.cell.section === 'body') {
              var textPos45 = data.cell;
              pdf.text(artist_name45, textPos45.x,  textPos45.y+5);
            }
            //smartnote46
            if (data.row.index == 45 && data.column.index === 2 && data.cell.section === 'body') {
              var textPos46 = data.cell;
              pdf.text(artist_name46, textPos46.x,  textPos46.y+5);
            }
            //smartnote47
            if (data.row.index == 46 && data.column.index === 2 && data.cell.section === 'body') {
              var textPos47 = data.cell;
              pdf.text(artist_name47, textPos47.x,  textPos47.y+5);
            }
            //smartnote48
            if (data.row.index == 47 && data.column.index === 2 && data.cell.section === 'body') {
              var textPos48 = data.cell;
              pdf.text(artist_name48, textPos48.x,  textPos48.y+5);
            }
            //smartnote49
            if (data.row.index == 48 && data.column.index === 2 && data.cell.section === 'body') {
              var textPos49 = data.cell;
              pdf.text(artist_name49, textPos49.x,  textPos49.y+5);
            }
            //smartnote50
            if (data.row.index == 49 && data.column.index === 2 && data.cell.section === 'body') {
              var textPos50 = data.cell;
              pdf.text(artist_name50, textPos50.x,  textPos50.y+5);
            }
            //----------------------------------------------------------------------------------//

            //----------------------------------------------------------------------------------//
            // column 3: Genre
            //smartnote1
            if (data.row.index == 0 && data.column.index === 3 && data.cell.section === 'body') {
              var textPos1 = data.cell;
              pdf.text(genre1, textPos1.x,  textPos1.y+5);
            }
            //smartnote2
            if (data.row.index == 1 && data.column.index === 3 && data.cell.section === 'body') {
              var textPos2 = data.cell;
              pdf.text(genre2, textPos2.x,  textPos2.y+5);
            }
            //smartnote3
            if (data.row.index == 2 && data.column.index === 3 && data.cell.section === 'body') {
              var textPos3 = data.cell;
              pdf.text(genre3, textPos3.x,  textPos3.y+5);
            }
            //smartnote4
            if (data.row.index == 3 && data.column.index === 3 && data.cell.section === 'body') {
              var textPos4 = data.cell;
              pdf.text(genre4, textPos4.x,  textPos4.y+5);
            }
            //smartnote5
            if (data.row.index == 4 && data.column.index === 3 && data.cell.section === 'body') {
              var textPos5 = data.cell;
              pdf.text(genre5, textPos5.x,  textPos5.y+5);
            }
            //smartnote6
            if (data.row.index == 5 && data.column.index === 3 && data.cell.section === 'body') {
              var textPos6 = data.cell;
              pdf.text(genre6, textPos6.x,  textPos6.y+5);
            }
            //smartnote7
            if (data.row.index == 6 && data.column.index === 3 && data.cell.section === 'body') {
              var textPos7 = data.cell;
              pdf.text(genre7, textPos7.x,  textPos7.y+5);
            }
            //smartnote8
            if (data.row.index == 7 && data.column.index === 3 && data.cell.section === 'body') {
              var textPos8 = data.cell;
              pdf.text(genre8, textPos8.x,  textPos8.y+5);
            }
            //smartnote9
            if (data.row.index == 8 && data.column.index === 3 && data.cell.section === 'body') {
              var textPos9 = data.cell;
              pdf.text(genre9, textPos9.x,  textPos9.y+5);
            }
            //smartnote10
            if (data.row.index == 9 && data.column.index === 3 && data.cell.section === 'body') {
              var textPos10 = data.cell;
              pdf.text(genre10, textPos10.x,  textPos10.y+5);
            }
            //smartnote11
            if (data.row.index == 10 && data.column.index === 3 && data.cell.section === 'body') {
              var textPos11 = data.cell;
              pdf.text(genre11, textPos11.x,  textPos11.y+5);
            }
            //smartnote12
            if (data.row.index == 11 && data.column.index === 3 && data.cell.section === 'body') {
              var textPos12 = data.cell;
              pdf.text(genre12, textPos12.x,  textPos12.y+5);
            }
            //smartnote13
            if (data.row.index == 12 && data.column.index === 3 && data.cell.section === 'body') {
              var textPos13 = data.cell;
              pdf.text(genre13, textPos13.x,  textPos13.y+5);
            }
            //smartnote14
            if (data.row.index == 13 && data.column.index === 3 && data.cell.section === 'body') {
              var textPos14 = data.cell;
              pdf.text(genre14, textPos14.x,  textPos14.y+5);
            }
            //smartnote15
            if (data.row.index == 14 && data.column.index === 3 && data.cell.section === 'body') {
              var textPos15 = data.cell;
              pdf.text(genre15, textPos15.x,  textPos15.y+5);
            }
            //smartnote16
            if (data.row.index == 15 && data.column.index === 3 && data.cell.section === 'body') {
              var textPos16 = data.cell;
              pdf.text(genre16, textPos16.x,  textPos16.y+5);
            }
            //smartnote17
            if (data.row.index == 16 && data.column.index === 3 && data.cell.section === 'body') {
              var textPos17 = data.cell;
              pdf.text(genre17, textPos17.x,  textPos17.y+5);
            }
            //smartnote18
            if (data.row.index == 17 && data.column.index === 3 && data.cell.section === 'body') {
              var textPos18 = data.cell;
              pdf.text(genre18, textPos18.x,  textPos18.y+5);
            }
            //smartnote19
            if (data.row.index == 18 && data.column.index === 3 && data.cell.section === 'body') {
              var textPos19 = data.cell;
              pdf.text(genre19, textPos19.x,  textPos19.y+5);
            }
            //smartnote20
            if (data.row.index == 19 && data.column.index === 3 && data.cell.section === 'body') {
              var textPos20 = data.cell;
              pdf.text(genre20, textPos20.x,  textPos20.y+5);
            }
            //smartnote21
            if (data.row.index == 20 && data.column.index === 3 && data.cell.section === 'body') {
              var textPos21 = data.cell;
              pdf.text(genre21, textPos21.x,  textPos21.y+5);
            }
            //smartnote22
            if (data.row.index == 21 && data.column.index === 3 && data.cell.section === 'body') {
              var textPos22 = data.cell;
              pdf.text(genre22, textPos22.x,  textPos22.y+5);
            }
            //smartnote23
            if (data.row.index == 22 && data.column.index === 3 && data.cell.section === 'body') {
              var textPos23 = data.cell;
              pdf.text(genre23, textPos23.x,  textPos23.y+5);
            }
            //smartnote24
            if (data.row.index == 23 && data.column.index === 3 && data.cell.section === 'body') {
              var textPos24 = data.cell;
              pdf.text(genre24, textPos24.x,  textPos24.y+5);
            }
            //smartnote25
            if (data.row.index == 24 && data.column.index === 3 && data.cell.section === 'body') {
              var textPos25 = data.cell;
              pdf.text(genre25, textPos25.x,  textPos25.y+5);
            }
            //smartnote26
            if (data.row.index == 25 && data.column.index === 3 && data.cell.section === 'body') {
              var textPos26 = data.cell;
              pdf.text(genre26, textPos26.x,  textPos26.y+5);
            }
            //smartnote27
            if (data.row.index == 26 && data.column.index === 3 && data.cell.section === 'body') {
              var textPos27 = data.cell;
              pdf.text(genre27, textPos27.x,  textPos27.y+5);
            }
            //smartnote28
            if (data.row.index == 27 && data.column.index === 3 && data.cell.section === 'body') {
              var textPos28 = data.cell;
              pdf.text(genre28, textPos28.x,  textPos28.y+5);
            }
            //smartnote29
            if (data.row.index == 28 && data.column.index === 3 && data.cell.section === 'body') {
              var textPos29 = data.cell;
              pdf.text(genre29, textPos29.x,  textPos29.y+5);
            }
            //smartnote30
            if (data.row.index == 29 && data.column.index === 3 && data.cell.section === 'body') {
              var textPos30 = data.cell;
              pdf.text(genre30, textPos30.x,  textPos30.y+5);
            }
            //smartnote31
            if (data.row.index == 30 && data.column.index === 3 && data.cell.section === 'body') {
              var textPos31 = data.cell;
              pdf.text(genre31, textPos31.x,  textPos31.y+5);
            }
            //smartnote32
            if (data.row.index == 31 && data.column.index === 3 && data.cell.section === 'body') {
              var textPos32 = data.cell;
              pdf.text(genre32, textPos32.x,  textPos32.y+5);
            }
            //smartnote33
            if (data.row.index == 32 && data.column.index === 3 && data.cell.section === 'body') {
              var textPos33 = data.cell;
              pdf.text(genre33, textPos33.x,  textPos33.y+5);
            }
            //smartnote34
            if (data.row.index == 33 && data.column.index === 3 && data.cell.section === 'body') {
              var textPos34 = data.cell;
              pdf.text(genre34, textPos34.x,  textPos34.y+5);
            }
            //smartnote35
            if (data.row.index == 34 && data.column.index === 3 && data.cell.section === 'body') {
              var textPos35 = data.cell;
              pdf.text(genre35, textPos35.x,  textPos35.y+5);
            }
            //smartnote36
            if (data.row.index == 35 && data.column.index === 3 && data.cell.section === 'body') {
              var textPos36 = data.cell;
              pdf.text(genre36, textPos36.x,  textPos36.y+5);
            }
            //smartnote37
            if (data.row.index == 36 && data.column.index === 3 && data.cell.section === 'body') {
              var textPos37 = data.cell;
              pdf.text(genre37, textPos37.x,  textPos37.y+5);
            }
            //smartnote38
            if (data.row.index == 37 && data.column.index === 3 && data.cell.section === 'body') {
              var textPos38 = data.cell;
              pdf.text(genre38, textPos38.x,  textPos38.y+5);
            }
            //smartnote39
            if (data.row.index == 38 && data.column.index === 3 && data.cell.section === 'body') {
              var textPos39 = data.cell;
              pdf.text(genre39, textPos39.x,  textPos39.y+5);
            }
            //smartnote40
            if (data.row.index == 39 && data.column.index === 3 && data.cell.section === 'body') {
              var textPos40 = data.cell;
              pdf.text(genre40, textPos40.x,  textPos40.y+5);
            }
            //smartnote41
            if (data.row.index == 40 && data.column.index === 3 && data.cell.section === 'body') {
              var textPos41 = data.cell;
              pdf.text(genre41, textPos41.x,  textPos41.y+5);
            }
            //smartnote2
            if (data.row.index == 41 && data.column.index === 3 && data.cell.section === 'body') {
              var textPos42 = data.cell;
              pdf.text(genre42, textPos42.x,  textPos42.y+5);
            }
            //smartnote43
            if (data.row.index == 42 && data.column.index === 3 && data.cell.section === 'body') {
              var textPos43 = data.cell;
              pdf.text(genre43, textPos43.x,  textPos43.y+5);
            }
            //smartnote44
            if (data.row.index == 43 && data.column.index === 3 && data.cell.section === 'body') {
              var textPos44 = data.cell;
              pdf.text(genre44, textPos44.x,  textPos44.y+5);
            }
            //smartnote45
            if (data.row.index == 44 && data.column.index === 3 && data.cell.section === 'body') {
              var textPos45 = data.cell;
              pdf.text(genre45, textPos45.x,  textPos45.y+5);
            }
            //smartnote46
            if (data.row.index == 45 && data.column.index === 3 && data.cell.section === 'body') {
              var textPos46 = data.cell;
              pdf.text(genre46, textPos46.x,  textPos46.y+5);
            }
            //smartnote47
            if (data.row.index == 46 && data.column.index === 3 && data.cell.section === 'body') {
              var textPos47 = data.cell;
              pdf.text(genre47, textPos47.x,  textPos47.y+5);
            }
            //smartnote48
            if (data.row.index == 47 && data.column.index === 3 && data.cell.section === 'body') {
              var textPos48 = data.cell;
              pdf.text(genre48, textPos48.x,  textPos48.y+5);
            }
            //smartnote49
            if (data.row.index == 48 && data.column.index === 3 && data.cell.section === 'body') {
              var textPos49 = data.cell;
              pdf.text(genre49, textPos49.x,  textPos49.y+5);
            }
            //smartnote50
            if (data.row.index == 49 && data.column.index === 3 && data.cell.section === 'body') {
              var textPos50 = data.cell;
              pdf.text(genre50, textPos50.x,  textPos50.y+5);
            }
            //----------------------------------------------------------------------------------//

            //----------------------------------------------------------------------------------//
            // column 4: Emotion
            //smartnote1
            if (data.row.index == 0 && data.column.index === 4 && data.cell.section === 'body') {
              var textPos1 = data.cell;
              pdf.text(emotion1, textPos1.x,  textPos1.y+5);
            }
            //smartnote2
            if (data.row.index == 1 && data.column.index === 4 && data.cell.section === 'body') {
              var textPos2 = data.cell;
              pdf.text(emotion2, textPos2.x,  textPos2.y+5);
            }
            //smartnote3
            if (data.row.index == 2 && data.column.index === 4 && data.cell.section === 'body') {
              var textPos3 = data.cell;
              pdf.text(emotion3, textPos3.x,  textPos3.y+5);
            }
            //smartnote4
            if (data.row.index == 3 && data.column.index === 4 && data.cell.section === 'body') {
              var textPos4 = data.cell;
              pdf.text(emotion4, textPos4.x,  textPos4.y+5);
            }
            //smartnote5
            if (data.row.index == 4 && data.column.index === 4 && data.cell.section === 'body') {
              var textPos5 = data.cell;
              pdf.text(emotion5, textPos5.x,  textPos5.y+5);
            }
            //smartnote6
            if (data.row.index == 5 && data.column.index === 4 && data.cell.section === 'body') {
              var textPos6 = data.cell;
              pdf.text(emotion6, textPos6.x,  textPos6.y+5);
            }
            //smartnote7
            if (data.row.index == 6 && data.column.index === 4 && data.cell.section === 'body') {
              var textPos7 = data.cell;
              pdf.text(emotion7, textPos7.x,  textPos7.y+5);
            }
            //smartnote8
            if (data.row.index == 7 && data.column.index === 4 && data.cell.section === 'body') {
              var textPos8 = data.cell;
              pdf.text(emotion8, textPos8.x,  textPos8.y+5);
            }
            //smartnote9
            if (data.row.index == 8 && data.column.index === 4 && data.cell.section === 'body') {
              var textPos9 = data.cell;
              pdf.text(emotion9, textPos9.x,  textPos9.y+5);
            }
            //smartnote10
            if (data.row.index == 9 && data.column.index === 4 && data.cell.section === 'body') {
              var textPos10 = data.cell;
              pdf.text(emotion10, textPos10.x,  textPos10.y+5);
            }
            //smartnote11
            if (data.row.index == 10 && data.column.index === 4 && data.cell.section === 'body') {
              var textPos11 = data.cell;
              pdf.text(emotion11, textPos11.x,  textPos11.y+5);
            }
            //smartnote12
            if (data.row.index == 11 && data.column.index === 4 && data.cell.section === 'body') {
              var textPos12 = data.cell;
              pdf.text(emotion12, textPos12.x,  textPos12 .y+5);
            }
            //smartnote13
            if (data.row.index == 12 && data.column.index === 4 && data.cell.section === 'body') {
              var textPos13 = data.cell;
              pdf.text(emotion13, textPos13.x,  textPos13.y+5);
            }
            //smartnote14
            if (data.row.index == 13 && data.column.index === 4 && data.cell.section === 'body') {
              var textPos14 = data.cell;
              pdf.text(emotion14, textPos14.x,  textPos14.y+5);
            }
            //smartnote15
            if (data.row.index == 14 && data.column.index === 4 && data.cell.section === 'body') {
              var textPos15 = data.cell;
              pdf.text(emotion15, textPos15.x,  textPos15.y+5);
            }
            //smartnote16
            if (data.row.index == 15 && data.column.index === 4 && data.cell.section === 'body') {
              var textPos16 = data.cell;
              pdf.text(emotion16, textPos16.x,  textPos16.y+5);
            }
            //smartnote17
            if (data.row.index == 16 && data.column.index === 4 && data.cell.section === 'body') {
              var textPos17 = data.cell;
              pdf.text(emotion17, textPos17.x,  textPos17.y+5);
            }
            //smartnote18
            if (data.row.index == 17 && data.column.index === 4 && data.cell.section === 'body') {
              var textPos18 = data.cell;
              pdf.text(emotion18, textPos18.x,  textPos18.y+5);
            }
            //smartnote19
            if (data.row.index == 18 && data.column.index === 4 && data.cell.section === 'body') {
              var textPos19 = data.cell;
              pdf.text(emotion19, textPos19.x,  textPos19.y+5);
            }
            //smartnote20
            if (data.row.index == 19 && data.column.index === 4 && data.cell.section === 'body') {
              var textPos20 = data.cell;
              pdf.text(emotion20, textPos20.x,  textPos20.y+5);
            }
            //smartnote21
            if (data.row.index == 20 && data.column.index === 4 && data.cell.section === 'body') {
              var textPos21 = data.cell;
              pdf.text(emotion21, textPos21.x,  textPos21.y+5);
            }
            //smartnote22
            if (data.row.index == 21 && data.column.index === 4 && data.cell.section === 'body') {
              var textPos22 = data.cell;
              pdf.text(emotion22, textPos22.x,  textPos22.y+5);
            }
            //smartnote23
            if (data.row.index == 22 && data.column.index === 4 && data.cell.section === 'body') {
              var textPos23 = data.cell;
              pdf.text(emotion23, textPos23.x,  textPos23.y+5);
            }
            //smartnote24
            if (data.row.index == 23 && data.column.index === 4 && data.cell.section === 'body') {
              var textPos24 = data.cell;
              pdf.text(emotion24, textPos24.x,  textPos24.y+5);
            }
            //smartnote25
            if (data.row.index == 24 && data.column.index === 4 && data.cell.section === 'body') {
              var textPos25 = data.cell;
              pdf.text(emotion25, textPos25.x,  textPos25.y+5);
            }
            //smartnote26
            if (data.row.index == 25 && data.column.index === 4 && data.cell.section === 'body') {
              var textPos26 = data.cell;
              pdf.text(emotion26, textPos26.x,  textPos26.y+5);
            }
            //smartnote27
            if (data.row.index == 26 && data.column.index === 4 && data.cell.section === 'body') {
              var textPos27 = data.cell;
              pdf.text(emotion27, textPos27.x,  textPos27.y+5);
            }
            //smartnote28
            if (data.row.index == 27 && data.column.index === 4 && data.cell.section === 'body') {
              var textPos28 = data.cell;
              pdf.text(emotion28, textPos28.x,  textPos28.y+5);
            }
            //smartnote29
            if (data.row.index == 28 && data.column.index === 4 && data.cell.section === 'body') {
              var textPos29 = data.cell;
              pdf.text(emotion29, textPos29.x,  textPos29.y+5);
            }
            //smartnote30
            if (data.row.index == 29 && data.column.index === 4 && data.cell.section === 'body') {
              var textPos30 = data.cell;
              pdf.text(emotion30, textPos30.x,  textPos30.y+5);
            }
            //smartnote31
            if (data.row.index == 30 && data.column.index === 4 && data.cell.section === 'body') {
              var textPos31 = data.cell;
              pdf.text(emotion31, textPos31.x,  textPos31.y+5);
            }
            //smartnote32
            if (data.row.index == 31 && data.column.index === 4 && data.cell.section === 'body') {
              var textPos32 = data.cell;
              pdf.text(emotion32, textPos32.x,  textPos32.y+5);
            }
            //smartnote33
            if (data.row.index == 32 && data.column.index === 4 && data.cell.section === 'body') {
              var textPos33 = data.cell;
              pdf.text(emotion33, textPos33.x,  textPos33.y+5);
            }
            //smartnote34
            if (data.row.index == 33 && data.column.index === 4 && data.cell.section === 'body') {
              var textPos34 = data.cell;
              pdf.text(emotion34, textPos34.x,  textPos34.y+5);
            }
            //smartnote35
            if (data.row.index == 34 && data.column.index === 4 && data.cell.section === 'body') {
              var textPos35 = data.cell;
              pdf.text(emotion35, textPos35.x,  textPos35.y+5);
            }
            //smartnote36
            if (data.row.index == 35 && data.column.index === 4 && data.cell.section === 'body') {
              var textPos36 = data.cell;
              pdf.text(emotion36, textPos36.x,  textPos36.y+5);
            }
            //smartnote37
            if (data.row.index == 36 && data.column.index === 4 && data.cell.section === 'body') {
              var textPos37 = data.cell;
              pdf.text(emotion37, textPos37.x,  textPos37.y+5);
            }
            //smartnote38
            if (data.row.index == 37 && data.column.index === 4 && data.cell.section === 'body') {
              var textPos38 = data.cell;
              pdf.text(emotion38, textPos38.x,  textPos38.y+5);
            }
            //smartnote39
            if (data.row.index == 38 && data.column.index === 4 && data.cell.section === 'body') {
              var textPos39 = data.cell;
              pdf.text(emotion39, textPos39.x,  textPos39.y+5);
            }
            //smartnote40
            if (data.row.index == 39 && data.column.index === 4 && data.cell.section === 'body') {
              var textPos40 = data.cell;
              pdf.text(emotion40, textPos40.x,  textPos40.y+5);
            }
            //smartnote41
            if (data.row.index == 40 && data.column.index === 4 && data.cell.section === 'body') {
              var textPos41 = data.cell;
              pdf.text(emotion41, textPos41.x,  textPos41.y+5);
            }
            //smartnote42
            if (data.row.index == 41 && data.column.index === 4 && data.cell.section === 'body') {
              var textPos42 = data.cell;
              pdf.text(emotion42, textPos42.x,  textPos42.y+5);
            }
            //smartnote43
            if (data.row.index == 42 && data.column.index === 4 && data.cell.section === 'body') {
              var textPos43 = data.cell;
              pdf.text(emotion43, textPos43.x,  textPos43.y+5);
            }
            //smartnote44
            if (data.row.index == 43 && data.column.index === 4 && data.cell.section === 'body') {
              var textPos44 = data.cell;
              pdf.text(emotion44, textPos44.x,  textPos44.y+5);
            }
            //smartnote45
            if (data.row.index == 44 && data.column.index === 4 && data.cell.section === 'body') {
              var textPos45 = data.cell;
              pdf.text(emotion45, textPos45.x,  textPos45.y+5);
            }
            //smartnote46
            if (data.row.index == 45 && data.column.index === 4 && data.cell.section === 'body') {
              var textPos46 = data.cell;
              pdf.text(emotion46, textPos46.x,  textPos46.y+5);
            }
            //smartnote47
            if (data.row.index == 46 && data.column.index === 4 && data.cell.section === 'body') {
              var textPos47 = data.cell;
              pdf.text(emotion47, textPos47.x,  textPos47.y+5);
            }
            //smartnote48
            if (data.row.index == 47 && data.column.index === 4 && data.cell.section === 'body') {
              var textPos48 = data.cell;
              pdf.text(emotion48, textPos48.x,  textPos48.y+5);
            }
            //smartnote49
            if (data.row.index == 48 && data.column.index === 4 && data.cell.section === 'body') {
              var textPos49 = data.cell;
              pdf.text(emotion49, textPos49.x,  textPos49.y+5);
            }
            //smartnote50
            if (data.row.index == 49 && data.column.index === 4 && data.cell.section === 'body') {
              var textPos50 = data.cell;
              pdf.text(emotion50, textPos50.x,  textPos50.y+5);
            }
        //--------------------------------------------------------------------//
          }//end didDrawCell
        });//end autoTable
        //--------------------------------------------------------------------//

      //table for displaying top3 ED recommendations
      pdf.autoTable({

        html: '#mytable1',
        bodyStyles: {minCellHeight: 15, minCellWidth: 20},
        startY: pdf.lastAutoTable.finalY + 185,
        columnStyles: {3: { halign: "left"}, 5: { halign: "center"}},
        //theme: 'grid',
        tableWidth: 'auto',
        cellWidth: 'auto',
        tableLineWidth: 'auto',
        margin: {
          right: 13,
          bottom: 20
        },
        styles: {
            font: 'helvetica',
            fontSize: 8,
            //overflow: 'linebreak'
        },
        didDrawCell: function(data1) {
          //---------------------------------------------------------------------------------//
          // column 0: Score
          //TOP1 ED
          if (data1.row.index === 0 && data1.column.index === 0 && data1.cell.section === 'body') {
            var textPos1 = data1.cell;
            pdf.text(score_ED_TOP1.toString(), textPos1.x,  textPos1.y+5);
          }
          //TOP2 ED
          if (data1.row.index === 1 && data1.column.index === 0 && data1.cell.section === 'body') {
            var textPos2 = data1.cell;
            pdf.text(score_ED_TOP2.toString(), textPos2.x,  textPos2.y+5);
          }
          //TOP3 ED
          if (data1.row.index === 2 && data1.column.index === 0 && data1.cell.section === 'body') {
            var textPos3 = data1.cell;
            pdf.text(score_ED_TOP3.toString(), textPos3.x,  textPos3.y+5);
          }
          //---------------------------------------------------------------------------------//

          //---------------------------------------------------------------------------------//
          // column 1: Album Name
          //TOP1 ED
          if (data1.row.index === 0 && data1.column.index === 1 && data1.cell.section === 'body') {
            var textPos1 = data1.cell;
            pdf.text(album_ED_TOP1.toString(), textPos1.x,  textPos1.y+5);
          }
          //TOP2 ED
          if (data1.row.index === 1 && data1.column.index === 1 && data1.cell.section === 'body') {
            var textPos2 = data1.cell;
            pdf.text(album_ED_TOP2.toString(), textPos2.x,  textPos2.y+5);
          }
          //TOP3 ED
          if (data1.row.index === 2 && data1.column.index === 1 && data1.cell.section === 'body') {
            var textPos3 = data1.cell;
            pdf.text(album_ED_TOP3.toString(), textPos3.x,  textPos3.y+5);
          }
          //---------------------------------------------------------------------------------//

          //---------------------------------------------------------------------------------//
          // column 2: Artist name
          //TOP1 ED
          if (data1.row.index === 0 && data1.column.index === 2 && data1.cell.section === 'body') {
              var textPos1 = data1.cell;
              pdf.text(artist_ED_TOP1.toString(), textPos1.x,  textPos1.y+5);
          }
          //TOP1 ED
          if (data1.row.index == 1 && data1.column.index === 2 && data1.cell.section === 'body') {
              var textPos2 = data1.cell;
              pdf.text(artist_ED_TOP2.toString(), textPos2.x,  textPos2.y+5);
          }
          //TOP1 ED
          if (data1.row.index == 2 && data1.column.index === 2 && data1.cell.section === 'body') {
            var textPos3 = data1.cell;
            pdf.text(artist_ED_TOP3.toString(), textPos3.x,  textPos3.y+5);
          }
          //----------------------------------------------------------------------------------//

          //----------------------------------------------------------------------------------//
          // column 3: Ranking
          //TOP1 ED
          if (data1.row.index == 0 && data1.column.index === 3 && data1.cell.section === 'body') {
            var textPos1 = data1.cell;
            pdf.text(ranking_ED_TOP1.toString(), textPos1.x,  textPos1.y+5);
          }
          //TOP1 ED
          if (data1.row.index == 1 && data1.column.index === 3 && data1.cell.section === 'body') {
            var textPos2 = data1.cell;
            pdf.text(ranking_ED_TOP2.toString(), textPos2.x,  textPos2.y+5);
          }
          //TOP1 ED
          if (data1.row.index == 2 && data1.column.index === 3 && data1.cell.section === 'body') {
            var textPos3 = data1.cell;
            pdf.text(ranking_ED_TOP3.toString(), textPos3.x,  textPos3.y+5);
          }
          //----------------------------------------------------------------------------------//

          //----------------------------------------------------------------------------------//
          // column 4: Genre
          //TOP1 ED
          if (data1.row.index == 0 && data1.column.index === 4 && data1.cell.section === 'body') {
            var textPos1 = data1.cell;
            pdf.text(genre_ED_TOP1.toString(), textPos1.x,  textPos1.y+5);
          }
          //TOP1 ED
          if (data1.row.index == 1 && data1.column.index === 4 && data1.cell.section === 'body') {
            var textPos2 = data1.cell;
            pdf.text(genre_ED_TOP2.toString(), textPos2.x,  textPos2.y+5);
          }
          //TOP1 ED
          if (data1.row.index == 2 && data1.column.index === 4 && data1.cell.section === 'body') {
            var textPos3 = data1.cell;
            pdf.text(genre_ED_TOP3.toString(), textPos3.x,  textPos3.y+5);
          }
          //----------------------------------------------------------------------------------//

          //----------------------------------------------------------------------------------//
          // column 5: Emotion
          //TOP1 ED
          if (data1.row.index == 0 && data1.column.index === 5 && data1.cell.section === 'body') {
            var textPos1 = data1.cell;
            pdf.text(emotion_ED_TOP1.toString(), textPos1.x,  textPos1.y+5);
          }
          //TOP1 ED
          if (data1.row.index == 1 && data1.column.index === 5 && data1.cell.section === 'body') {
            var textPos2 = data1.cell;
            pdf.text(emotion_ED_TOP2.toString(), textPos2.x,  textPos2.y+5);
          }
          //TOP1 ED
          if (data1.row.index == 2 && data1.column.index === 5 && data1.cell.section === 'body') {
            var textPos3 = data1.cell;
            pdf.text(emotion_ED_TOP3.toString(), textPos3.x,  textPos3.y+5);
          }
          //----------------------------------------------------------------------------------//

          //----------------------------------------------------------------------------------//
          // column 6: image thumbnails
          // TOP1
          if (data1.row.index === 0 && data1.column.index === 6 && data1.cell.section === 'body') {
            var dim1 = data1.cell.height - data1.cell.padding('vertical');
            var textPos1 = data1.cell;
            pdf.addImage(image_ED_TOP1, textPos1.x-5,  textPos1.y, 1.5*dim1, 1.5*dim1);
          }
          //TOP2
          if (data1.row.index === 1 && data1.column.index === 6 && data1.cell.section === 'body') {
            var dim2 = data1.cell.height - data1.cell.padding('vertical');
            var textPos2 = data1.cell;
            pdf.addImage(image_ED_TOP2, textPos2.x-5,  textPos2.y, 1.5*dim2, 1.5*dim2);
          }
          //TOP3
          if (data1.row.index === 2 && data1.column.index === 6 && data1.cell.section === 'body') {
            var dim3 = data1.cell.height - data1.cell.padding('vertical');
            var textPos3 = data1.cell;
            pdf.addImage(image_ED_TOP3, textPos3.x-5,  textPos3.y, 1.5*dim3, 1.5*dim3);
          }
        }

      });  //end ED pdf table

      //table for displaying top3 MD recommendations
      pdf.autoTable({

        html: '#mytable2',
        bodyStyles: {minCellHeight: 15, minCellWidth: 20},
        startY: pdf.lastAutoTable.finalY + 20,
        columnStyles: {3: { halign: "left"}, 5: { halign: "center"}},
        //theme: 'grid',
        tableWidth: 'auto',
        cellWidth: 'auto',
        tableLineWidth: 'auto',
        margin: {
          right: 13,
          bottom: 20
        },
        styles: {
            font: 'helvetica',
            fontSize: 8,
            //overflow: 'linebreak'
        },
        didDrawCell: function(data2) {
          //---------------------------------------------------------------------------------//
          // column 0: Score
          //TOP1 MD
          if (data2.row.index === 0 && data2.column.index === 0 && data2.cell.section === 'body') {
            var textPos1 = data2.cell;
            pdf.text(score_MD_TOP1.toString(), textPos1.x,  textPos1.y+5);
          }
          //TOP2 MD
          if (data2.row.index === 1 && data2.column.index === 0 && data2.cell.section === 'body') {
            var textPos2 = data2.cell;
            pdf.text(score_MD_TOP2.toString(), textPos2.x,  textPos2.y+5);
          }
          //TOP3 MD
          if (data2.row.index === 2 && data2.column.index === 0 && data2.cell.section === 'body') {
            var textPos3 = data2.cell;
            pdf.text(score_MD_TOP3.toString(), textPos3.x,  textPos3.y+5);
          }
          //---------------------------------------------------------------------------------//

          //---------------------------------------------------------------------------------//
          // column 1: Album Name
          //TOP1 MD
          if (data2.row.index === 0 && data2.column.index === 1 && data2.cell.section === 'body') {
            var textPos1 = data2.cell;
            pdf.text(album_MD_TOP1.toString(), textPos1.x,  textPos1.y+5);
          }
          //TOP2 ED
          if (data2.row.index === 1 && data2.column.index === 1 && data2.cell.section === 'body') {
            var textPos2 = data2.cell;
            pdf.text(album_MD_TOP2.toString(), textPos2.x,  textPos2.y+5);
          }
          //TOP3 ED
          if (data2.row.index === 2 && data2.column.index === 1 && data2.cell.section === 'body') {
            var textPos3 = data2.cell;
            pdf.text(album_MD_TOP3.toString(), textPos3.x,  textPos3.y+5);
          }
          //---------------------------------------------------------------------------------//

          //---------------------------------------------------------------------------------//
          // column 2: Artist name
          //TOP1 MD
          if (data2.row.index === 0 && data2.column.index === 2 && data2.cell.section === 'body') {
              var textPos1 = data2.cell;
              pdf.text(artist_MD_TOP1.toString(), textPos1.x,  textPos1.y+5);
          }
          //TOP1 MD
          if (data2.row.index == 1 && data2.column.index === 2 && data2.cell.section === 'body') {
              var textPos2 = data2.cell;
              pdf.text(artist_MD_TOP2.toString(), textPos2.x,  textPos2.y+5);
          }
          //TOP1 MD
          if (data2.row.index == 2 && data2.column.index === 2 && data2.cell.section === 'body') {
            var textPos3 = data2.cell;
            pdf.text(artist_MD_TOP3.toString(), textPos3.x,  textPos3.y+5);
          }
          //----------------------------------------------------------------------------------//

          //----------------------------------------------------------------------------------//
          // column 3: Ranking
          //TOP1 MD
          if (data2.row.index == 0 && data2.column.index === 3 && data2.cell.section === 'body') {
            var textPos1 = data2.cell;
            pdf.text(ranking_MD_TOP1.toString(), textPos1.x,  textPos1.y+5);
          }
          //TOP1 MD
          if (data2.row.index == 1 && data2.column.index === 3 && data2.cell.section === 'body') {
            var textPos2 = data2.cell;
            pdf.text(ranking_MD_TOP2.toString(), textPos2.x,  textPos2.y+5);
          }
          //TOP1 MD
          if (data2.row.index == 2 && data2.column.index === 3 && data2.cell.section === 'body') {
            var textPos3 = data2.cell;
            pdf.text(ranking_MD_TOP3.toString(), textPos3.x,  textPos3.y+5);
          }
          //----------------------------------------------------------------------------------//

          //----------------------------------------------------------------------------------//
          // column 4: Genre
          //TOP1 MD
          if (data2.row.index == 0 && data2.column.index === 4 && data2.cell.section === 'body') {
            var textPos1 = data2.cell;
            pdf.text(genre_MD_TOP1.toString(), textPos1.x,  textPos1.y+5);
          }
          //TOP1 MD
          if (data2.row.index == 1 && data2.column.index === 4 && data2.cell.section === 'body') {
            var textPos2 = data2.cell;
            pdf.text(genre_MD_TOP2.toString(), textPos2.x,  textPos2.y+5);
          }
          //TOP1 MD
          if (data2.row.index == 2 && data2.column.index === 4 && data2.cell.section === 'body') {
            var textPos3 = data2.cell;
            pdf.text(genre_MD_TOP3.toString(), textPos3.x,  textPos3.y+5);
          }
          //----------------------------------------------------------------------------------//

          //----------------------------------------------------------------------------------//
          // column 5: Emotion
          //TOP1 MD
          if (data2.row.index == 0 && data2.column.index === 5 && data2.cell.section === 'body') {
            var textPos1 = data2.cell;
            pdf.text(emotion_MD_TOP1.toString(), textPos1.x,  textPos1.y+5);
          }
          //TOP1 MD
          if (data2.row.index == 1 && data2.column.index === 5 && data2.cell.section === 'body') {
            var textPos2 = data2.cell;
            pdf.text(emotion_MD_TOP2.toString(), textPos2.x,  textPos2.y+5);
          }
          //TOP1 MD
          if (data2.row.index == 2 && data2.column.index === 5 && data2.cell.section === 'body') {
            var textPos3 = data2.cell;
            pdf.text(emotion_MD_TOP3.toString(), textPos3.x,  textPos3.y+5);
          }
          //----------------------------------------------------------------------------------//

          //----------------------------------------------------------------------------------//
          // column 6: image thumbnails
          // TOP1 MD
          if (data2.row.index === 0 && data2.column.index === 6 && data2.cell.section === 'body') {
            var dim1 = data2.cell.height - data2.cell.padding('vertical');
            var textPos1 = data2.cell;
            pdf.addImage(image_MD_TOP1, textPos1.x-5,  textPos1.y, 1.5*dim1, 1.5*dim1);
          }
          //TOP2 MD
          if (data2.row.index === 1 && data2.column.index === 6 && data2.cell.section === 'body') {
            var dim2 = data2.cell.height - data2.cell.padding('vertical');
            var textPos2 = data2.cell;
            pdf.addImage(image_MD_TOP2, textPos2.x-5,  textPos2.y, 1.5*dim2, 1.5*dim2);
          }
          //TOP3 MD
          if (data2.row.index === 2 && data2.column.index === 6 && data2.cell.section === 'body') {
            var dim3 = data2.cell.height - data2.cell.padding('vertical');
            var textPos3 = data2.cell;
            pdf.addImage(image_MD_TOP3, textPos3.x-5,  textPos3.y, 1.5*dim3, 1.5*dim3);
          }
        }

      }); //end MD pdf table

    //table for displaying top3 RBF recommendations
    pdf.autoTable({

      html: '#mytable3',
      bodyStyles: {minCellHeight: 15, minCellWidth: 20},
      startY: pdf.lastAutoTable.finalY + 20,
      columnStyles: {3: { halign: "left"}, 5: { halign: "center"}},
      //theme: 'grid',
      tableWidth: 'auto',
      cellWidth: 'auto',
      tableLineWidth: 'auto',
      margin: {
        right: 13,
        bottom: 20
      },
      styles: {
          font: 'helvetica',
          fontSize: 8,
          //overflow: 'linebreak'
      },
      didDrawCell: function(data3) {
        //---------------------------------------------------------------------------------//
        // column 0: Score
        //TOP1 MD
        if (data3.row.index === 0 && data3.column.index === 0 && data3.cell.section === 'body') {
          var textPos1 = data3.cell;
          pdf.text(score_RBF_TOP1.toString(), textPos1.x,  textPos1.y+5);
        }
        //TOP2 MD
        if (data3.row.index === 1 && data3.column.index === 0 && data3.cell.section === 'body') {
          var textPos2 = data3.cell;
          pdf.text(score_RBF_TOP2.toString(), textPos2.x,  textPos2.y+5);
        }
        //TOP3 MD
        if (data3.row.index === 2 && data3.column.index === 0 && data3.cell.section === 'body') {
          var textPos3 = data3.cell;
          pdf.text(score_RBF_TOP3.toString(), textPos3.x,  textPos3.y+5);
        }
        //---------------------------------------------------------------------------------//

        //---------------------------------------------------------------------------------//
        // column 1: Album Name
        //TOP1 MD
        if (data3.row.index === 0 && data3.column.index === 1 && data3.cell.section === 'body') {
          var textPos1 = data3.cell;
          pdf.text(album_RBF_TOP1.toString(), textPos1.x,  textPos1.y+5);
        }
        //TOP2 ED
        if (data3.row.index === 1 && data3.column.index === 1 && data3.cell.section === 'body') {
          var textPos2 = data3.cell;
          pdf.text(album_RBF_TOP2.toString(), textPos2.x,  textPos2.y+5);
        }
        //TOP3 ED
        if (data3.row.index === 2 && data3.column.index === 1 && data3.cell.section === 'body') {
          var textPos3 = data3.cell;
          pdf.text(album_RBF_TOP3.toString(), textPos3.x,  textPos3.y+5);
        }
        //---------------------------------------------------------------------------------//

        //---------------------------------------------------------------------------------//
        // column 2: Artist name
        //TOP1 MD
        if (data3.row.index === 0 && data3.column.index === 2 && data3.cell.section === 'body') {
            var textPos1 = data3.cell;
            pdf.text(artist_RBF_TOP1.toString(), textPos1.x,  textPos1.y+5);
        }
        //TOP1 MD
        if (data3.row.index == 1 && data3.column.index === 2 && data3.cell.section === 'body') {
            var textPos2 = data3.cell;
            pdf.text(artist_RBF_TOP2.toString(), textPos2.x,  textPos2.y+5);
        }
        //TOP1 MD
        if (data3.row.index == 2 && data3.column.index === 2 && data3.cell.section === 'body') {
          var textPos3 = data3.cell;
          pdf.text(artist_RBF_TOP3.toString(), textPos3.x,  textPos3.y+5);
        }
        //----------------------------------------------------------------------------------//

        //----------------------------------------------------------------------------------//
        // column 3: Ranking
        //TOP1 MD
        if (data3.row.index == 0 && data3.column.index === 3 && data3.cell.section === 'body') {
          var textPos1 = data3.cell;
          pdf.text(ranking_RBF_TOP1.toString(), textPos1.x,  textPos1.y+5);
        }
        //TOP1 MD
        if (data3.row.index == 1 && data3.column.index === 3 && data3.cell.section === 'body') {
          var textPos2 = data3.cell;
          pdf.text(ranking_RBF_TOP2.toString(), textPos2.x,  textPos2.y+5);
        }
        //TOP1 MD
        if (data3.row.index == 2 && data3.column.index === 3 && data3.cell.section === 'body') {
          var textPos3 = data3.cell;
          pdf.text(ranking_RBF_TOP3.toString(), textPos3.x,  textPos3.y+5);
        }
        //----------------------------------------------------------------------------------//

        //----------------------------------------------------------------------------------//
        // column 4: Genre
        //TOP1 MD
        if (data3.row.index == 0 && data3.column.index === 4 && data3.cell.section === 'body') {
          var textPos1 = data3.cell;
          pdf.text(genre_RBF_TOP1.toString(), textPos1.x,  textPos1.y+5);
        }
        //TOP1 MD
        if (data3.row.index == 1 && data3.column.index === 4 && data3.cell.section === 'body') {
          var textPos2 = data3.cell;
          pdf.text(genre_RBF_TOP2.toString(), textPos2.x,  textPos2.y+5);
        }
        //TOP1 MD
        if (data3.row.index == 2 && data3.column.index === 4 && data3.cell.section === 'body') {
          var textPos3 = data3.cell;
          pdf.text(genre_RBF_TOP3.toString(), textPos3.x,  textPos3.y+5);
        }
        //----------------------------------------------------------------------------------//

        //----------------------------------------------------------------------------------//
        // column 5: Emotion
        //TOP1 MD
        if (data3.row.index == 0 && data3.column.index === 5 && data3.cell.section === 'body') {
          var textPos1 = data3.cell;
          pdf.text(emotion_RBF_TOP1.toString(), textPos1.x,  textPos1.y+5);
        }
        //TOP1 MD
        if (data3.row.index == 1 && data3.column.index === 5 && data3.cell.section === 'body') {
          var textPos2 = data3.cell;
          pdf.text(emotion_RBF_TOP2.toString(), textPos2.x,  textPos2.y+5);
        }
        //TOP1 MD
        if (data3.row.index == 2 && data3.column.index === 5 && data3.cell.section === 'body') {
          var textPos3 = data3.cell;
          pdf.text(emotion_RBF_TOP3.toString(), textPos3.x,  textPos3.y+5);
        }
        //----------------------------------------------------------------------------------//

        //----------------------------------------------------------------------------------//
        // column 6: image thumbnails
        // TOP1 MD
        if (data3.row.index === 0 && data3.column.index === 6 && data3.cell.section === 'body') {
          var dim1 = data3.cell.height - data3.cell.padding('vertical');
          var textPos1 = data3.cell;
          pdf.addImage(image_RBF_TOP1, textPos1.x-5,  textPos1.y, 1.5*dim1, 1.5*dim1);
        }
        //TOP2 MD
        if (data3.row.index === 1 && data3.column.index === 6 && data3.cell.section === 'body') {
          var dim2 = data3.cell.height - data3.cell.padding('vertical');
          var textPos2 = data3.cell;
          pdf.addImage(image_RBF_TOP2, textPos2.x-5,  textPos2.y, 1.5*dim2, 1.5*dim2);
        }
        //TOP3 MD
        if (data3.row.index === 2 && data3.column.index === 6 && data3.cell.section === 'body') {
          var dim3 = data3.cell.height - data3.cell.padding('vertical');
          var textPos3 = data3.cell;
          pdf.addImage(image_RBF_TOP3, textPos3.x-5,  textPos3.y, 1.5*dim3, 1.5*dim3);
        }
      }

    }); //end MD pdf table



      pdf.save("report.pdf");


}); //end exportButton.addEventListener

//----------------------------------------------------------------------------//
//----------------------------------------------------------------------------//
