module ApplicationHelper

  def alert_for(flash_type)
    { error: 'alert-danger' }[flash_type.to_sym] || flash_type.to_s
  end

end
