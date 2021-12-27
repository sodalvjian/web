# < Mercury >

---

## 目录结构

- 📁 src @根

  - 📁 api 接口
  - 📁 assets 静态资源目录
  - 📁 components 公共组建
    - 📁 DialogShowInfo 弹窗信息显示
    - 📁 NoData 无数据组件
    - 📁 NoDataTable 表格中无数据组件
  - 📁 filters 过滤器
    - 📄 index.js 过滤器配置
  - 📁 layout 整体布局
  - 📁 modules 模块
    - 📁 components 组件
      - 📁 SelectPipeline （选择 pipeline 组件，整合起来的，目前应该不用了）
      - 📁 SelectPipelineSplit （选择 pipeline 组件，父子拆分出来，目前用的是这个）
  - 📁 router 路由配置（根据 views 结构）
  - 📁 store 全局状态
  - 📁 styles 样式
  - 📁 utils 工具类
  - 📁 views 页面

    - 📁 annotate-jobs-page （Batch Analysis 菜单中的内容）
      - 📁 pages （Batch Analysis 中的页面）
        - 📁 job-create （创建 job 页）
        - 📁 job-details （job 详情页）
        - 📁 job-list （Batch Analysis 列表）
    - 📁 api-page （API 页面）
    - 📁 common （普通页面）
      - 📁 forget-password （忘记密码页）
      - 📁 login （登录页）
      - 📁 login-auto （注册后自动登录页）
      - 📁 privacy-policy （隐私政策页）
      - 📁 register （注册页）
      - 📁 send-email-success （发送邮件成功页）
      - 📁 user-agreement （用户须知页）
    - 📁 document-page （Documentation 菜单页）
    - 📁 home （首页）
    - 📁 realtime-analysis-page (Real-Time Analysis 菜单页)
      - 📁 components （real-time 组件）
        - 📄 AnalysisResult.vue （real-time 分析结果模块）
        - 📄 EntityRelation.vue （Entity 关系模块）
        - 📄 ShowMark.vue （brat 展示模块）
    - 📁 realtime-analysis-page-brat (Real-Time Analysis 在文档中显示用)
      - 📁 components （real-time 组件）
        - 📄 AnalysisResult.vue （real-time 分析结果模块）
        - 📄 EntityRelation.vue （Entity 关系模块）
        - 📄 ShowMark.vue （brat 展示模块）
    - 📁 realtime-analysis-test-page (Real-Time Analysis 测试用，无需关注)

      - 📁 components （real-time 组件）
        - 📄 AnalysisResult.vue （real-time 分析结果模块）
        - 📄 EntityRelation.vue （Entity 关系模块）
        - 📄 ShowMark.vue （brat 展示模块）

    - 📁 roles-page（权限菜单，隐藏中）
    - 📁 user-page （用户中心）
      - 📁 components （用户中心模块）
        - 📄 Sider.vue （用户中心侧边栏）
      - 📁 pages
        - 📁 account-password （账号与密码页）
        - 📁 bill-detail （账单详情页）
        - 📁 cost-management （支付管理页）
        - 📁 order-invoice （账单发票页）
        - 📁 personal-info （个人信息页）

  - 📄 App.vue 入口模版
  - 📄 main.js 入口主函数
  - 📄 permission.js 入口全局路由拦截器配置
  - 📄 settings.js 配置项（title 等）

  ## 依赖库

```json
 "axios": "0.18.1",
 "echarts": "^4.7.0",
 "element-ui": "2.15.5",
 "file-saver": "^2.0.2",
 "jquery": "^3.2.1",
 "js-cookie": "2.2.0",
 "lodash": "^4.17.4",
 "moment": "^2.24.0",
 "normalize.css": "7.0.0",
 "nprogress": "0.2.0",
 "path-to-regexp": "2.4.0",
 "stripe": "^8.144.0",
 "uuid": "^8.3.0",
 "vue": "2.6.10",
 "vue-avatar-editor-improved": "^1.0.5",
 "vue-clipboard2": "^0.3.1",
 "vue-codemirror": "^4.0.6",
 "vue-echarts": "^5.0.0-beta.0",
 "vue-markdown": "^2.2.4",
 "vue-router": "3.0.6",
 "vuex": "3.1.0",
 "xss": "^1.0.9"
```

## Git 分支

- master （master 主分支）
- dev x.x.x （开发分支，数值越大版本越新）

## 安装

```bash
npm run build  #安装

npm run dev  #开发

npm run build  #发布构建

npm run lint  #eslint检查修复
```

## 文档地址
