require 'test_helper'

class ClassOptionsControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get class_options_new_url
    assert_response :success
  end

end
