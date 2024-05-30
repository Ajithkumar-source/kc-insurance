			<!-- Heading -->
			<div class="sidebar-heading">
				Manage
			</div>

			<!-- Nav Item - Pages Collapse Menu -->
                <?php   
                  $permissions=json_decode($this->session->userdata('permissions'), true);

                  // print_r($permissions);
              
                  if (array_key_exists("careview", $permissions) || 
                  array_key_exists("careadd", $permissions) || 
                  array_key_exists("careedit", $permissions) || 
                  array_key_exists("caredelete", $permissions)) {
            
                ?>
            
                        <li class="nav-item">
                <a class="nav-link" href="<?=base_url('careof');?>">
                <i class=" fas fa-user "></i>&nbsp;
                    <span>Careof</span></a>
            </li>
               <?php }?>



               <?php   
                  $permissions=json_decode($this->session->userdata('permissions'), true);

                 // print_r($permissions);
              
                  if (array_key_exists("clientview", $permissions) || 
                  array_key_exists("clientadd", $permissions) || 
                  array_key_exists("clientedit", $permissions) || 
                  array_key_exists("clientdelete", $permissions)) {
            
                ?>
       
                        <li class="nav-item">
                <a class="nav-link" href="<?=base_url('clients');?>">
                    <i class="fas fa-fw fa-users"></i>
                    <span>Clients</span></a>
            </li>
            <?php }?>

        
            
            <?php   
                  $permissions=json_decode($this->session->userdata('permissions'), true);

                  // print_r($permissions);
              
                  if (array_key_exists("policyview", $permissions) || 
                  array_key_exists("policyadd", $permissions) || 
                  array_key_exists("policyedit", $permissions) || 
                  array_key_exists("policydelete", $permissions)) {
            
                ?>

            <li class="nav-item">
                <a class="nav-link" href="<?=base_url('policies');?>">
                    <i class="fas fa-fw fa-umbrella"></i>
                    <span>Policies</span></a>
            </li>
            <?php }?>

            <?php   
                  $permissions=json_decode($this->session->userdata('permissions'), true);

                  // print_r($permissions);
              
                  if (array_key_exists("claimview", $permissions) || 
                  array_key_exists("claimadd", $permissions) || 
                  array_key_exists("claimedit", $permissions) || 
                  array_key_exists("claimdelete", $permissions)) {
            
                ?>
            <li class="nav-item">
                <a class="nav-link" href="<?=base_url('claims');?>">
                <i class="fas fa-fw fa-file-alt"></i>
                    <span>Claims</span></a>
            </li>
            <?php }?>

         
            <div class="sidebar-heading">
				Marketing Tools
			</div>

			<!-- Nav Item - Pages Collapse Menu -->

            <?php   
                  $permissions=json_decode($this->session->userdata('permissions'), true);

                  // print_r($permissions);
              
                  if (array_key_exists("emailview", $permissions) || 
                  array_key_exists("emailadd", $permissions) || 
                  array_key_exists("emailedit", $permissions) || 
                  array_key_exists("emaildelete", $permissions)) {
            
                ?>


                        <li class="nav-item">
                <a class="nav-link" href="<?=base_url('email');?>">
                    <i class="fas fa-fw fa-mail-bulk"></i>
                    <span>Email</span></a>
            </li>
            <?php }?>

            
            <?php   
                  $permissions=json_decode($this->session->userdata('permissions'), true);

                  // print_r($permissions);
              
                  if (array_key_exists("smsview", $permissions) || 
                  array_key_exists("smsadd", $permissions) || 
                  array_key_exists("smsedit", $permissions) || 
                  array_key_exists("smsdelete", $permissions)) {
            
                ?>
            <li class="nav-item">
                <a class="nav-link" href="<?=base_url('sms');?>">
                    <i class="fas fa-fw fa-mobile"></i>
                    <span>SMS</span></a>
            </li>
            <?php }?>

            <li class="nav-item">
                <a class="nav-link" href="<?=base_url('quote');?>">
                    <i class="fas fa-fw fa-user"></i>
                    <span>Quote</span></a>
            </li>



            <div class="sidebar-heading">
				Reports
			</div>

			<!-- Nav Item - Pages Collapse Menu -->
              
            <?php   
                  $permissions=json_decode($this->session->userdata('permissions'), true);

                  // print_r($permissions);
              
                  if (array_key_exists("renewview", $permissions)) 
                   {
            
                ?>
                        <li class="nav-item">
                <a class="nav-link" href="<?=base_url('renewal');?>">
                    <i class="fas fa-retweet"></i>
                    <span>Renewal</span></a>
            </li>
            <?php }?>

              
            <?php   
                  $permissions=json_decode($this->session->userdata('permissions'), true);

                  // print_r($permissions);
              
                  if (array_key_exists("leadview", $permissions))  {
            
                ?>
            <li class="nav-item">
                <a class="nav-link" href="<?=base_url('leading');?>">
                    <i class="fas fa-chart-line"></i>
                    <span>Leading</span></a>
            </li>
            <?php }?>
          



           

			<!-- Nav Item - Pages Collapse Menu -->
                                                                                                                                       
            
           
     			 <li class="nav-item">
				<a class="nav-link" href="#" data-toggle="collapse" data-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
					<i class="fas fa-fw fa-folder"></i>
					<span>Master</span>
				</a>
				<div id="collapsePages" class="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
					<div class="bg-white py-2 collapse-inner rounded">
						<!-- <h6 class="collapse-header">Login Screens:</h6> -->
                        <?php   
                  $permissions=json_decode($this->session->userdata('permissions'), true);

                  // print_r($permissions);
              
                  if (array_key_exists("repview", $permissions) || 
                  array_key_exists("repadd", $permissions) || 
                  array_key_exists("repedit", $permissions) || 
                  array_key_exists("repdelete", $permissions)) { 
            
                ?>
						<a class="collapse-item" href="<?=base_url('rep');?>">
                    <i class="fas fa-fw fa-people-arrows"></i>
                    <span> Representative</span></a>
                    <?php }?>

                    <?php   
                  $permissions=json_decode($this->session->userdata('permissions'), true);

                  // print_r($permissions);
              
                  if (array_key_exists("userview", $permissions) || 
                  array_key_exists("useradd", $permissions) || 
                  array_key_exists("useredit", $permissions) || 
                  array_key_exists("userdelete", $permissions)) { 
            
                ?>
						<a class="collapse-item" href="<?=base_url('users');?>">
                    <i class="fas fa-user"></i>
                    <span> Users</span></a>
                    <?php }?>

                    <?php   
                  $permissions=json_decode($this->session->userdata('permissions'), true);

                  // print_r($permissions);
              
                  if (array_key_exists("insview", $permissions) || 
                  array_key_exists("insadd", $permissions) || 
                  array_key_exists("insedit", $permissions) || 
                  array_key_exists("insdelete", $permissions)) { 
            
                ?>
                    <a class="collapse-item" href="<?=base_url('inscompany');?>">
                    <i class="fas fa-building"></i>
                    <span>Insurance company</span></a>
                    <?php }?>

                    <?php   
                  $permissions=json_decode($this->session->userdata('permissions'), true);

                  // print_r($permissions);
              
                  if (array_key_exists("policytview", $permissions) || 
                  array_key_exists("policytadd", $permissions) || 
                  array_key_exists("policytedit", $permissions) || 
                  array_key_exists("policytdelete", $permissions)) { 
            
                ?>
                    <a class="collapse-item" href="<?=base_url('pytype');?>">
                    <i class="fas fa-shield-alt"></i>
                    <span>Policy Type</span></a>
                    <?php }?>

                    <?php   
                  $permissions=json_decode($this->session->userdata('permissions'), true);

                  // print_r($permissions);
              
                  if (array_key_exists("subview", $permissions) || 
                  array_key_exists("subadd", $permissions) || 
                  array_key_exists("subedit", $permissions) || 
                  array_key_exists("subdelete", $permissions)) { 
            
                ?>
                    <a class="collapse-item" href="<?=base_url('stype');?>">
                    <i class="fas fa-box"></i>
                    <span>Sub Type</span></a>
                    <?php }?>

                    <?php   
                  $permissions=json_decode($this->session->userdata('permissions'), true);

                  // print_r($permissions);
              
                  if (array_key_exists("vehview", $permissions) || 
                  array_key_exists("vehadd", $permissions) || 
                  array_key_exists("vehedit", $permissions) || 
                  array_key_exists("vehdelete", $permissions)) { 
            
                ?>
                    <a class="collapse-item" href="<?=base_url('vcompany');?>">
                    <i class="fas fa-car"></i>
                    <span>Vehicle Company</span></a>
                    <?php }?>

                    <?php   
                  $permissions=json_decode($this->session->userdata('permissions'), true);

                  // print_r($permissions);
              
                  if (array_key_exists("nmview", $permissions) || 
                  array_key_exists("nmadd", $permissions) || 
                  array_key_exists("nmedit", $permissions) || 
                  array_key_exists("nmdelete", $permissions)) { 
            
                ?>
                    <a class="collapse-item" href="<?=base_url('nmtype');?>">
                    <i class="fas fa-paste"></i>
                    <span>Non-Motor Type</span></a>
                    <?php }?>
                    
                    <?php   
                  $permissions=json_decode($this->session->userdata('permissions'), true);

                  // print_r($permissions);
              
                  if (array_key_exists("docview", $permissions) || 
                  array_key_exists("docadd", $permissions) || 
                  array_key_exists("docedit", $permissions) || 
                  array_key_exists("docdelete", $permissions)) { 
            
                ?>
                    <a class="collapse-item" href="<?=base_url('doctype');?>">
                    <i class="fas fa-paste"></i>
                    <span>Documents Type</span></a>
                    <?php }?>

                    <?php   
                  $permissions=json_decode($this->session->userdata('permissions'), true);

                  // print_r($permissions);
              
                  if (array_key_exists("claimtview", $permissions) || 
                  array_key_exists("claimtadd", $permissions) || 
                  array_key_exists("claimtedit", $permissions) || 
                  array_key_exists("claimtdelete", $permissions)) { 
            
                ?>
                    <a class="collapse-item" href="<?=base_url('ctype');?>">
                <i class="fas fa-clinic-medical"></i>
                    <span>Claim Type</span></a>
                    <?php }?>

                   <?php   
                  $permissions=json_decode($this->session->userdata('permissions'), true);

                  // print_r($permissions);
              
                  if (array_key_exists("claimsview", $permissions) || 
                  array_key_exists("claimsadd", $permissions) || 
                  array_key_exists("claimsedit", $permissions) || 
                  array_key_exists("claimsdelete", $permissions)) { 
            
                ?>
                    <a class="collapse-item" href="<?=base_url('cstype');?>">
                    <i class="fas fa-motorcycle"></i>
                    <span>Claim SubType</span></a>
                    <?php }?>

					</div>
				</div>
			</li> 

		 
