$(document).ready(function () {
    // Init
    $('.image-section').hide();
    $('.loader').hide();
    $('#result').hide();

    // Upload Preview
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#imagePreview').css('background-image', 'url(' + e.target.result + ')');
                $('#imagePreview').hide();
                $('#imagePreview').fadeIn(650);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
    $("#imageUpload").change(function () {
        $('.image-section').show();
        $('#btn-predict').show();
        $('#result').text('');
        $('#result').hide();
        readURL(this);
    });

    // Predict
    $('#btn-predict').click(function () {
        var form_data = new FormData($('#upload-file')[0]);

        // Show loading animation
        $(this).hide();
        $('.loader').show();

        // Make prediction by calling api /predict
        $.ajax({
            type: 'POST',
            url: '/plant_model/predict',
            data: form_data,
            contentType: false,
            cache: false,
            processData: false,
            async: true,
            success: function (data) {
                // Get and display the result
                $('.loader').hide();
                $('#result').fadeIn(600);
                $('#result').text(' Result:  ' + data);
                
                // $('#solution-div').text("SOLUTION:\n")
                if(data === 'Blight'){
                  //  alert('Disease is Sigatoka');
                     $('#solution-div').text("ABOUT:\n");
                     $('#solution-div').append("<br/>");
                     $('#solution-div').append("\nCorn leaf blight is one of the most frustrating problems for commercial growers. <br/> Even in backyard plantings, this can be a significant problem, especially when the external environment is favorable for the disease. <br/> To prevent frustration, it is important to know how to get rid of corn leaf blight, especially in a manner that is natural and safe. <br/> As the name implies, corn is the main host for this disease, although there are specific cultivars of corn that are more susceptible compared to others. <br/>");
                     $('#solution-div').append("<br/>");
                     $('#solution-div').append("SYMPTOMS:\n");
                     $('#solution-div').append("<br/>");
                     $('#solution-div').append("\nWith the name of the disease, it is obvious that the leaves will show the most obvious symptoms. <br/> Lesions will appear on the leaves, with size ranging from three to 15 centimeters. <br/> They are green or gray in color. To add, because it inhibits photosynthetic activity, the leaves can turn dry. <br/> The host plants can also suffer from loss of leaves. <br/> While the fungus attacks the leaves, other parts of the plant will also show visible signs of damage, especially the cob and ear of the corn. It will rot, which is primarily because of the inability to receive the nutrients that are critical for its survival.<br/>");
                     $('#solution-div').append("<br/>");
                     $('#solution-div').append("SOLUTION:\n");
                     $('#solution-div').append("<br/>");
                     $('#solution-div').append("\nGrowing plants that can resist this disease is one of the best ways to spare yourself from headache. There are plants with a moderate resistance, which will delay the onset of the disease and will give you time to treat it before it spreads. In some cases, when you purchase seeds, the label will indicate its resistance to diseases. It is also good to plant non-host crops to prevent frustration from the disease. <br/> The pathogens carrying corn leaf blights may overwinter, which is why crop rotation will also offer a promising solution. This will prevent the possibility that the fungi in the corn residues from the previous season will transfer to new plantings. One to two years of crop rotation is a good way to manage the infestation. <br/> Tillage is another thing that will help, which is especially effective as a preventive measure. This will clear the surface of corn debris that can be potential sources of disease. In line with this, sanitation of the garden will also be a big help. <br/> Monitoring is also important to control corn leaf blights. With this, you need to detect the problem as early as possible. Watch out for the symptoms of the disease. If you are sure that it is corn leaf blight, deal with the problem as soon as possible. Uprooting will help to prevent the disease from spreading to the other plants. <br/> See to it as well that the condition of the soil is at its best. This will make the plants healthier and will increase their defense against common diseases. To add, keep it dry by having proper irrigation. If the soil is moist all the time, it will be more susceptible to the spread of the disease. <br/>");
                     $('#solution-div').append("<br/>");
                     $('#solution-div').append("<br/>");
                     $('#solution-div').append("REFERENCE LINK: https://bit.ly/3xNmDM1 ");
                     //$('#solution-div').attr('style','color:red;');
                }else if(data === 'Common Rust'){
                     $('#solution-div').text("ABOUT:\n");
                     $('#solution-div').append("<br/>");
                     $('#solution-div').append("\nCommon rust is caused by the fungus Puccinia sorghi. Late occurring infections have limited impact on yield. <br/> The fungus overwinters on plants in southern states and airborne spores are wind-blown to northern states during the growing season. <br/> Disease development is favored by cool, moist weather (60 – 70◦ F).<br/>");
                     $('#solution-div').append("<br/>");
                     $('#solution-div').append("SYMPTOMS:\n");
                     $('#solution-div').append("<br/>");
                     $('#solution-div').append("\nSymptoms of common rust often appear after silking. <br/> Small, round to elongate brown pustules form on both leaf surfaces and other above ground parts of the plant. <br/> As the pustules mature they become brown to black. <br/> If disease is severe, the leaves may yellow and die early.<br/>");
                     $('#solution-div').append("<br/>");
                     $('#solution-div').append("SOLUTION:\n");
                     $('#solution-div').append("<br/>");
                     $('#solution-div').append("Rusts are plant diseases caused by pathogenic fungi of the order Pucciniales.<br/> Despite putting in place disease preventive measures, rust will constantly develop if conditions are favorable. <br/> In that regard, the best way to treat leaf rust disease in your fam is by proper and timely spraying of fungicides. <br/> The use of resistant hybrids is the primary management strategy for the control of common rust. <br/> Timely planting of corn early during the growing season may help to avoid high inoculum levels or environmental conditions that would promote disease development. <br/>");
                     $('#solution-div').append("<br/>");
                     $('#solution-div').append("<br/>");
                     $('#solution-div').append("REFERENCE LINK: https://bit.ly/3CPbNsq ");
                     //$('#solution-div').attr('style','color:green;');
                }else if(data === 'Gray Leaf Spot'){
                     $('#solution-div').text("ABOUT:\n");
                     $('#solution-div').append("<br/>");
                     $('#solution-div').append("\nGray leaf spot (GLS) is a common fungal disease in the United States caused by the pathogen Cercospora zeae-maydis in corn. <br/> Disease development is favored by warm temperatures, 80°F or 27 °C; and high humidity, relative humidity of 90% or higher for 12 hours or more. <br/> Cercospora zeae-maydis overwinters in corn residue, allowing inoculum to build up from year to year in fields. <br/> Cropping systems with reduced- or no-till and/or continuous corn are at higher risk for gray leaf spot outbreaks. <br/> Conducive weather conditions encourage the rapid spread of disease near the end of summer and early fall, when corn plants allocate more resources to grainfill.<br/>");
                     $('#solution-div').append("<br/>");
                     $('#solution-div').append("SYMPTOMS:\n");
                     $('#solution-div').append("<br/>");
                     $('#solution-div').append("\nEarly Symptoms <br/> Gray leaf spot lesions begin as small necrotic pinpoints with chlorotic halos, these are more visible when leaves are backlit. <br/> Coloration of initial lesions can range from tan to brown before sporulation begins. <br/> Because early lesions are ambiguous, they are easily confused with other foliar diseases such as anthracnose leaf blight, eyespot, or common rust. <br/><br/>Later Symptoms <br/> As infection progresses, lesions begin to take on a more distinct shape. <br/> Lesion expansion is limited by parallel leaf veins, resulting in the blocky shaped “spots”. <br/> As sporulation commences, the lesions take on a more gray coloration. <br/> Entire leaves can be killed when weather conditions are favorable, and rapid disease progression causes lesions to merge. <br/>");
                     $('#solution-div').append("<br/>");
                     $('#solution-div').append("SOLUTION:\n");
                     $('#solution-div').append("<br/>");
                     $('#solution-div').append("Apply water early in the morning only when water is needed. \nAvoid evening waterings which keep the leaf surface wet for long periods. Catch and remove grass clippings where gray leaf spot is a problem. \nSeveral fungicides (See the section Chemical Controls for Turfgrass Diseases) are recommended for gray leaf spot control. <br/> production practices such as tillage and crop rotation that reduce the amount corn residue on the surface will decrease the amount of primary inoculum. Planting hybrids with a high level of genetic resistance can help reduce the risk of yield loss due to gray leaf spot infection. <br/> During the growing season, foliar fungicides can be used to manage gray leaf spot outbreaks. <br/>");
                     $('#solution-div').append("<br/>");
                     $('#solution-div').append("<br/>");
                     $('#solution-div').append("REFERENCE LINK: https://bit.ly/3yKkUIM ");
                     //$('#solution-div').attr('style','color:yellow;');
                }else if(data === 'Healthy'){
                     $('#solution-div').text("What are Corn Plants:\n");
                     $('#solution-div').append("<br/>");
                     $('#solution-div').append("\nThe corn plant (Dracaena fragrans) is a tropical African evergreen tree popular in Europe as an indoor plant since the mid-1800s and in the U.S. since the early 20th century. <br/> They grow fairly slowly from thick canes or stems that produce long, narrow leaves like stalks of corn, growing upward. <br/> This growth habit also makes them look a lot like palm trees, which is why they’re sometimes called “false palms.”<br/>");
                     $('#solution-div').append("<br/>");
                     $('#solution-div').append("How to Take Care of Corn Plants:\n");
                     $('#solution-div').append("<br/>");
                     $('#solution-div').append("\nHome gardeners usually grow corn plants as large potted plants indoors since they are tropical plants that require climate-controlled conditions. <br/> Corn plants do best in bright indoor locations protected against direct sunlight, drafts, and air conditioning and heating vents. <br/> These plants also prefer a highly humidity environment. <br/><br/> Light <br/> The ideal indoor location for this plant is near a window with filtered sunlight. Too little light will result in the leaves losing their color variegation and might stunt the plant's growth. Exposure to direct sun can burn the plant's leaves and cause them to wilt. Outdoors, the plant does best in a shadier spot. <br/><br/> Soil <br/> A loose, loamy potting soil mix is the best option for growing corn plants. Make sure the soil has good drainage because its roots don't do well in standing water. <br/><br/> Water <br/> Keep the soil evenly moist but not soggy during the growing season (spring through fall). Reduce watering in the late fall to winter. However, never let the soil completely dry out. Soil that is too wet or too dry will lead to plant health issues. <br/><br/> Temperature and Humidity <br/> Corn plants do best in temperatures from 60 to 75 degrees Fahrenheit. Avoid exposing them to temperatures in the 50s. If you temporarily moved your corn plants outdoors for the summer, make sure to bring them indoors before temperatures reach this point. <br/> Maintain humidity levels between 40 percent and 50 percent, which mimics the plant's native environment. To raise the plant's humidity, use a humidifier or place the pot on a tray of water and pebbles. Do not let the bottom of the pot touch the water. You can also mist the leaves regularly.<br/><br/> Fertilizer <br/> Corn plants prefer organically rich soil. Use a balanced liquid fertilizer every other month throughout the growing season and feed sparingly, if at all, over the winter. <br/>");
                     $('#solution-div').append("<br/>");
                     $('#solution-div').append("How to Grow Corn Plants:\n");
                     $('#solution-div').append("<br/>");
                     $('#solution-div').append("\nTo enhance germination, soak the seeds in room-temperature water for three to five days. <br/> Sprinkle two to three seeds in a small pot of moistened seed starting mix. Cover the seeds lightly with the seed starting mix. <br/> Place the pot on a warm, germinating mat and cover with clear plastic wrap. <br/> Maintain soil temperature between 68 and 80 F under a grow light or bright, indirect sunlight. <br/> The soil should remain slightly moist. If the soil is too damp, the seeds can rot. <br/> Once you notice some growth (it can take as long as 4 to 6 weeks), remove the plastic. <br/> Transplant once the seedling develops two true leaves into a 3-inch pot using potting soil. <br/>");
                     $('#solution-div').append("<br/>");
                     $('#solution-div').append("<br/>");
                     $('#solution-div').append("REFERENCE LINK: https://bit.ly/3m3j16b ");
                     $('#solution-div').append("<br/>");
                     //$('#solution-div').attr('style','color:darkgrey;');
                }
                console.log('Success!');
            },
        });
    });

});
