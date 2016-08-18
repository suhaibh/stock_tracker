require 'test_helper'

class UserControllerTest < ActionController::TestCase
  test "should get my_portfolio" do
    get :my_portfolio
    assert_response :success
  end

end
