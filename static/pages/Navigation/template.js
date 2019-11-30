const template = `
<div class="site-wrapper">
  <div class="site-table">
    <div class="site-tablecell">
      <div class="overlay"></div>
      <div class="container site-padding">
        <div class="row">
          <div class="col-xs-12 col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8">
            <div class="site-title">
						  <span class="heading-page"> 欢迎来到我的主页
						  </span>
							<p class="mt20">welcome to my homepage</p>
            </div>
            <div class="hexagon-menu clear">
							<div class="hexagon-item">
								<div class="hex-item">
									<div></div>
									<div></div>
									<div></div>
								</div>
								<div class="hex-item">
									<div></div>
									<div></div>
									<div></div>
								</div>
								<div class="hex-content" @click="routertocv">
									<span class="hex-content-inner">
										<span class="icon">
											<i class="fa fa-user-secret"></i>
										</span>
										<span class="title">个人信息</span>
									</span>
									<svg viewBox="0 0 173.20508075688772 200" height="200" width="174" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z" fill="#6F7C6B"></path></svg>
								</div>
							</div>
							<div class="hexagon-item">
								<div class="hex-item">
									<div></div>
									<div></div>
									<div></div>
								</div>
								<div class="hex-item">
									<div></div>
									<div></div>
									<div></div>
								</div>
								<a href="" class="hex-content">
									<span class="hex-content-inner">
										<span class="icon">
											<i class="fab fa-firstdraft"></i>
										</span>
										<span class="title">前端基础</span>
									</span>
									<svg viewBox="0 0 173.20508075688772 200" height="200" width="174" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z" fill="#6F7C6B"></path></svg>
								</a>
							</div>
							<div class="hexagon-item">
								<div class="hex-item">
									<div></div>
									<div></div>
									<div></div>
								</div>
								<div class="hex-item">
									<div></div>
									<div></div>
									<div></div>
								</div>
								<a href="" class="hex-content">
									<span class="hex-content-inner">
										<span class="icon">
											<i class="fas fa-tools"></i>
										</span>
										<span class="title">框架工具</span>
									</span>
									<svg viewBox="0 0 173.20508075688772 200" height="200" width="174" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z" fill="#6F7C6B"></path></svg>
								</a>    
							</div>
							<div class="hexagon-item">
								<div class="hex-item">
									<div></div>
									<div></div>
									<div></div>
								</div>
								<div class="hex-item">
									<div></div>
									<div></div>
									<div></div>
								</div>
								<a href="" class="hex-content">
									<span class="hex-content-inner">
										<span class="icon">
											<i class="fab fa-gg"></i>
										</span>
										<span class="title">工程模板</span>
									</span>
									<svg viewBox="0 0 173.20508075688772 200" height="200" width="174" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z" fill="#6F7C6B"></path></svg>
								</a>
							</div>
							<div class="hexagon-item">
								<div class="hex-item">
									<div></div>
									<div></div>
									<div></div>
								</div>
								<div class="hex-item">
									<div></div>
									<div></div>
									<div></div>
								</div>
								<a href="" class="hex-content">
									<span class="hex-content-inner">
										<span class="icon">
											<i class="fas fa-bone"></i>
										</span>
										<span class="title">源码理解</span>
									</span>
									<svg viewBox="0 0 173.20508075688772 200" height="200" width="174" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z" fill="#6F7C6B"></path></svg>
								</a>
							</div>
						</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`;

export default template;