class CourseChatController < ApplicationController
  def index
  	@messages = Message.all
  end
end
