# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  config.vm.box = "centos/7"
  config.vm.box_check_update = false
  config.vm.network "forwarded_port", guest: 8081, host: 8081

  config.vm.provision "shell", inline: <<-SHELL
    yum install -y epel-release
    yum install -y nodejs npm
    cd /vagrant
    npm update
  SHELL

  config.vm.define "deploy", primary: true do |deploy|
    # for the use of port 8081
    deploy.vm.provision "shell", inline: "npm run deploy --port 18081"
  end

  config.vm.define "test" do |test|
    # deploy-test already starts on 8081
    test.vm.provision "shell", inline: "npm run deploy-test"
  end
end
