// Call the dataTables jQuery plugin
$(document).ready(function() {

  $('#confirm-delete').on('show.bs.modal', function(e) {
    $(this).find('.btn-ok').attr('href', $(e.relatedTarget).data('href'));
});


var table1 = $('#DdataTable').DataTable( {

    columnDefs: [{
       "targets": [ 2,6,7,8,9,10,11,12 ],
       "visible": false,
       "searchable": false
},
{ "width": "22%", "targets":[1]},
{ "width": "5%", "targets":[0]},
{ "width": "13%", "targets":[14,4]},
{ "width": "16%", "targets":[13]}
],
    "ordering": false,
    "scrollY": 1000,
    "scrollX": true,
    "scroller": true,


     "ajax": {
    'url':baseURL +'careofList'
 },
dom: 'lBrtip',
buttons: [
   {
       extend: 'copy',
       exportOptions: {
           columns: [ 0, 1, 2, 3,4,5,6,7,8,9,10,11,12,13,14]
       }
   } , {
       extend: 'excelHtml5',
       exportOptions: {
           columns: [ 0, 1, 2, 3,4,5,6,7,8,9,10,11,12,13,14]
       }
   } ,
   {
       extend: 'print',
       exportOptions: {
           columns: [ 0, 1, 2, 3,4,5,6,7,8,9,10,11,12,13,14]
       }
   } ,
   {
       extend: 'pdfHtml5',
       orientation: 'landscape',
       exportOptions: {
           columns: [ 0, 1, 2, 3,4,5,6,7,8,9,10,11,12,13,14]
       }
   }
]

} );
// new $.fn.dataTable.FixedHeader(table1);

$('#careid').on( 'keyup', function () {
table1
.columns( 0 )
.search( this.value )
.draw();
} );
$('#name').on( 'keyup', function () {
table1
.columns( 1 )
.search( this.value )
.draw();
} );
$('#mobile').on( 'keyup', function () {

table1
.columns( 3 ).search(this.value)
.draw();
} );
$('#phone').on( 'keyup', function () {

table1
.columns( 2 ).search(this.value)
.draw();
} );

$('#email').on( 'keyup', function () {

table1
.columns( 4 ).search(this.value)
.draw();
} );

$('#rep').on( 'change', function () {
table1
.columns(13 ).search(this.value)
.draw();
} );





var table30 = $('#pdataTable').DataTable( {


    "ordering": false,

dom: 'rt',
"columns": [
    { "width": "80%" },
    { "width": "5%" },
    { "width": "5%" },
    { "width": "5%" },
    { "width": "5%" },
    { "width": "5%" }
  ]

} );

  var table2 = $('#CdataTable').DataTable( {

             columnDefs: [{
                "targets": [3,7,8,9,10],
                "visible": false,
                "searchable": false
  },

  { "width": "16%", "targets":[12]},



],
             "ordering": false,

              "ajax": {
             'url':baseURL +'clientList'
          },
        dom: 'lBrtip',
        buttons: [
            {
                extend: 'copy',
                exportOptions: {
                    columns: [ 0, 1, 2, 3,4,5,6,7,8,9,10,11]
                }
            } , {
                extend: 'excelHtml5',
                exportOptions: {
                    columns: [ 0, 1, 2, 3,4,5,6,7,8,9,10,11]
                }
            } ,
            {
                extend: 'print',
                exportOptions: {
                    columns: [ 0, 1, 2, 3,4,5,6,7,8,9,10,11]
                }
            } ,
            {
                extend: 'pdfHtml5',
                orientation: 'landscape',
                exportOptions: {
                    columns: [ 0, 1, 2, 3,4,5,6,7,8,9,10,11]
                }
            }
        ]

    } );
    $('#cid').on( 'keyup', function () {
    table2
        .columns( 0 )
        .search( this.value )
        .draw();
} );
    $('#cname').on( 'keyup', function () {
    table2
        .columns( 1 )
        .search( this.value )
        .draw();
} );

$('#careof').on( 'change', function () {
    table2
        .columns( 2 )
        .search( this.value )
        .draw();
} );

    $('#mobile').on( 'keyup', function () {

    table2
        .columns( 4 ).search(this.value)
        .draw();
} );
// $('#phone').on( 'keyup', function () {

//     table2
//         .columns( 3 ).search(this.value)
//         .draw();
// } );

$('#email').on( 'keyup', function () {

    table2
        .columns( 5 ).search(this.value)
        .draw();
} );

 $('#rep').on( 'change', function () {
    table2
        .columns( 11 ).search(this.value)
        .draw();
} );

var table3 = $('#RdataTable').DataTable( {

             columnDefs: [{
    "defaultContent": "-",
    "targets": "_all"
  }],
             "ordering": false,

        dom: 'lBrftip',
        buttons: [

        ]

    } );


    var table5 = $('#SdataTable').DataTable( {

        columnDefs: [{
"defaultContent": "-",
"targets": "_all"
}],
        "ordering": false,

   dom: 'lBrftip',
   buttons: [

   ]

} );
var table10 = $('#GdataTable').DataTable( {

    columnDefs: [{
"defaultContent": "-",
"targets": "_all"
}],
    "ordering": false,

dom: 'lBrftip',
buttons: [

]

} );
var table6 = $('#TdataTable').DataTable( {

    columnDefs: [{
"defaultContent": "-",
"targets": "_all"
}],
    "ordering": false,

dom: 'lBrftip',
buttons: [

]

} );

var table7 = $('#UdataTable').DataTable( {

    columnDefs: [{
"defaultContent": "-",
"targets": "_all"
}],
    "ordering": false,

dom: 'lBrftip',
buttons: [

]

} );


var table8 = $('#BdataTable').DataTable( {

    columnDefs: [{
"defaultContent": "-",
"targets": "_all"
}],
    "ordering": false,

dom: 'lBrftip',
buttons: [

]

} );

var table14 = $('#KdataTable').DataTable( {

    columnDefs: [{
"defaultContent": "-",
"targets": "_all"
}],
    "ordering": false,

dom: 'lBrftip',
buttons: [

]

} );

var table42 = $('#XdataTable').DataTable( {

    columnDefs: [{
"defaultContent": "-",
"targets": "_all"
}],
    "ordering": false,

dom: 'lBrftip',
buttons: [

]

} );

var table43 = $('#YdataTable').DataTable( {

    columnDefs: [{
"defaultContent": "-",
"targets": "_all"
}],
    "ordering": false,

dom: 'lBrftip',
buttons: [

]

} );

  var table4 = $('#PdataTable').DataTable( {
        responsive:true,

    columnDefs: [{

        "targets": [3,4,5,10,11,12,13,15,16,17,18,19,20,21,22,23,24,25,26],
        "visible": false,
        "searchable": false


},
{ "width": "18%", "targets":[27]}

],
                        "ordering": false,

              "ajax": {
             'url':baseURL +'policyList'
          },
        dom: 'lBrtip',
        buttons: [
            {
                extend: 'copy',
                exportOptions: {
                    columns: [ 0, 1, 2, 3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24 ]
                }
            } , {
                extend: 'excelHtml5',
                exportOptions: {
                    columns: [ 0, 1, 2, 3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24 ]
                }
            } ,
            {
                extend: 'print',
                exportOptions: {
                    columns: [ 0, 1, 2, 3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24 ]
                }
            } ,
            {
                extend: 'pdfHtml5',
                orientation: 'landscape',
                exportOptions: {
                    columns: [ 0, 1, 2, 3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24 ]
                }
            }
        ]

    } );




$('#inscompany').on( 'change', function () {
    table4
        .columns( 6 )
        .search( this.value )
        .draw();
} );
    $('#insname').on( 'change', function () {
    table4
        .columns( 7 )
        .search( this.value )
        .draw();
} );

$('#pno').on( 'keyup', function () {
    table4
        .columns( 2)
        .search( this.value )
        .draw();
});

 $('#careof').on( 'change', function () {
    table4
         .columns(8).search(this.value)
        .draw();

} );
    $('#mobile').on( 'keyup', function () {

    table4
        .columns(9).search(this.value)
        .draw();
} );


 $('#rep').on( 'change', function () {
    table4
        .columns(14 ).search(this.value)
        .draw();
} );






var table16 = $('#WdataTable').DataTable( {

    columnDefs: [{
        "targets": [],
        "visible": false,
        "searchable": false
}],
            "destroy":true,
             "ordering": false,

              "ajax": {
             'url':baseURL +'leadingList',
             'type': "POST",
             'data': function(d){
                 d.pfrom= $('#lfrom').val(),
                  d.pto=$('#lto').val()
             }
          },
        dom: 'lBrtip',
        buttons: [
            {
                extend: 'copy',
                exportOptions: {
                    columns: [ 0, 1, 2, 3,4,5,6,7 ]
                }
            } , {
                extend: 'excelHtml5',
                exportOptions: {
                    columns: [ 0, 1, 2, 3,4,5,6,7]
                }
            } ,
            {
                extend: 'print',
                exportOptions: {
                    columns: [ 0, 1, 2, 3,4,5,6,7]
                }
            } ,
            {
                extend: 'pdfHtml5',
                orientation: 'landscape',
                exportOptions: {
                    columns: [ 0, 1, 2, 3,4,5,6,7 ]
                }
            }
        ]

    } )
    $('#id').on( 'keyup', function () {
    table16
        .columns(0 )
        .search( this.value )
        .draw();
} );

$('#inscompany').on( 'change', function () {
    table16
        .columns( 1 )
        .search( this.value )
        .draw();
} );

$('#lfrom').on( 'change', function () {
    table16.ajax.reload();

    //table16.reload();
} );

$('#lto').on( 'change', function () {

    table16.ajax.reload();
    //table16.reload();
} );



var table12 = $('#IdataTable').DataTable( {

    columnDefs: [{
        "targets": [2,4,5,8,9,10,12,13,14],
        "visible": false,
        "searchable": false
}],
             "ordering": false,

              "ajax": {
             'url':baseURL +'claimsList'
          },
        dom: 'lBrtip',
        buttons: [
            {
                extend: 'copy',
                exportOptions: {
                    columns: [ 0, 1, 2, 3,4,5,6,7,8,9,10,11,12,13,14,15 ]
                }
            } , {
                extend: 'excelHtml5',
                exportOptions: {
                    columns: [ 0, 1, 2, 3,4,5,6,7,8,9,10,11,12,13,14,15]
                }
            } ,
            {
                extend: 'print',
                exportOptions: {
                    columns: [ 0, 1, 2, 3,4,5,6,7,8,9,10,11,12,13,14,15]
                }
            } ,
            {
                extend: 'pdfHtml5',
                orientation: 'landscape',
                exportOptions: {
                    columns: [ 0, 1, 2, 3,4,5,6,7,8,9,10,11,12,13,14,15]
                }
            }
        ]

    } );

$('#insname').on( 'change', function () {
    table12
        .columns( 1 )
        .search( this.value )
        .draw();
} );
    $('#careof').on( 'change', function () {
    table12
        .columns( 3 )
        .search( this.value )
        .draw();
} );



$('#cno').on( 'keyup', function () {

table12
    .columns(7).search(this.value)
    .draw();
} );




$('#pno').on( 'keyup', function () {
    table12
        .columns( 6)
        .search( this.value )
        .draw();

    } );



 $('#rep').on( 'change', function () {
    table12
        .columns(15 ).search(this.value)
        .draw();
} );
$('#status').on( 'change', function () {
    table12
        .columns( 11 )
        .search( this.value )
        .draw();
} );


var cid= $('#cid').val();
var table11= $('#HdataTable').DataTable( {

    "ordering": false,

     "ajax": {
    'url':baseURL +'clientdocsList',
    'type': "POST",
    'data': {
        "cid": cid
    }
 },
dom: 'lBrtip',
buttons: [
   {
       extend: 'copy',
       exportOptions: {
           columns: [ 0, 1, 2, 3]
       }
   } , {
       extend: 'excelHtml5',
       exportOptions: {
           columns: [ 0, 1, 2, 3]
       }
   } ,
   {
       extend: 'print',
       exportOptions: {
           columns: [ 0, 1, 2, 3]
       }
   } ,
   {
       extend: 'pdfHtml5',
       orientation: 'landscape',
       exportOptions: {
           columns: [ 0, 1, 2, 3,4,5,6,7,8,9 ]
       }
   }
]

} );

var pid= $('#pid').val();
var table13= $('#JdataTable').DataTable( {

    "ordering": false,

     "ajax": {
    'url':baseURL +'policydocsList',
    'type': "POST",
    'data': {
        "pid": pid
    }
 },
dom: 'lBrtip',
buttons: [
   {
       extend: 'copy',
       exportOptions: {
           columns: [ 0, 1, 2, 3]
       }
   } , {
       extend: 'excelHtml5',
       exportOptions: {
           columns: [ 0, 1, 2, 3]
       }
   } ,
   {
       extend: 'print',
       exportOptions: {
           columns: [ 0, 1, 2, 3]
       }
   } ,
   {
       extend: 'pdfHtml5',
       orientation: 'landscape',
       exportOptions: {
           columns: [ 0, 1, 2, 3]
       }
   }
]

} );

} );

$(document).ready(function() {

            $("#rpassword").change(function () {
            var password = $("#npassword").val();
            var confirmPassword = $("#rpassword").val();
            if (password != confirmPassword) {
                $("#rpassword").addClass("is-invalid");
                return false;
            }else{
                $("#rpassword").removeClass("is-invalid");
                $("#rpassword").addClass("is-valid");
                return false;
            }
        });

        $("#npassword").change(function () {
            var password = $("#cpassword").val();
            var confirmPassword = $("#npassword").val();
            if (password == confirmPassword) {
                $("#npassword").addClass("is-invalid");
                return false;
            }else{
                $("#npassword").removeClass("is-invalid");
                $("#npassword").addClass("is-valid");
                return false;
            }
        });



       });

       $("#pfrom").on("change", function() {
        var selectedDate = new Date($(this).val());
        selectedDate.setFullYear(selectedDate.getFullYear() + 1);
        selectedDate.setDate(selectedDate.getDate() - 1);
        $("#pto").val(selectedDate.toISOString().substr(0, 10));
      });

      $("#indate").on("change", function() {
        var selectedDate = new Date($(this).val());
        selectedDate.setMonth(selectedDate.getMonth() + 1);
        $("#edate").val(selectedDate.toISOString().substr(0, 10));
      });

      $("#stype").change(function() {
        if ($(this).val() == "1") {
         $("#odprem").show();

          $("#tpprem").show();
          $("#mk").show();
          $("#md").show();
          $("#mak").show();
          $("#mod").show();
          $("#vno").show();
          $("#no").show();
          $("#od").show();
          $("#tp").show();
          $("#nmt").hide();
          $("#nmname").hide();
          $('#prem_wotax').prop('readonly',true);
          $("#prem_wotax").val("").trigger('change');
          $("#stax").val("18").trigger('change');
          $("#scharge").val("0").trigger('change');

        } else {
          $("#odprem").hide();
          $("#odprem").val("").trigger('change');
          $("#tpprem").hide();
          $("#tpprem").val("").trigger('change');
          $("#mk").hide();
          $("#md").hide();
        //   alert($("#make").val());
          $("#make").val("").trigger('change');
          $("#mak").hide();
          $("#model").val("").trigger('change');
          $("#mod").hide();
          $("#vno").hide();
          $("#vno").val("").trigger('change');
          $("#no").hide();
          $("#od").hide();
          $("#tp").hide();
          $("#nmt").show();
          $("#nmname").show();
          $('#prem_wotax').prop('readonly',false);
          $("#prem_wotax").val("").trigger('change');
          $("#stax").val("18").trigger('change');
          $("#scharge").val("0").trigger('change');

        }
      });
      $("#make").change(function() {
        if ($(this).val() == "Others") {
          $("#others").show();

        } else {
          $("#others").hide();

        }
      });

    //   var odprem= parseInt($("#odprem").val());
    //   var tpprem= parseInt($("#tpprem").val());


      $('#stax').on('keyup', function() {



        var stax = ($(this).val());

        var odprem= $("#odprem").val();
        var tpprem= $("#tpprem").val();
        var prem_wotax= $("#prem_wotax").val();

        var charge= $("#scharge").val();

        if(odprem=="" && tpprem==""){

            if(stax!=""){
                charge=0;
            }
        //    alert(charge);
            var result = parseFloat(prem_wotax) * parseFloat(stax)/100 ;

            $('#scharge').val(result);
            var tprem= parseFloat(prem_wotax) +parseFloat($('#scharge').val());
            $('#tprem').val(tprem).trigger('change');


        }else{
            if(!odprem){
                odprem=0;
            }
            if(!tpprem){
                tpprem=0;
            }

        var mprem=parseFloat(odprem)+parseFloat(tpprem);
        var result = mprem * parseFloat(stax)/100 ;
        $('#scharge').val(result);
        var tprem= parseFloat(mprem) + parseFloat($('#scharge').val());
        $('#tprem').val(tprem).trigger('change');


}

      });

      $('#prem_wotax').on('keyup', function() {
            //  if(odprem=="" && tpprem==""){

             var prem_wotax= ($(this).val());
              var stax= $("#stax").val();
              var charge= $("#scharge").val();

              if(!prem_wotax){
                prem_wotax=0;

            }

              var result =parseFloat(prem_wotax) *parseFloat(stax)/100 ;

                    $('#scharge').val(result);
        var tprem= parseFloat(prem_wotax) + parseFloat($('#scharge').val());
        $('#tprem').val(tprem).trigger('change');

      });


      $('#odprem').on('keyup', function() {

        var odprem= ($(this).val());
        var tpprem= parseInt($("#tpprem").val());

        if(!odprem){
            odprem=0;
        }
        if(!tpprem){
            tpprem=0;
        }
        var value=  parseFloat(odprem)+parseFloat(tpprem);
        var stax = parseFloat($("#stax").val());
        var result = value * stax/100;
        $('#scharge').val(result);

        var tprem= parseFloat(value) + parseFloat($('#scharge').val());
        $('#tprem').val(tprem);

      });

      $('#tpprem').on('keyup', function() {

        var odprem= parseInt($("#odprem").val());
        var tpprem= ($(this).val());
        if(!odprem){
            odprem=0;
        }
        if(!tpprem){
            tpprem=0;
        }
        var value=  parseFloat(odprem)+ parseFloat(tpprem);
        var stax = parseFloat($("#stax").val());
        var result = value * stax/100 ;
        $('#scharge').val(result);

        var tprem= parseFloat(value) + parseFloat($('#scharge').val());
        $('#tprem').val(tprem);
      });


 $(function() {
       $('#profile_form').submit(function(e) {

            var currentpassword= $("#cpassword").val()
            var password = $("#npassword").val();
            var confirmPassword = $("#rpassword").val();
            if (password != confirmPassword) {
                $("#rpassword").addClass("is-invalid");
                e.preventDefault();
                return false;
            }

            if (currentpassword == password) {
                $("#npassword").addClass("is-invalid");
                e.preventDefault();
                return false;
            }



     });

     var minDate, maxDate;

$.fn.dataTable.ext.search.push(
    function( settings, data, dataIndex ) {
        if ( settings.nTable.id !== 'EdataTable' ) {
            return true;
          }
        var startDate = minDate.val();
        var endDate = maxDate.val();
        var dat=data[6].split("-");

        var dateValue  = new Date( dat[2]+"-"+dat[1]+"-"+dat[0] );
        if ( startDate == "" && endDate == "" )
        {
            return true;
        }
        else if (startDate != null && endDate == "")
        {
            if(new Date(startDate) <= dateValue) {
                return true;
            }
        }
        else if ( startDate == "" && endDate != "")
        {
            if(dateValue <= new Date(endDate)) {
                return true;
            }
        }
        else if (startDate != null && endDate != null)
        {
            if(new Date(startDate) <= dateValue && dateValue <= new Date(endDate)) {
            return true;
            }
        }
        return false;
        }
);


minDate = $('#rfrom');
maxDate = $('#rto');




var table9 = $('#EdataTable').DataTable( {


    initComplete: function() { $('#EdataTable tbody').on('click','#semail',function(){
        var pid =$(this).data('pid');
        $(this).children().removeClass("fa-envelope");
        $(this).children().addClass("fa-spinner fa-pulse");
        var tid=$(this).children();
        var btn=$(this);
        if(pid !='')

        {

                          $.ajax({
                              url:baseURL +'send_renewalpolicy',
                              method:"post",
                              dataType: "JSON",
                              data:{pid:pid},
                              success:function(data)
                              {
                                    if(data.status=="true"){
                                        btn.removeClass("btn btn-info btn-sm");
                                        btn.addClass("btn btn-success btn-sm");

                                    }else{
                                        alert(data.message);

                                        btn.removeClass("btn btn-success btn-sm");
                                        btn.addClass("btn btn-danger btn-sm");

                                    }
                                      tid.removeClass("fa-spinner fa-pulse");
                                      tid.addClass("fa-envelope");


                                  },

                              error: function (jqXHR, textStatus, errorThrown) {
                        if (jqXHR.status == 500) {
                            alert('Internal error: ' + jqXHR.responseText);
                        } else {
                            alert(data);
                        }
                        }
                        });
        }
})},


    columnDefs: [{
        "targets": [1,2,4,5,12,16,17,18,19,20,21,22,23,24,25,26,27],
        "visible": false,
        "searchable": false
},
{ "width": "9%", "targets":[6] },
{ "width": "12%", "targets":[7] },

{ "width": "9%", "targets":[28] }
],

             "ordering": false,

              "ajax": {
             'url':baseURL +'renewalList'
          },

          "select":{
            style:'os'
          },
        "dom": 'lBrtip',
        "buttons": [
            {
                extend: 'copy',
                exportOptions: {
                    columns: [ 0, 1, 2, 3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25 ]
                }
            } , {
                extend: 'excelHtml5',
                exportOptions: {
                    columns: [ 0, 1, 2, 3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]
                }
            } ,
            {
                extend: 'print',
                exportOptions: {
                    columns: [ 0, 1, 2, 3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]
                }
            } ,
            {
                extend: 'pdfHtml5',
                orientation: 'landscape',
                exportOptions: {
                    columns: [ 0, 1, 2, 3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]
                }
            }
        ]

    } );


$('#aemail').click(function(){
    // alert(table9.rows('.selected').data().length + ' row(s) selected');

    var pids  = table9.rows('.selected').data();
    var pidsr  = table9.rows('.selected').nodes();
    var cid=[];
    $(pidsr).each(function() {

        var cell = table9.cell(this, 26);
        cid.push(cell);
      });
    var pid = [];
    for (var i=0; i < pids.length ;i++){
    pid.push(pids[i][1]);
    }
    $.ajax({
        type: 'POST',
        url: baseURL +'multiple_renewalpolicy',
        data: { pid: JSON.stringify(pid)},
        dataType: 'JSON',
        success: function(data){

            for (var i=0; i < data.length ;i++){
                if(data[i].status=="true"){
                    alert(data[i].message);
                    cid[i].data="Test";
                    btn.removeClass("btn btn-info btn-sm");
                    btn.addClass("btn btn-success btn-sm");

                }else{
                    alert(data.message);

                    btn.removeClass("btn btn-success btn-sm");
                    btn.addClass("btn btn-danger btn-sm");

                }
                  tid.removeClass("fa-spinner fa-pulse");
                  tid.addClass("fa-envelope");
            }
        },
        error: function(){
            alert('An error occurred while sending the Renewal Policy email.');
        }
    });

});



    // $('#submit').click(function () {
    //     alert(table9.rows('.selected').data().length + ' row(s) selected');
    // });

    $('#rselect').click(function() {


         table9.rows({ search: 'applied'}).select();
      });



$('#inscompany').on( 'change', function () {
    table9
        .columns( 7 )
        .search( this.value )
        .draw();
} );
    $('#insname').on( 'change', function () {
    table9
        .columns( 8 )
        .search( this.value )
        .draw();
} );

$('#pno').on( 'keyup', function () {
    table9
        .columns( 3)
        .search( this.value )
        .draw();
    } );

   $('#careof').on( 'change', function () {
            table9
                .columns(9)
                .search( this.value )
                .draw();

} );
    $('#mobile').on( 'keyup', function () {

    table9
        .columns(10).search(this.value)
        .draw();
} );

$('#vehno').on( 'keyup', function () {

    table9
        .columns(11).search(this.value)
        .draw();
} );


 $('#rep').on( 'change', function () {
    table9
        .columns(14 ).search(this.value)
        .draw();
} );




$('#rfrom, #rto').on('change', function () {
    table9.draw();
});


});
