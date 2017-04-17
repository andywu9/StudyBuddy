require 'test_helper'

class SignUpControllerTest < ActionDispatch::IntegrationTest
  test "should get signin" do
    get sign_up_signin_url
    assert_response :success
  end

end
