$(function() {   
    
    $("#careall").on('change', function() {
        var checked = this.checked;
        if(checked){
            $("#careview").prop('checked', true);
            $("#careadd").prop('checked', true);
            $("#careedit").prop('checked', true);
            $("#caredelete").prop('checked', true);
        }else{
            $("#careview").prop('checked', false);
            $("#careadd").prop('checked', false);
            $("#careedit").prop('checked', false);
            $("#caredelete").prop('checked', false);
        } 
    });
    
    $("#clientall").on('change', function() {
        var checked = this.checked;
        if(checked){
            $("#clientview").prop('checked', true);
            $("#clientadd").prop('checked', true);
            $("#clientedit").prop('checked', true);
            $("#clientdelete").prop('checked', true);
        }else{
            $("#clientview").prop('checked', false);
            $("#clientadd").prop('checked', false);
            $("#clientedit").prop('checked', false);
            $("#clientdelete").prop('checked', false);
        } 
    });
    
    $("#policyall").on('change', function() {
        var checked = this.checked;
        if(checked){
            $("#policyview").prop('checked', true);
            $("#policyadd").prop('checked', true);
            $("#policyedit").prop('checked', true);
            $("#policydelete").prop('checked', true);
        }else{
            $("#policyview").prop('checked', false);
            $("#policyadd").prop('checked', false);
            $("#policyedit").prop('checked', false);
            $("#policydelete").prop('checked', false);
        } 
    });
    
     $("#claimall").on('change', function() {
        var checked = this.checked;
        if(checked){
            $("#claimview").prop('checked', true);
            $("#claimadd").prop('checked', true);
            $("#claimedit").prop('checked', true);
            $("#claimdelete").prop('checked', true);
        }else{
            $("#claimview").prop('checked', false);
            $("#claimadd").prop('checked', false);
            $("#claimedit").prop('checked', false);
            $("#claimdelete").prop('checked', false);
        } 
    });
    
     $("#emailall").on('change', function() {
        var checked = this.checked;
        if(checked){
            $("#emailview").prop('checked', true);
            $("#emailadd").prop('checked', true);
            $("#emailedit").prop('checked', true);
            $("#emaildelete").prop('checked', true);
        }else{
            $("#emailview").prop('checked', false);
            $("#emailadd").prop('checked', false);
            $("#emailedit").prop('checked', false);
            $("#emaildelete").prop('checked', false);
        } 
    });
    
     $("#smsall").on('change', function() {
        var checked = this.checked;
        if(checked){
            $("#smsview").prop('checked', true);
            $("#smsadd").prop('checked', true);
            $("#smsedit").prop('checked', true);
            $("#smsdelete").prop('checked', true);
        }else{
            $("#smsview").prop('checked', false);
            $("#smsadd").prop('checked', false);
            $("#smsedit").prop('checked', false);
            $("#smsdelete").prop('checked', false);
        } 
    });
    
     $("#userall").on('change', function() {
        var checked = this.checked;
        if(checked){
            $("#userview").prop('checked', true);
            $("#useradd").prop('checked', true);
            $("#useredit").prop('checked', true);
            $("#userdelete").prop('checked', true);
        }else{
            $("#userview").prop('checked', false);
            $("#useradd").prop('checked', false);
            $("#useredit").prop('checked', false);
            $("#userdelete").prop('checked', false);
        } 
    });
    
     $("#repall").on('change', function() {
        var checked = this.checked;
        if(checked){
            $("#repview").prop('checked', true);
            $("#repadd").prop('checked', true);
            $("#repedit").prop('checked', true);
            $("#repdelete").prop('checked', true);
        }else{
            $("#repview").prop('checked', false);
            $("#repadd").prop('checked', false);
            $("#repedit").prop('checked', false);
            $("#repdelete").prop('checked', false);
        } 
    });
    
     $("#insall").on('change', function() {
        var checked = this.checked;
        if(checked){
            $("#insview").prop('checked', true);
            $("#insadd").prop('checked', true);
            $("#insedit").prop('checked', true);
            $("#insdelete").prop('checked', true);
        }else{
            $("#insview").prop('checked', false);
            $("#insadd").prop('checked', false);
            $("#insedit").prop('checked', false);
            $("#insdelete").prop('checked', false);
        } 
    });
    
     $("#policytall").on('change', function() {
        var checked = this.checked;
        if(checked){
            $("#policytview").prop('checked', true);
            $("#policytadd").prop('checked', true);
            $("#policytedit").prop('checked', true);
            $("#policytdelete").prop('checked', true);
        }else{
            $("#policytview").prop('checked', false);
            $("#policytadd").prop('checked', false);
            $("#policytedit").prop('checked', false);
            $("#policytdelete").prop('checked', false);
        } 
    });
    
     $("#suball").on('change', function() {
        var checked = this.checked;
        if(checked){
            $("#subview").prop('checked', true);
            $("#subadd").prop('checked', true);
            $("#subedit").prop('checked', true);
            $("#subdelete").prop('checked', true);
        }else{
            $("#subview").prop('checked', false);
            $("#subadd").prop('checked', false);
            $("#subedit").prop('checked', false);
            $("#subdelete").prop('checked', false);
        } 
    });
    
     $("#vehall").on('change', function() {
        var checked = this.checked;
        if(checked){
            $("#vehview").prop('checked', true);
            $("#vehadd").prop('checked', true);
            $("#vehedit").prop('checked', true);
            $("#vehdelete").prop('checked', true);
        }else{
            $("#vehview").prop('checked', false);
            $("#vehadd").prop('checked', false);
            $("#vehedit").prop('checked', false);
            $("#vehdelete").prop('checked', false);
        } 
    });
    
    $("#nmall").on('change', function() {
        var checked = this.checked;
        if(checked){
            $("#nmview").prop('checked', true);
            $("#nmadd").prop('checked', true);
            $("#nmedit").prop('checked', true);
            $("#nmdelete").prop('checked', true);
        }else{
            $("#nmview").prop('checked', false);
            $("#nmadd").prop('checked', false);
            $("#nmedit").prop('checked', false);
            $("#nmdelete").prop('checked', false);
        } 
    });
     $("#docall").on('change', function() {
        var checked = this.checked;
        if(checked){
            $("#docview").prop('checked', true);
            $("#docadd").prop('checked', true);
            $("#docedit").prop('checked', true);
            $("#docdelete").prop('checked', true);
        }else{
            $("#docview").prop('checked', false);
            $("#docadd").prop('checked', false);
            $("#docedit").prop('checked', false);
            $("#docdelete").prop('checked', false);
        } 
    });
    $("#claimtall").on('change', function() {
        var checked = this.checked;
        if(checked){
            $("#claimtview").prop('checked', true);
            $("#claimtadd").prop('checked', true);
            $("#claimtedit").prop('checked', true);
            $("#claimtdelete").prop('checked', true);
        }else{
            $("#claimtview").prop('checked', false);
            $("#claimtadd").prop('checked', false);
            $("#claimtedit").prop('checked', false);
            $("#claimtdelete").prop('checked', false);
        } 
    });
    
    $("#claimsall").on('change', function() {
        var checked = this.checked;
        if(checked){
            $("#claimsview").prop('checked', true);
            $("#claimsadd").prop('checked', true);
            $("#claimsedit").prop('checked', true);
            $("#claimsdelete").prop('checked', true);
        }else{
            $("#claimsview").prop('checked', false);
            $("#claimsadd").prop('checked', false);
            $("#claimsedit").prop('checked', false);
            $("#claimsdelete").prop('checked', false);
        } 
    });

});

