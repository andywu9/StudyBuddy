json.array!(@events) do |event|
  json.extract! event, :id, :title
  json.start event.start_time
  json.end event.end_time
  json.dow event.dow
  json.url event_url(event, format: :html)
end