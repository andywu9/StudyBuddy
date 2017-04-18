require 'test_helper'

class CourseChatControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get course_chat_index_url
    assert_response :success
  end

end
