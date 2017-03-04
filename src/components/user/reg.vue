<template>
    <div class="user-routers">
        <div class="signUpCard">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span style="">Sign Up</span>
          </div>
            <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2">
            <el-form-item prop="name">
                <el-input v-model="ruleForm2.name"
                auto-complete="off" placeholder="Username"></el-input>
            </el-form-item>
            <el-form-item prop="pass">
                <el-input type="password" v-model="ruleForm2.pass"
                auto-complete="off" placeholder="Password"></el-input>
            </el-form-item>
            <el-form-item prop="checkPass">
              <el-input type="password" v-model="ruleForm2.checkPass"
              auto-complete="off" placeholder="Type again"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="signupForm('ruleForm2')">
                    Sign Up</el-button>
                <el-button @click="resetForm('ruleForm2')">Reset</el-button>
            </el-form-item>
            <el-form-item style="text-align:center">
                <span class="demonstration">Already a member?
                  <router-link to="/log" style="display:inline;padding: 0px 10px;
                  font-weight:bold">Log In</router-link></span>
            </el-form-item>
            </el-form>
        </el-card>
        </div>
    </div>
</template>

<script>
  export default {
    mounted: function () {
            document.title = this.$route.path   // 改变网页title
        },
    data() {
      var checkName1 = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('用户名不能为空'));
        }
        setTimeout(() => {
            if (value.length < 3 || value.length > 32) {
                callback(new Error('输入3-32个字符'));
            } else {
                callback();
            }
        }, 800);
      };
      var validatePass1 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (value.length < 2) {
            callback(new Error('请输入至少2个字符'));
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      }
      return {
        url: this.$route.path,
        ruleForm2: {
          pass: '',
          checkPass: '',
          name: ''
        },
        rules2: {
          pass: [
            { validator: validatePass1, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          name: [
            { validator: checkName1, trigger: 'blur' }
          ]
        }
      };
    },
    created: function () {
        this.getId()
    },
    methods: {
        getId () {
            let self = this
            fetch('http://localhost/camU/index/index/test3.html', {
                method: 'GET'
            })
            .then(res => res.json())
            .then(function (id) {
                console.log(id)
            })
        },
        signForm(formName) {
        // console.log(this.$route.path)
        // this.$refs[formName].validate((valid) => {
          console.log(formName)
          let self = this
          let formData = new FormData();
          formData.append("name", formName.name);
          formData.append("pwd", formName.pass);
          // fetch('http://localhost:3000/login', {
          //   method: 'GET',
          //   headers: { 'Content-Type': 'application/json' },
          //   credentials: 'same-origin'
          // })
          // .then(res => res.json())
          // .then(function (id) {
          //   console.log(id)
          //   if (id) {
          //     alert('submit!');
          //   } else {
          //     console.log('error login!!');
          //     return false;
          //   }
          // })
          fetch('http://localhost/camU/index/login/login.html', {
            method: 'POST',
            // headers: { 'Content-Type': 'application/json' },
            body: formData
          })
          .then(res => res.json())
          .then(function (id) {
            console.log(id)
            if (id) {
              // console.log(self.$route.path)
              self.$router.push('/')
              console.log(self.$route)
              // alert('submit!');
            } else {
              console.log('error login!!');
              return false;
            }
          })
        // });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields()
        console.log(formName)
      },
      tabForm(tab) {
        console.log(tab)
      }
    }
  }
</script>

<style lang='scss' scope>
    .loginCard, .signUpCard {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 8%;
    }
    .box-card {
        width: 320px;
        padding: 40px;
        button {
          width: 47%;
        }
    }
    .clearfix {
        text-align: center;
        font-size: 30px;
        span {
          font-weight: bold;
        }
        
    }
  .clearfix:after {
      clear: both
  }
    .likes {
		position: relative;
        h1 {
            font-size: 50px
        }
    }
</style>