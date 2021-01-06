import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {  
  base_url:'https://orangeroomdigital.com/salesapp/public/api/',  
  //base_url:'http://localhost/salesapp/public/api/',  
  // base_url:'https://salesapp.hblasset.com/api/',  
  name:'',
  fathername:'',
  mothername:'',
  dob:'',
  cnic:'',
  cnic_attachment:'',
  cnic_issue_date:'',

  pob_city:'',
  pob_country:'',

  pob_city_id:'',
  pob_country_id:'',
  
  email:'',
  cell:'',
  occupation:'',
  occupation_id:'',
  occ_name:'',
  // kyc 
  designation:'', 
  department:'',   
  org_emp_bes_name:'', 
  working_experience:'',  
  age_of_business:'',
  education:'',
  marital_status:'',
  marital_status_id:'',
  no_of_dependants:'',
  public_figure:'',
  average_annual_income:'',
  average_annual_income_id:'',
  refused_account_by_institute:'',
  high_value_item:'',
  // kyc end
  soi:'',
  soi_id:'', 
  soi_attachment:'',
  address:'',
  city1:'',
  country1:'',
  city1_id:'',
  country1_id:'',
  zakat:'',
  zakat_options:'',
  zakat_certificate:'',
  qq:'',
  under_age:true,
  channel:'',
  user_id:0,  

  bank_name:'',
  branch_name:'',
  accounttitle:'',
  iban:'',
  bank_name_id:'',
  branch_name_id:'',

  fund_name:'',
  fund_name_id:'',
  amount:'',
  aiw:'',
  front_end_load:'',
  payment_mode:'',
  payment_mode_id:'',      
  attachment:'',      
  bank_name_inv:'',      
  bank_name_inv_id:'',
  instrument:'',

  asf:'',
  asf_id:'',
  dpo:'',
  type_of_units:'',

  multiple_nat:'',
  nats:'',
  green_card:'',
  tax_resi:'',
  for_citi:'',
  co_ma:'',
  co_mp:'',
  attor:'',
  attor_addr:'',
  trans_fund:'',
  wf:'',
  wform:'',
  wform_options:'',
  height:'',
  customer_id:0,
  e1:1,
  loading:false,
  err:'',
  thanks_msg:'',
  auto_fill:false,
  prefilled_input_field : 'PREFILLED INPUT FIELD',
  prefilled_date_field : '1988-09-27'
},
  mutations: { 

    move(state,payload){
      state.e1 = payload
    },
    setHeight(state){
      state.height = 0
    },
    hold_ci(state,payload){

  state.name = payload.name;
  state.fathername = payload.fathername;
  state.mothername = payload.mothername;
  state.dob = payload.dob;
  state.cnic = payload.cnic;
  state.cnic_attachment = payload.cnic_attachment;
  state.cnic_issue_date = payload.cnic_issue_date;
  state.pob_city = payload.pob_city;
  state.pob_country = payload.pob_country;
  state.pob_city_id = payload.pob_city_id;
  state.pob_country_id = payload.pob_country_id;
  state.email = payload.email;
  state.cell = payload.cell;
  state.occupation = payload.occupation;
  state.occupation_id = payload.occupation_id;
  state.occ_name = payload.occ_name;
  state.designation = payload.designation; 
  state.department = payload.department;   
  state.org_emp_bes_name = payload.org_emp_bes_name; 
  state.working_experience = payload.working_experience;  
  state.age_of_business = payload.age_of_business;
  state.education = payload.education;
  state.marital_status = payload.marital_status;
  state.marital_status_id = payload.marital_status_id;
  state.no_of_dependants = payload.no_of_dependants;
  state.public_figure = payload.public_figure;
  state.average_annual_income = payload.average_annual_income;
  state.average_annual_income_id = payload.average_annual_income_id;
  state.refused_account_by_institute = payload.refused_account_by_institute;
  state.high_value_item = payload.high_value_item;
  state.soi = payload.soi;
  state.soi_id = payload.soi_id;
  state.soi_attachment = payload.soi_attachment;
  state.address = payload.address;
  state.city1 = payload.city1;
  state.city1_id = payload.city1_id;
  state.country1 = payload.country1;
  state.country1_id = payload.country1_id;
  state.zakat = payload.zakat;
  state.zakat_options = payload.zakat_options;
  state.zakat_certificate = payload.zakat_certificate;
  state.qq = payload.qq;
  state.under_age = payload.under_age;
  state.channel = payload.channel;
  state.user_id = payload.user_id;
  
},

  hold_bd(state,payload){

    state.bank_name = payload.bank_name;
    state.branch_name = payload.branch_name;
    state.accounttitle = payload.accounttitle;
    state.iban = payload.iban;
    state.bank_name_id = payload.bank_name_id;
    state.branch_name_id = payload.branch_name_id;
    state.customer_id = payload.customer_id;
    },
    hold_id(state,payload){

      state.fund_name = payload.fund_name;
      state.amount = payload.amount;
      state.aiw = payload.aiw;
      state.front_end_load = payload.front_end_load;
      state.payment_mode = payload.payment_mode;
      state.attachment = payload.attachment;
      state.bank_name_inv = payload.bank_name_inv;
      state.instrument = payload.instrument;

      state.fund_name_id = payload.fund_name_id;
      state.payment_mode_id = payload.payment_mode_id;
      state.bank_name_inv_id = payload.bank_name_inv_id;

      state.customer_id = payload.customer_id;

    },

    hold_od(state,payload){

      state.asf = payload.asf;
      state.asf_id = payload.asf_id;
      state.dpo = payload.dpo;
      state.type_of_units = payload.type_of_units;
      state.customer_id = payload.customer_id;
    },

    hold_fd(state,payload){

      state.multiple_nat = payload.multiple_nat,
      state.nats = payload.nats,
      state.green_card = payload.green_card,
      state.tax_resi = payload.tax_resi,
      state.for_citi = payload.for_citi,
      state.co_ma = payload.co_ma,
      state.co_mp = payload.co_mp,
      state.attor = payload.attor,
      state.attor_addr = payload.attor_addr,
      state.trans_fund = payload.trans_fund,
      state.wf = payload.wf,
      state.wform = payload.wform,
      state.wform_options = payload.wform_options,
      state.customer_id = payload.customer_id

    },


    save_form(state){
      state.loading = true;
      var ci = new FormData();
      ci.append('name',(state.auto_fill) ? state.prefilled_input_field : state.name);
      ci.append('father_name',(state.auto_fill) ? state.prefilled_input_field : state.fathername);
      ci.append('mother_name',(state.auto_fill) ? state.prefilled_input_field : state.mothername);
      ci.append('dob',(state.auto_fill) ? state.prefilled_date_field : state.dob);
      ci.append('cnic',(state.auto_fill) ? state.prefilled_input_field : state.cnic);
      ci.append('cnic_attachment',(state.auto_fill) ? state.cnic_attachment : state.cnic_attachment);
      ci.append('cnic_issue_date',(state.auto_fill) ? state.prefilled_date_field : state.cnic_issue_date);
      ci.append('pob_city',(state.auto_fill) ? state.prefilled_input_field : state.pob_city);
      ci.append('pob_country',(state.auto_fill) ? state.prefilled_input_field : state.pob_country);
      ci.append('pob_city_id',(state.auto_fill) ? state.prefilled_input_field : state.pob_city_id);
      ci.append('pob_country_id',(state.auto_fill) ? state.prefilled_input_field : state.pob_country_id);

      

      ci.append('email',(state.auto_fill) ? state.prefilled_input_field : state.email);
      ci.append('cell',(state.auto_fill) ? state.prefilled_input_field : state.cell);
      ci.append('occupation',(state.auto_fill) ? state.prefilled_input_field : state.occupation);
      ci.append('occupation_id',(state.auto_fill) ? state.prefilled_input_field : state.occupation_id);
      ci.append('occ_name',(state.auto_fill) ? state.prefilled_input_field : state.occ_name);

      // kyc 
      ci.append('designation',(state.auto_fill) ? state.prefilled_input_field : state.designation);
      ci.append('department',(state.auto_fill) ? state.prefilled_input_field : state.department);
      ci.append('working_experience',(state.auto_fill) ? state.prefilled_input_field : state.working_experience);
      ci.append('org_emp_bes_name',(state.auto_fill) ? state.prefilled_input_field : state.org_emp_bes_name);
      ci.append('age_of_business',(state.auto_fill) ? state.prefilled_input_field : state.age_of_business);
      ci.append('education',(state.auto_fill) ? state.prefilled_input_field : state.education);
      ci.append('marital_status',(state.auto_fill) ? state.prefilled_input_field : state.marital_status);
      ci.append('marital_status_id',(state.auto_fill) ? state.prefilled_input_field : state.marital_status_id);
      ci.append('no_of_dependants',(state.auto_fill) ? state.prefilled_input_field : state.no_of_dependants);
      ci.append('public_figure',(state.auto_fill) ? state.prefilled_input_field : state.public_figure);
      ci.append('average_annual_income',(state.auto_fill) ? state.prefilled_input_field : state.average_annual_income);
      ci.append('average_annual_income_id',(state.auto_fill) ? state.prefilled_input_field : state.average_annual_income_id);
      ci.append('refused_account_by_institute',(state.auto_fill) ? state.prefilled_input_field : state.refused_account_by_institute);
      ci.append('high_value_item',(state.auto_fill) ? state.prefilled_input_field : state.high_value_item);
      // kyc end

      ci.append('soi',(state.auto_fill) ? state.prefilled_input_field : state.soi);
      ci.append('soi_id',(state.auto_fill) ? state.prefilled_input_field : state.soi_id);
      ci.append('soi_attachment',(state.auto_fill) ? state.cnic_attachment : state.soi_attachment);
      ci.append('address',(state.auto_fill) ? state.prefilled_input_field : state.address);
      ci.append('city1',(state.auto_fill) ? state.prefilled_input_field : state.city1);
      ci.append('city1_id',(state.auto_fill) ? state.prefilled_input_field : state.city1_id);
      ci.append('country1',(state.auto_fill) ? state.prefilled_input_field : state.country1);
      ci.append('country1_id',(state.auto_fill) ? state.prefilled_input_field : state.country1_id);
      ci.append('zakat',(state.auto_fill) ? state.prefilled_input_field : state.zakat);
      ci.append('zakat_options',(state.auto_fill) ? state.prefilled_input_field : state.zakat_options);
      ci.append('zakat_certificate',(state.auto_fill) ? state.prefilled_input_field : state.zakat_certificate);
      ci.append('qq',(state.auto_fill) ? state.prefilled_input_field = 'us' : state.qq); 

  axios.post(state.base_url+'save_customer_info',ci)
  .then((ci_res) => {


    if(ci_res.status == 200){

      if(state.qq != 'pk' || state.under_age == true){
      
        state.loading = false;
        state.e1 = 4;
        state.thanks_msg = 'Dear Investor, We have received your information. Our Investment Advisor will contact you soon. Thank you';
            
    }
    else{

      state.customer_id = ci_res.data;

      var bd = new FormData();
  
      bd.append('bank_name',state.bank_name);
      bd.append('bank_name_id',state.bank_name_id);
      bd.append('branch_name',state.branch_name);
      bd.append('branch_name_id',state.branch_name_id);
      bd.append('account_title',state.accounttitle);
      bd.append('iban_number',state.iban);
      bd.append('customer_id',state.customer_id);
      axios.post(state.base_url+'save_bank_details',bd)
      .then((bd_res) => {
        if(bd_res.status == 200){
        var id = new FormData();
        id.append('fund_name',state.fund_name);
        id.append('fund_name_id',state.fund_name_id);
        id.append('amount',state.amount);
        id.append('amount_in_words',state.aiw);
        id.append('front_end_load',state.front_end_load);
        id.append('payment_mode',state.payment_mode);
        id.append('payment_mode_id',state.payment_mode_id);
        id.append('attachment',state.attachment);
        id.append('bank_name_inv',state.bank_name_inv);
        id.append('bank_name_inv_id',state.bank_name_inv_id);
        id.append('instrument_number',state.instrument);
        id.append('customer_id',state.customer_id);  
          axios.post(state.base_url+'save_investment_details',id)
          .then((id_res) =>{
            if(id_res.status == 200){
          var fatca_details = new FormData();
  
          fatca_details.append('multiple_nat',state.multiple_nat);
          fatca_details.append('nats',state.nats);
          fatca_details.append('green_card',state.green_card);
          fatca_details.append('tax_resi',state.tax_resi);
          fatca_details.append('for_citi',state.for_citi);
          fatca_details.append('co_ma',state.co_ma);
          fatca_details.append('co_mp',state.co_mp);
          fatca_details.append('attor',state.attor);
          fatca_details.append('attor_addr',state.attor_addr);
          fatca_details.append('trans_fund',state.trans_fund);
          fatca_details.append('wf',state.wf);
          fatca_details.append('wform',state.wform); 
          fatca_details.append('wform_options',state.wform_options);
          fatca_details.append('customer_id',state.customer_id);
  
          axios.post(state.base_url+'save_fatca_details',fatca_details)
          .then((fd_res) => {
            if(fd_res.status == 200){
            var other_details = new FormData();
  
            other_details.append('asf',state.asf);
            other_details.append('asf_id',state.asf_id);
            other_details.append('dpo',state.dpo);
            other_details.append('type_of_units',state.type_of_units);
            other_details.append('customer_id',state.customer_id);
  
            axios.post(state.base_url+'save_other_details',other_details)
            .then((res) => {
              if(res.status == 200){
  
                var generate_form = new FormData();
  
                generate_form.append('channel',state.channel);
                generate_form.append('customer_id',state.customer_id);
                generate_form.append('user_id',state.user_id);
                generate_form.append('customer_name',state.name);
                generate_form.append('cnic',state.cnic);
                generate_form.append('qq',state.qq);
                generate_form.append('email',state.email);
      
                axios.post(state.base_url+'generate_form',generate_form)
                .then((res) => {
                  if(res.status == 200){
                    state.loading = false;
                    state.e1 = 4;
                    state.thanks_msg = 'Dear Investor, Your account has been successfully created. Our representative will contact you soon.';
                    
                    var send_mail = new FormData();
  
                    send_mail.append('user_id',state.user_id);
                    send_mail.append('customer_name',state.name);
                    send_mail.append('cnic',state.cnic);
                    send_mail.append('qq',state.qq);
                    send_mail.append('email',state.email);

                    axios.post(state.base_url+'send_mail',send_mail)
                    .then((res) => {
                     
                    }).catch((err) => console.log(err) );

                  }
                }).catch((err) => console.log(err) );
             }
            }).catch((err) => console.log(err) );
          }
        }).catch((err) => console.log(err) );  
        }
      }).catch((err) => console.log(err) );  
      }
    }).catch((err) => console.log(err) );  

    }

}
 
}).catch(() => {
  state.err = 'Internal Server Error';
  state.loading = false;
});  
  
},



},
  actions: {

    hold_ci(context,payload){
      context.commit('hold_ci',payload);
    },

    hold_bd(context,payload){
      context.commit('hold_bd',payload);
    },

    hold_id(context,payload){
      context.commit('hold_id',payload);
    },

    hold_od(context,payload){ 
      context.commit('hold_od',payload);
    },

    hold_fd(context,payload){
      context.commit('hold_fd',payload);
    },
    save_form(context){
      context.commit('save_form');
    },

    check_status(context){
      context.commit('check_status');
    },
   
    move(context,payload){
      context.commit('move',payload);
     
    },
    setHeight(context){
      context.commit('setHeight');
     
    },
  }
})
